/**
 * Google Apps Script - Endpoint Web App para Google Sheets
 * 
 * INSTRUCCIONES DE INSTALACIÓN:
 * 1. Abra su archivo de Google Sheets en Drive:
 *    https://docs.google.com/spreadsheets/d/1NwhFRnzGOtRii-ksgrv-hpV_pg2GvZHFGDQLqrJoTNw/edit
 * 2. En el menú superior, vaya a "Extensiones" > "Apps Script".
 * 3. Si hay código anterior, bórrelo. Pegue este código en el editor.
 * 4. Guarde el proyecto (icono de disquete).
 * 5. Haga clic en el botón superior derecho que dice "Implementar" (Deploy) > "Nueva implementación" (New deployment).
 * 6. En el engranaje de configuración, elija "Aplicación web" (Web App).
 * 7. Configure las siguientes opciones obligatorias:
 *    - Descripción: Guardar respuestas del formulario STEAM
 *    - Ejecutar como (Execute as): "Yo" (Su correo electrónico de Google)
 *    - Quién tiene acceso (Who has access): "Cualquier persona" (Anyone) - ESTO ES VITAL para que la página web pueda enviarle datos.
 * 8. Haga clic en "Implementar".
 * 9. Copie la "URL de la aplicación web" que le genere (debería terminar en "/exec").
 * 10. Pegue esa URL en la variable 'googleSheetsWebAppUrl' en el archivo local 'app.js' (línea 490 aprox.).
 */

function doPost(e) {
  // Configuración de cabeceras CORS para permitir la petición desde la aplicación web local
  const output = ContentService.createTextOutput();
  output.setMimeType(ContentService.MimeType.JSON);
  
  // Agregar cabeceras CORS manualmente por si el navegador realiza pre-vuelo (aunque en Apps Script se maneja retornando el HTML o JSON)
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  };
  
  try {
    // 1. Parsear los datos JSON de entrada
    const postData = JSON.parse(e.postData.contents);
    const actor = postData.actor || "General";
    const respuestas = postData.respuestas || {};
    
    // 2. Mapear el nombre largo del actor al nombre corto de la pestaña (Sheets restringe a 31 caracteres)
    const MAPA_ACTORES = {
      "Gobernación / Secretaría de Educación de Caldas": "Gobernación Caldas",
      "Alcaldía y Secretaría de Manizales": "Alcaldía Manizales",
      "Alcalde de Municipio de Caldas": "Alcaldes Municipios",
      "Rector de I.E. Pública con Aula STEAM": "Rectores",
      "Docente de I.E. con Aula STEAM": "Docentes",
      "Coordinador de Aula STEAM Caldas/Manizales": "Coordinadores",
      "Directivo UNAL (Vicerrector / DIMA / Financiero / Contratación)": "Directivos UNAL",
      "Equipo del Aula STEM - Universidad Nacional": "Equipo STEM UNAL",
      "Aliado Académico / Estratégico (U. de Caldas / Fundación Luker)": "Aliados",
      "Proveedor de Equipos, Mobiliario o Kits": "Proveedores",
      "Futuro Beneficiario (Alcalde o Rector proyectado)": "Futuros Beneficiarios"
    };
    
    let nombrePestana = MAPA_ACTORES[actor.trim()];
    if (!nombrePestana) {
      // Limpieza de caracteres no permitidos en nombres de pestañas de Excel
      nombrePestana = actor.replace(/[/\\?*:[\]]/g, "").substring(0, 30).trim();
    }
    
    // 3. Abrir la hoja de cálculo y obtener la pestaña destino
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(nombrePestana);
    
    if (!sheet) {
      sheet = ss.insertSheet(nombrePestana);
    }
    
    // 4. Si la pestaña es nueva, crear la columna inicial "Fecha y Hora"
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Fecha y Hora"]);
      sheet.getRange(1, 1)
        .setFontWeight("bold")
        .setBackground("#4f46e5") // Color índigo premium
        .setFontColor("#ffffff")
        .setHorizontalAlignment("center");
      sheet.setFrozenRows(1);
    }
    
    // 5. Leer los encabezados actuales de la hoja (Fila 1)
    let encabezados = sheet.getRange(1, 1, 1, Math.max(1, sheet.getLastColumn())).getValues()[0];
    
    // 6. Preparar el array para la nueva fila
    const filaNueva = new Array(encabezados.length).fill("");
    
    // Formatear fecha y hora localmente
    const fechaActual = Utilities.formatDate(new Date(), "America/Bogota", "yyyy-MM-dd HH:mm:ss");
    filaNueva[0] = fechaActual;
    
    // 7. Alinear las respuestas recibidas con las columnas de Sheets
    for (const [pregunta, respuesta] of Object.entries(respuestas)) {
      if (pregunta === "Fecha y Hora") continue;
      
      let indiceColumna = encabezados.indexOf(pregunta);
      
      // Si la pregunta no existe como columna, la agregamos dinámicamente al final de la primera fila
      if (indiceColumna === -1) {
        sheet.getRange(1, encabezados.length + 1).setValue(pregunta)
          .setFontWeight("bold")
          .setBackground("#e2e8f0") // Gris elegante para preguntas dinámicas
          .setFontColor("#0f172a")
          .setHorizontalAlignment("left");
        
        encabezados.push(pregunta);
        filaNueva.push(respuesta); // Agregar celda para el nuevo valor
      } else {
        filaNueva[indiceColumna] = respuesta;
      }
    }
    
    // 8. Escribir los datos al final de la hoja
    sheet.appendRow(filaNueva);
    
    // Auto-ajustar las columnas para asegurar la legibilidad del Excel
    try {
      sheet.autoResizeColumns(1, encabezados.length);
    } catch(err) {
      // Ignorar fallos de cuota visual en ejecuciones masivas
    }
    
    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: "Respuesta guardada correctamente en la pestaña " + nombrePestana
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch(error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
