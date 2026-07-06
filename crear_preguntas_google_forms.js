/**
 * Google Apps Script - Creador y Extractor de Aulas STEAM (Versión Optimizada)
 * 
 * INSTRUCCIONES:
 * 1. Abra su formulario de Google Forms en modo edición (o cree uno nuevo en forms.google.com).
 * 2. Haga clic en los tres puntos (arriba a la derecha) y seleccione "Editor de secuencias de comandos" (Apps Script).
 * 3. Borre todo el código que aparezca en el editor (generalmente Código.gs) y pegue este script optimizado.
 * 4. Guarde (icono de disco) y haga clic en "Ejecutar" asegurándose de que la función seleccionada es 'crearYExtraerFormulario'.
 * 5. Si Google le pide permisos de acceso, concédalos (haga clic en Configuración avanzada > Ir a Aulas STEAM (no seguro) y confirme).
 * 6. Revise la consola de "Registro de ejecución" abajo. Verá el objeto JSON 'googleFormMapping' y la URL del formulario.
 * 7. Copie ese bloque JSON y la URL para pegarlos en su archivo HTML.
 */

function crearYExtraerFormulario() {
  // Crear un nuevo formulario limpio para evitar timeouts de borrado
  const form = FormApp.create("Formulario de Diagnóstico y Reestructuración - Aulas STEAM");
  form.setDescription("Recolección de información para la reestructuración del Proyecto de Implementación de Aulas STEAM (Caldas y Manizales).");
  
  // Array estructurado con todas las preguntas del formulario HTML
  const preguntas = [
    { id: "0_1", title: "Nombre completo", type: "text" },
    { id: "0_2", title: "Institución o entidad a la que pertenece", type: "text" },
    { id: "0_3_title", title: "Rol descriptivo (Actor)", type: "text" },
    { id: "0_4", title: "Municipio o sede de referencia", type: "text" },
    { id: "0_5", title: "Teléfono de contacto", type: "text" },
    { id: "0_6", title: "Correo electrónico de contacto", type: "text" },
    { id: "0_7", title: "¿Desde qué año está vinculado/a al Proyecto Aulas STEAM?", type: "text" },
    { id: "0_8", title: "¿Ha visitado o trabajado directamente en al menos un Aula STEAM?", type: "text" },
    
    // Módulo A: Infraestructura Física
    { id: "A_1", title: "¿Cómo califica las condiciones físicas actuales de las Aulas STEAM?", type: "text" },
    { id: "A_2", title: "¿Qué problemas de infraestructura ha identificado con mayor frecuencia?", type: "paragraph" },
    { id: "A_3", title: "¿Las instalaciones eléctricas y de red son suficientes?", type: "text" },
    { id: "A_3_text", title: "Especifique qué fallas eléctricas o limitaciones de red ha experimentado", type: "paragraph" },
    { id: "A_4", title: "¿Se han presentado situaciones de seguridad asociadas a la infraestructura?", type: "paragraph" },
    { id: "A_5", title: "¿Qué mejoras de infraestructura considera prioritarias?", type: "paragraph" },
    
    // Módulo B: Equipos TIC
    { id: "B_1", title: "¿Los equipos TIC disponibles son suficientes para la demanda?", type: "text" },
    { id: "B_2", title: "¿Con qué frecuencia se presentan fallas técnicas en los equipos?", type: "text" },
    { id: "B_3", title: "¿Existe un protocolo de mantenimiento preventivo?", type: "text" },
    { id: "B_4", title: "¿Qué equipos, kits tecnológicos o software considera que hacen falta?", type: "paragraph" },
    { id: "B_5", title: "¿Los equipos actuales son compatibles con el software?", type: "text" },
    { id: "B_6", title: "¿Se han presentado pérdidas, robos o daños irreparables?", type: "paragraph" },
    
    // Módulo C: Mobiliario
    { id: "C_1", title: "¿El mobiliario actual favorece el trabajo colaborativo?", type: "text" },
    { id: "C_2", title: "¿Se ha deteriorado, dañado o perdido mobiliario?", type: "text" },
    { id: "C_2_text", title: "Especifique qué mobiliario se ha deteriorado o perdido y causas", type: "paragraph" },
    { id: "C_3", title: "¿Qué elementos de mobiliario o dotación de almacenamiento considera que deben reemplazarse?", type: "paragraph" },
    { id: "C_4", title: "¿El almacenamiento de los kits de robótica y herramientas es adecuado?", type: "text" },
    
    // Módulo D: Gestión Financiera
    { id: "D_1", title: "¿El modelo de financiación actual permite una ejecución oportuna?", type: "text" },
    { id: "D_2", title: "¿Qué cuellos de botella financieros o de contratación pública ha identificado?", type: "paragraph" },
    { id: "D_3", title: "¿Considera que el presupuesto asignado es suficiente?", type: "text" },
    { id: "D_3_text", title: "Escriba su justificación o qué rubros adicionales se deben contemplar", type: "paragraph" },
    { id: "D_4", title: "¿Existen restricciones normativas de la Universidad Nacional que limiten la adquisición?", type: "paragraph" },
    { id: "D_5", title: "¿Qué criterios deberían priorizarse en los futuros procesos de selección de proveedores?", type: "text" },
    { id: "D_6", title: "¿Ha detectado inconsistencias o demoras severas con proveedores?", type: "text" },
    { id: "D_6_text", title: "Describa detalladamente la inconsistencia detectada", type: "paragraph" },
    
    // Módulo E: Aspectos Operacionales
    { id: "E_1", title: "¿Existe un manual operativo, protocolo de uso o reglamento?", type: "text" },
    { id: "E_2", title: "¿Cuántas horas semanales promedio está activo el Aula STEAM?", type: "text" },
    { id: "E_3", title: "¿Cuántos docentes se encuentran capacitados para operar el Aula?", type: "text" },
    { id: "E_4", title: "¿Qué brechas de capacitación técnica y soporte de hardware identifica?", type: "paragraph" },
    { id: "E_5", title: "¿El modelo de coordinación actual es sostenible?", type: "paragraph" },
    { id: "E_6", title: "¿Cómo se realiza el seguimiento, inventario y reporte de uso diario?", type: "paragraph" },
    { id: "E_7", title: "¿Qué mejoras operativas implementaría para aumentar la tasa de uso?", type: "paragraph" },
    { id: "E_8", title: "¿De qué manera implementaría el sostenimiento del aula para consumibles?", type: "paragraph" },
    
    // Módulo F: Pedagogía
    { id: "F_1", title: "¿Las actividades prácticas del Aula STEAM están alineadas con la malla curricular?", type: "text" },
    { id: "F_2", title: "¿Existe una planificación anual o trimestral de proyectos STEAM?", type: "text" },
    { id: "F_3", title: "¿Qué áreas del conocimiento se integran con facilidad y cuáles presentan barreras?", type: "paragraph" },
    { id: "F_4", title: "¿Se realiza un seguimiento estructurado al impacto en el aprendizaje?", type: "paragraph" },
    { id: "F_5", title: "¿Cómo percibe la motivación y rendimiento académico de los estudiantes?", type: "paragraph" },
    { id: "F_6", title: "¿Qué tipo de contenidos formativos o metodologías enriquecerían la experiencia?", type: "paragraph" },
    
    // Módulo G: Territorialidad
    { id: "G_1", title: "¿El Aula STEAM ha generado beneficios visibles para la comunidad?", type: "paragraph" },
    { id: "G_2", title: "¿El municipio ha podido aportar recursos propios?", type: "text" },
    { id: "G_2_text", title: "Especifique el monto o el tipo de aporte realizado por la alcaldía", type: "paragraph" },
    { id: "G_4", title: "¿Existe alguna política pública o acuerdo municipal que articule el Aula STEAM?", type: "text" },
    { id: "G_5", title: "¿Qué riesgos de sostenibilidad presupuestaria y operativa identifica?", type: "paragraph" },
    
    // Módulo H: Alianzas
    { id: "H_1", title: "¿Cómo se ha articulado su organización con el equipo de la UNAL?", type: "paragraph" },
    { id: "H_2", title: "¿Qué aportes metodológicos o didácticos concretos ha hecho su alianza?", type: "paragraph" },
    { id: "H_3", title: "¿Qué oportunidades de mejora o cuellos de botella identifica en la gobernanza?", type: "paragraph" },
    { id: "H_4", title: "¿Qué aprendizajes del Plan Ceibal de Uruguay son directamente aplicables a Caldas?", type: "paragraph" },
    { id: "H_5", title: "¿Estaría dispuesta su organización a ampliar su participación?", type: "paragraph" },
    
    // Módulo I: Proveedores
    { id: "I_1", title: "¿Los procesos contractuales y pliegos de la UNAL han sido claros y ágiles?", type: "text" },
    { id: "I_2", title: "¿Ha recibido fichas técnicas y requerimientos detallados?", type: "text" },
    { id: "I_2_text", title: "Indique cuáles fueron las mayores deficiencias en las fichas técnicas", type: "paragraph" },
    { id: "I_3", title: "¿Qué mejoras o especificaciones estándar sugeriría incluir en los pliegos?", type: "paragraph" },
    { id: "I_4", title: "¿Qué plan de acción u oferta técnica tiene para implementar un SLA?", type: "paragraph" },
    { id: "I_5", title: "¿Qué nuevas tecnologías recomendaría incluir para la reestructuración?", type: "paragraph" },
    
    // Módulo J: Apropiación
    { id: "J_1", title: "¿El Aula STEAM está incluida formalmente en el PEI o planes?", type: "text" },
    { id: "J_2", title: "¿Existe un rubro presupuestal propio asignado para el sostenimiento?", type: "text" },
    { id: "J_3", title: "¿Qué dependencia o persona asume la responsabilidad administrativa?", type: "text" },
    { id: "J_4", title: "¿Qué ocurriría si el soporte de la Universidad Nacional finalizara hoy?", type: "text" },
    { id: "J_4_text", title: "Escriba qué acciones inmediatas requeriría para evitar el cierre", type: "paragraph" },
    { id: "J_5", title: "¿La institución o el municipio tiene capacidad técnica propia?", type: "text" },
    { id: "J_6", title: "¿Cuáles son las mayores amenazas que ponen en riesgo la continuidad?", type: "text" },
    
    // Módulo K: Futuros Beneficiarios
    { id: "K_1_1", title: "¿Qué beneficios concretos espera que genere la llegada del Aula STEAM?", type: "paragraph" },
    { id: "K_1_2", title: "¿Qué temores, dudas o barreras iniciales identifica?", type: "paragraph" },
    { id: "K_1_3", title: "¿Ha tenido la oportunidad de visitar un Aula STEAM activa?", type: "text" },
    { id: "K_1_3_text", title: "Describa brevemente su percepción y aprendizajes de la visita", type: "paragraph" },
    { id: "K_2_1", title: "¿El espacio físico preseleccionado cuenta con condiciones óptimas?", type: "text" },
    { id: "K_2_2", title: "¿Cuántos docentes estarían disponibles para capacitarse?", type: "text" },
    { id: "K_2_3", title: "¿Existe alguna experiencia o proyecto previo similar?", type: "paragraph" },
    { id: "K_3_1", title: "¿Qué adecuaciones físicas prioriza realizar en el espacio?", type: "paragraph" },
    { id: "K_3_2", title: "¿Qué equipos o kits tecnológicos considera indispensables?", type: "text" },
    { id: "K_3_3", title: "¿Qué condiciones de custodia y seguridad física puede garantizar?", type: "paragraph" },
    { id: "K_4_1", title: "¿Qué tipo de capacitación docente consideran urgente?", type: "text" },
    { id: "K_4_2", title: "¿Con qué frecuencia esperaría recibir acompañamiento?", type: "text" },
    { id: "K_5_1", title: "¿La alcaldía o rectoría firmará compromisos de cofinanciación?", type: "text" },
    { id: "K_5_2", title: "¿Cómo articularía el Aula STEAM con el Plan de Desarrollo o PEI?", type: "paragraph" },
    { id: "K_5_3", title: "¿Estaría dispuesto/a a firmar un acta formal de corresponsabilidad?", type: "text" },
    { id: "K_6_1", title: "¿Existe algún problema territorial local que el Aula pueda abordar?", type: "paragraph" },
    { id: "K_6_2", title: "¿Qué aliados locales podrían vincularse a la dinámica del aula?", type: "paragraph" },
    { id: "K_6_3", title: "¿Qué indicadores clave consideraría apropiados para medir el éxito?", type: "paragraph" },
    
    // Sección 3: Visión de Futuro
    { id: "V_1", title: "Nivel de satisfacción general con el desarrollo del proyecto (1-10)", type: "text" },
    { id: "V_2_1", title: "Logro más importante del proyecto (Logro #1)", type: "text" },
    { id: "V_2_2", title: "Mencione el logro #2 del proyecto", type: "text" },
    { id: "V_2_3", title: "Mencione el logro #3 del proyecto", type: "text" },
    { id: "V_3_1", title: "Cambio más urgente que haría para la reestructuración (Cambio #1)", type: "text" },
    { id: "V_3_2", title: "Mencione el cambio #2 para la reestructuración", type: "text" },
    { id: "V_3_3", title: "Mencione el cambio #3 para la reestructuración", type: "text" },
    { id: "V_4", title: "Aspecto clave del proyecto no contemplado", type: "paragraph" },
    { id: "V_6", title: "Tres inversiones prioritarias para la siguiente fase del proyecto", type: "text" },
    { id: "V_5", title: "¿Estaría disponible para participar en una entrevista complementaria?", type: "text" },
    { id: "V_5_text", title: "Número telefónico de contacto o correo electrónico directo", type: "text" }
  ];

  // Objeto para guardar la referencia de los ítems creados
  const itemsCreados = {};
  
  // Agregar cada pregunta en secuencia rápida
  preguntas.forEach(p => {
    if (p.type === "paragraph") {
      itemsCreados[p.id] = form.addParagraphTextItem().setTitle(p.title);
    } else {
      itemsCreados[p.id] = form.addTextItem().setTitle(p.title);
    }
  });

  // Generar la respuesta simulada usando el propio ID de la pregunta como valor
  const response = form.createResponse();
  
  for (const qId in itemsCreados) {
    const item = itemsCreados[qId];
    // Enviamos el mismo ID de la pregunta como respuesta simulada
    const resp = item.createResponse(qId);
    response.withItemResponse(resp);
  }
  
  // Generar URL pre-llenada y parsear
  const prefilledUrl = response.toPrefilledUrl();
  const mapping = {};
  const queryParams = prefilledUrl.split("?")[1].split("&");
  
  queryParams.forEach(param => {
    const parts = param.split("=");
    const entryName = parts[0]; // entry.XXXXXX
    const value = decodeURIComponent(parts[1]); // ID de la pregunta (ej. "A_1", "0_1")
    
    // Dado que asignamos el qId como respuesta simulada, el valor coincide exactamente con el qId
    if (itemsCreados[value]) {
      mapping[value] = entryName;
    }
  });

  // Mostrar resultados en los registros
  Logger.log("\n\n=======================================================\n" +
             "GOOGLE FORM MAPPING GENERADO CON ÉXITO\n" +
             "Copie el siguiente bloque JSON y péguelo en su archivo HTML:\n" +
             "=======================================================\n\n" +
             JSON.stringify(mapping, null, 2) + 
             "\n\n=======================================================\n");
             
  Logger.log("URL de envío del formulario (googleFormUrl):\n" + form.getPublishedUrl().replace("viewform", "formResponse") + "\n\n");
}
