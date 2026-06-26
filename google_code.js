/**
 * Google Apps Script - Servidor (Code.gs)
 * Proyecto de Reestructuración de Aulas STEAM Caldas-Manizales
 * 
 * Este script sirve el formulario HTML y guarda las respuestas recibidas en una 
 * hoja de cálculo de Google Sheets en tiempo real.
 */

function doGet() {
  // Carga el archivo Index.html creado en el editor de Apps Script
  return HtmlService.createHtmlOutputFromFile('Index')
      .setTitle('Formulario Diagnóstico y Reestructuración Aulas STEAM')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
      .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

/**
 * Recibe las respuestas en formato JSON desde el frontend de la Web App
 * y las añade como una nueva fila en la hoja de cálculo de Google.
 * 
 * @param {string} answersJson Respuestas en string JSON
 * @return {object} Estado de éxito o error
 */
function saveAnswers(answersJson) {
  try {
    const answers = JSON.parse(answersJson);
    
    // Abre la hoja de cálculo vinculada al script
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getActiveSheet();
    
    // Asegurarse de tener una hoja limpia y con encabezados si es nueva
    if (sheet.getLastRow() === 0) {
      const headers = [
        "Fecha y Hora", 
        "Nombre del Encuestado", 
        "Entidad/Institución", 
        "Rol o Cargo en el Proyecto", 
        "Municipio/Sede de Referencia", 
        "Año de Vinculación", 
        "¿Ha visitado Aula STEAM?",
        "Consolidado Completo de Respuestas (JSON)"
      ];
      sheet.appendRow(headers);
      
      // Aplicar formato básico a encabezados
      sheet.getRange(1, 1, 1, headers.length)
           .setFontWeight("bold")
           .setBackground("#4f46e5")
           .setFontColor("#white")
           .setHorizontalAlignment("center");
    }
    
    // Preparar los datos a ingresar
    const rowData = [
      new Date(),                               // Fecha y Hora
      answers["0_1"] || "Anónimo",              // Nombre completo
      answers["0_2"] || "N/A",                  // Entidad
      answers["0_3_title"] || "No especificado",// Rol en el proyecto
      answers["0_4"] || "N/A",                  // Municipio
      answers["0_5"] || "N/A",                  // Año
      answers["0_6"] || "N/A",                  // Visita aula
      answersJson                               // JSON con todo el detalle (Módulos A-K y Visión de Futuro)
    ];
    
    // Añadir fila de datos
    sheet.appendRow(rowData);
    
    // Auto-ajustar ancho de columnas para legibilidad
    sheet.autoResizeColumns(1, rowData.length);
    
    return { success: true };
  } catch (e) {
    Logger.log("Error al guardar respuestas: " + e.toString());
    return { success: false, error: e.toString() };
  }
}
