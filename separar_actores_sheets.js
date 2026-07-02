/**
 * Google Apps Script - Separador de Respuestas por Actor
 * 
 * INSTRUCCIONES:
 * 1. Abra su archivo de Google Sheets en Drive (Excel en Drive):
 *    https://docs.google.com/spreadsheets/d/1NwhFRnzGOtRii-ksgrv-hpV_pg2GvZHFGDQLqrJoTNw/edit
 * 2. En el menú superior, vaya a "Extensiones" > "Apps Script".
 * 3. Borre cualquier código existente en el archivo (generalmente Código.gs) y pegue este script.
 * 4. Guarde el proyecto (icono de disquete).
 * 5. En la barra superior, seleccione la función 'crearTriggerDeEnvio' y haga clic en el botón "Ejecutar".
 * 6. Otorgue los permisos que Google le solicite (Configuración avanzada > Ir a Proyecto sin título (no seguro) > Permitir).
 * 
 * ¡Listo! Cada vez que ingrese una respuesta desde el formulario, se copiará automáticamente a la pestaña del actor correspondiente.
 */

function alEnviarFormulario(e) {
  if (!e || !e.range) {
    Logger.log("Ejecución sin datos de evento válidos (ej. ejecución manual). Cancelando procesamiento.");
    return;
  }
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const hojaOrigen = e.range.getSheet();
  const rangoFila = e.range;
  const filaValores = rangoFila.getValues()[0];
  
  // 1. Buscar dinámicamente la columna del Actor "Rol descriptivo (Actor)"
  const encabezados = hojaOrigen.getRange(1, 1, 1, hojaOrigen.getLastColumn()).getValues()[0];
  const nombreColumnaActor = "Rol descriptivo (Actor)";
  const indiceColumnaActor = encabezados.indexOf(nombreColumnaActor);
  
  if (indiceColumnaActor === -1) {
    Logger.log("Error: No se encontró la columna '" + nombreColumnaActor + "' en la hoja principal.");
    return;
  }
  
  // 2. Obtener el nombre del actor de la fila activa
  const valorActor = filaValores[indiceColumnaActor];
  if (!valorActor || valorActor.toString().trim() === "") {
    Logger.log("El rol del actor está vacío en la respuesta activa.");
    return;
  }
  
  // 3. Mapa de traducción para nombres cortos de pestañas (Límite estricto de 31 caracteres en Google Sheets)
  const MAPA_ACTORES = {
    "Gobernación / Secretaría de Educación de Caldas / Alcaldía y Secretaría de Manizales": "Gob Caldas - Alc Manizales",
    "Rector(a) / Docente de I.E con Aula STEAM": "Rectores y Docentes",
    "Coordinador(a) de Aula STEAM Caldas/Manizales": "Coordinadores",
    "Directivo UNAL (Vicerrector / DIMA / Financiero / Contratación)": "Directivos UNAL",
    "Equipo del Centro de Prototipado UNAL": "Equipo Prototipado UNAL",
    "Equipo de OSO UNAL": "Equipo OSO UNAL",
    "Aliado Académico / Estratégico (U. de Caldas / Fundación Luker)": "Aliados",
    "Proveedor de Equipos, Mobiliario o Kits": "Proveedores",
    "Futuro Beneficiario (Alcalde o Rector proyectado)": "Futuros Beneficiarios"
};
  
  let nombrePestana = MAPA_ACTORES[valorActor.toString().trim()];
  if (!nombrePestana) {
    // Si no está en el mapa, limpiar caracteres especiales no permitidos en pestañas y recortar a 30 caracteres
    nombrePestana = valorActor.toString().replace(/[/\\?*:[\]]/g, "").substring(0, 30).trim();
  }
  
  // 4. Buscar o crear la hoja destino correspondiente
  let hojaDestino = ss.getSheetByName(nombrePestana);
  if (!hojaDestino) {
    // Crear hoja
    hojaDestino = ss.insertSheet(nombrePestana);
    
    // Escribir los mismos encabezados de columna
    hojaDestino.appendRow(encabezados);
    
    // Aplicar estilos premium al encabezado (Negrita, fondo gris claro y congelar fila)
    hojaDestino.getRange(1, 1, 1, encabezados.length)
      .setFontWeight("bold")
      .setBackground("#e2e8f0")
      .setHorizontalAlignment("left");
    hojaDestino.setFrozenRows(1);
  }
  
  // 5. Copiar los datos de la respuesta a la hoja destino
  hojaDestino.appendRow(filaValores);
  
  // Auto-ajustar el ancho de las columnas para que los datos sean legibles
  try {
    hojaDestino.autoResizeColumns(1, encabezados.length);
  } catch (err) {
    Logger.log("Aviso: No se pudo auto-ajustar el ancho de las columnas: " + err.message);
  }
  
  Logger.log("Respuesta de '" + valorActor + "' copiada a la pestaña '" + nombrePestana + "' con éxito.");
}

/**
 * Función que crea el trigger instalable para que el script se ejecute automáticamente
 * cada vez que entre una respuesta desde el formulario.
 */
function crearTriggerDeEnvio() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  
  // Eliminar cualquier trigger existente del proyecto para evitar duplicados
  const triggers = ScriptApp.getProjectTriggers();
  for (let i = 0; i < triggers.length; i++) {
    ScriptApp.deleteTrigger(triggers[i]);
  }
  
  // Crear el nuevo trigger para la acción onFormSubmit
  ScriptApp.newTrigger("alEnviarFormulario")
    .forSpreadsheet(ss)
    .onFormSubmit()
    .create();
  
  Logger.log("Trigger instalable 'alEnviarFormulario' activado con éxito.");
}
