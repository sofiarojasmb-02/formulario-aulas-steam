// Bank of questions per module as described in the survey document
const questionDatabase = {
    "sec0": [
        {
            "id": "0_1",
            "label": "Nombre completo",
            "type": "text",
            "required": true
        },
        {
            "id": "0_2",
            "label": "Institución o entidad a la que pertenece",
            "type": "text",
            "required": true
        },
        {
            "id": "0_4",
            "label": "Municipio o sede de referencia",
            "type": "select",
            "required": true,
            "options": [
                "Manizales",
                "Aguadas",
                "Anserma",
                "Aranzazu",
                "Belalcázar",
                "Chinchiná",
                "Filadelfia",
                "La Dorada",
                "La Merced",
                "Manzanares",
                "Marmato",
                "Marquetalia",
                "Marulanda",
                "Neira",
                "Norcasia",
                "Pácora",
                "Palestina",
                "Pensilvania",
                "Riosucio",
                "Risaralda",
                "Salamina",
                "Samaná",
                "San José",
                "Supía",
                "Victoria",
                "Villamaría",
                "Viterbo",
                "UNAL Sede Manizales"
            ]
        },
        {
            "id": "0_5",
            "label": "Teléfono de contacto",
            "type": "text",
            "required": true
        },
        {
            "id": "0_6",
            "label": "Correo electrónico de contacto",
            "type": "text",
            "required": true
        },
        {
            "id": "0_7",
            "label": "¿Desde qué año está vinculado/a al Proyecto Aulas STEAM?",
            "type": "number",
            "required": true,
            "min": 2015,
            "max": 2026
        },
        {
            "id": "0_8",
            "label": "¿Ha visitado o trabajado directamente en al menos un Aula STEAM?",
            "type": "binary",
            "required": true
        }
    ],
    "sec2_gob_alc": [
        {
            "id": "D_1",
            "label": "¿Considera que el modelo actual de financiación mediante recursos de Estampilla responde adecuadamente a las necesidades reales de implementación, operación y sostenibilidad del Proyecto Aulas STEAM?",
            "type": "scale",
            "required": true
        },
        {
            "id": "D_1_comment",
            "label": "Comentarios opcionales sobre la financiación por Estampilla",
            "type": "text",
            "required": false
        },
        {
            "id": "D_2",
            "label": "¿El esquema actual de financiación permite proyectar la continuidad y crecimiento del Proyecto Aulas STEAM en el mediano y largo plazo?",
            "type": "scale",
            "required": true
        },
        {
            "id": "D_3",
            "label": "¿Desde su perspectiva, la inversión realizada mediante recursos de Estampilla genera un impacto suficientemente visible y justificable para su continuidad y fortalecimiento?",
            "type": "scale",
            "required": true
        },
        {
            "id": "D_4",
            "label": "¿Considera que el esquema actual de financiación y gestión del Proyecto Aulas STEAM aprovecha eficientemente los recursos disponibles?",
            "type": "scale",
            "required": true
        },
        {
            "id": "D_4_comment",
            "label": "Comentarios sobre el aprovechamiento de recursos",
            "type": "text",
            "required": false
        },
        {
            "id": "D_5",
            "label": "¿Qué tan necesario considera realizar ajustes al modelo actual de operación del Proyecto Aulas STEAM para fortalecer su impacto territorial?",
            "type": "scale",
            "required": true
        },
        {
            "id": "D_5_1",
            "label": "En caso de responder por debajo de 4, ¿Qué cambios recomendaría priorizar?",
            "type": "text",
            "required": false,
            "dependsOn": {
                "id": "D_5",
                "values": [
                    "1",
                    "2",
                    "3"
                ]
            }
        },
        {
            "id": "D_6",
            "label": "¿Qué beneficios visibles ha generado el Aula STEAM para la comunidad educativa y local?",
            "type": "multiselect",
            "required": true,
            "maxSelections": 3,
            "options": [
                "Beneficios en los estudiantes: Incremento en la motivación y asistencia",
                "Beneficios en los estudiantes: Desarrollo de habilidades técnicas",
                "Beneficios en los estudiantes: Desarrollo de habilidades blandas",
                "Beneficios en los estudiantes: Mejora en el rendimiento académico",
                "Beneficios en los docentes y la institución: Innovación pedagógica",
                "Beneficios en los docentes y la institución: Integración curricular",
                "Beneficios en los docentes y la institución: Prestigio institucional",
                "Beneficios en las familias y el entorno local: Inclusión de las familias",
                "Beneficios en las familias y el entorno local: Proyectos con impacto comunitario",
                "Beneficios en las familias y el entorno local: Acceso democrático a la tecnología",
                "Sin beneficios visibles aún",
                "Otro"
            ]
        },
        {
            "id": "D_7",
            "label": "¿Qué riesgos de sostenibilidad identifica para el Proyecto Aulas STEAM una vez finalice la financiación por Estampilla?",
            "type": "multiselect",
            "required": true,
            "options": [
                "Falta de recursos financieros",
                "Cambios administrativos o políticos",
                "Baja apropiación institucional",
                "Falta de mantenimiento y soporte técnico",
                "Desactualización tecnológica",
                "Sobrecarga del personal docente",
                "Poca articulación entre actores",
                "Otro"
            ]
        }
    ],
    "sec1_rect_prof_coord": [
        {
            "id": "A_1",
            "label": "¿Cómo califica las condiciones físicas actuales del Aula STEAM (espacio, ventilación, iluminación, accesibilidad) ?",
            "type": "scale",
            "required": true
        },
        {
            "id": "A_2",
            "label": "¿Qué problemas de infraestructura ha identificado con mayor frecuencia?",
            "type": "multiselect",
            "required": true,
            "options": [
                "Problemas eléctricos",
                "Conectividad deficiente",
                "Falta de ventilación",
                "Espacios reducidos",
                "Iluminación insuficiente",
                "Deterioro del mobiliario",
                "Otro"
            ]
        },
        {
            "id": "A_3",
            "label": "¿Las instalaciones eléctricas y de red son suficientes para el uso simultáneo de todos los equipos?",
            "type": "select",
            "required": true,
            "options": [
                "Sí",
                "No",
                "Parcialmente"
            ]
        },
        {
            "id": "B_1",
            "label": "¿En qué medida considera que los equipos TIC disponibles (computadores, impresoras 3D, kits de robótica, etc.) son suficientes para cubrir la demanda actual?",
            "type": "scale",
            "required": true
        },
        {
            "id": "B_1_1",
            "label": "Si su respuesta anterior fue de 1 a 4, o si considera que hay alguna carencia, ¿qué tipo de equipo o tecnología hace falta?",
            "type": "multiselect",
            "required": false,
            "dependsOn": {
                "id": "B_1",
                "values": [
                    "1",
                    "2",
                    "3",
                    "4"
                ]
            },
            "options": [
                "Computadores de escritorio o portátiles (para uso general)",
                "Computadores de alto rendimiento (para diseño, programación avanzada o edición)",
                "Kits de robótica (o componentes y repuestos adicionales)",
                "Impresoras 3D (o insumos como filamentos y repuestos)",
                "Dispositivos móviles (tabletas o smartphones para pruebas/aplicaciones)",
                "Equipos audiovisuales (proyectores, pantallas interactivas o sistemas de sonido)",
                "Periféricos y accesorios (mouses, teclados, auriculares, cámaras web)",
                "Infraestructura y conectividad (routers, puntos de acceso Wi-Fi, cableado)",
                "Licencias de software especializado (programas de diseño, simulación, entornos de desarrollo, etc.)",
                "Otro"
            ]
        },
        {
            "id": "B_2",
            "label": "¿Con qué frecuencia se presentan fallas técnicas en los equipos?",
            "type": "select",
            "required": true,
            "options": [
                "Diaria",
                "Semanal",
                "Mensual",
                "Rara vez",
                "Nunca"
            ]
        },
        {
            "id": "B_2_1",
            "label": "¿Cuál es el equipo que presenta fallas con mayor frecuencia?",
            "type": "multiselect",
            "required": false,
            "dependsOn": {
                "id": "B_2",
                "values": [
                    "Diaria",
                    "Semanal"
                ]
            },
            "options": [
                "Computadores de escritorio / Portátiles",
                "Impresoras 3D",
                "Kits de robótica",
                "Equipos de conectividad (Wi-Fi / Red)",
                "Proyectores / Dispositivos audiovisuales",
                "Ninguno",
                "Otro"
            ]
        },
        {
            "id": "C_1",
            "label": "¿El mobiliario permite organizar fácilmente el espacio según diferentes actividades (trabajo en equipo, prototipado, presentaciones, etc.)?",
            "type": "conditional-text",
            "condTrigger": "No",
            "condLabel": "Justifique las razones por las cuales no es adecuado o es parcialmente adecuado:",
            "required": true
        },
        {
            "id": "C_2",
            "label": "¿El mobiliario es cómodo y adecuado para estudiantes de diferentes edades y contextos?",
            "type": "conditional-text",
            "condTrigger": "No",
            "condLabel": "Justifique las razones por las cuales no es adecuado o es parcialmente adecuado:",
            "required": true
        },
        {
            "id": "C_3",
            "label": "¿Existen protocolos claros para el préstamo, organización y mantenimiento de materiales y equipos?",
            "type": "select",
            "required": true,
            "options": [
                "Sí",
                "No",
                "Parcialmente"
            ]
        }
    ],
    "sec3_rect_prof_coord": [
        {
            "id": "E_1",
            "label": "¿Existe un manual operativo o protocolo de uso del Aula STEAM y se utiliza efectivamente?",
            "type": "select",
            "required": true,
            "options": [
                "Sí",
                "No",
                "En construcción",
                "No sé"
            ]
        },
        {
            "id": "F_1",
            "label": "¿Las actividades desarrolladas están alineadas con el currículo de la Institución Educativa?",
            "type": "scale",
            "required": true
        },
        {
            "id": "F_2",
            "label": "¿Existe una planificación de proyectos STEAM consolidada en el PEI o plan estratégico?",
            "type": "select",
            "required": true,
            "options": [
                "Sí",
                "No",
                "En proceso",
                "No sé"
            ]
        },
        {
            "id": "F_3",
            "label": "Desde su experiencia, ¿Qué áreas del conocimiento se integran con mayor facilidad en las experiencias desarrolladas en el Aula STEAM?",
            "type": "multiselect",
            "required": true,
            "maxSelections": 3,
            "options": [
                "Ciencias Naturales / Física / Biología",
                "Tecnología e Informática",
                "Matemáticas",
                "Ingeniería / Robótica",
                "Arte y Diseño",
                "Programación y pensamiento computacional",
                "Ciencias Sociales / Educación ambiental",
                "Emprendimiento",
                "Otro"
            ]
        },
        {
            "id": "F_3_1",
            "label": "¿Qué áreas presentan mayores dificultades para integrarse de manera efectiva?",
            "type": "multiselect",
            "required": true,
            "maxSelections": 3,
            "options": [
                "Matemáticas",
                "Ciencias Sociales",
                "Lenguaje",
                "Arte y Diseño",
                "Ciencias Naturales",
                "Programación",
                "Ingeniería / Robótica / Electrónica",
                "Física / Química",
                "Otro"
            ]
        },
        {
            "id": "F_3_2",
            "label": "¿Cuáles considera que son las principales razones de estas dificultades?",
            "type": "multiselect",
            "required": true,
            "options": [
                "Falta de formación docente",
                "Limitaciones de tiempo curricular",
                "Poca articulación entre áreas",
                "Escasez de recursos o materiales",
                "Baja apropiación metodológica",
                "Dificultad para diseñar proyectos interdisciplinarios",
                "Desconocimiento de herramientas tecnológicas",
                "Falta de acompañamiento técnico",
                "Otro"
            ]
        },
        {
            "id": "J_5",
            "label": "¿Qué tan preparada considera que está la institución o el municipio para gestionar, operar y dar continuidad al Aula STEAM sin acompañamiento externo permanente?",
            "type": "scale",
            "required": true
        },
        {
            "id": "J_5_1",
            "label": "¿Cuáles considera que son las principales necesidades actuales para lograr una operación autónoma del Aula STEAM?",
            "type": "multiselect",
            "required": true,
            "options": [
                "Formación técnica del personal",
                "Formación pedagógica docente",
                "Recursos financieros",
                "Acompañamiento técnico permanente",
                "Personal especializado",
                "Mantenimiento de equipos y tecnología",
                "Conectividad e infraestructura",
                "Procesos administrativos definidos",
                "Planeación institucional",
                "Articulación con aliados estratégicos",
                "Tiempo asignado para operación del Aula",
                "Otro"
            ]
        }
    ],
    "sec2_direct_unal": [
        {
            "id": "L_1",
            "label": "¿Los recursos provenientes de la Estampilla permiten realizar de manera oportuna las actividades, compras y procesos requeridos para el Proyecto Aulas STEAM?",
            "type": "scale",
            "required": true
        },
        {
            "id": "L_2",
            "label": "¿Qué limitaciones o fortalezas identifica en el modelo actual de financiación?",
            "type": "text",
            "required": true
        },
        {
            "id": "L_3",
            "label": "¿Los tiempos de asignación y desembolso de recursos permiten ejecutar las actividades sin retrasos?",
            "type": "select",
            "required": true,
            "options": [
                "Sí",
                "No",
                "Parcialmente"
            ]
        },
        {
            "id": "L_4",
            "label": "¿Qué cuellos de botella financieros o contractuales ha identificado en fases anteriores?",
            "type": "multiselect",
            "required": true,
            "options": [
                "Retrasos en desembolsos",
                "Procesos administrativos lentos",
                "Presupuesto insuficiente",
                "Problemas con proveedores",
                "Demoras contractuales",
                "Fluctuación de costos",
                "Incumplimiento de plazos, demoras en las entregas o problemas de calidad por parte de los proveedores",
                "No se han identificado cuellos de botella financieros ni contractuales.",
                "Otro"
            ]
        },
        {
            "id": "L_5",
            "label": "¿Qué factores han limitado el desarrollo eficiente y sostenible del Proyecto Aulas STEAM?",
            "type": "multiselect",
            "required": true,
            "options": [
                "Restricciones en el uso de recursos de Estampilla",
                "Rotación de personal o cambios institucionales",
                "Falta de planeación financiera a largo plazo",
                "Cambios en prioridades institucionales o políticas",
                "Dificultades en la coordinación interinstitucional",
                "Procesos administrativos complejos",
                "Falta de recursos para mantenimiento y actualización",
                "Dificultades para garantizar continuidad operativa",
                "Limitaciones en seguimiento y evaluación del impacto",
                "Otro"
            ]
        },
        {
            "id": "L_6",
            "label": "¿Qué acciones considera necesarias para mejorar el soporte técnico y garantizar que los proveedores cumplan oportunamente con los tiempos y niveles de servicio acordados?",
            "type": "multiselect",
            "required": true,
            "options": [
                "Definir tiempos máximos de respuesta",
                "Seguimiento periódico a proveedores",
                "Mejorar canales de reporte de fallas",
                "Contar con soporte técnico local",
                "Capacitación básica al personal",
                "Mantenimientos preventivos",
                "Otro"
            ]
        }
    ],
    "sec2_direct_unal_prototipado": [
        {
            "id": "L_7",
            "label": "¿Cómo evalúa actualmente la capacidad operativa del Centro de Prototipado para atender procesos académicos, formativos y de innovación?",
            "type": "scale",
            "required": true
        },
        {
            "id": "L_7_comment",
            "label": "Comentarios sobre capacidad operativa",
            "type": "text",
            "required": false
        },
        {
            "id": "L_8",
            "label": "¿Qué tan pertinentes considera los equipos y tecnologías actualmente disponibles en el Centro de Prototipado frente a las necesidades actuales de formación, investigación e innovación?",
            "type": "scale",
            "required": true
        },
        {
            "id": "L_8_comment",
            "label": "Comentarios opcionales sobre la pertinencia de equipos",
            "type": "text",
            "required": false
        },
        {
            "id": "L_9",
            "label": "¿Qué características o dificultades identifica en el modelo actual de contratación del Centro de Prototipado?",
            "type": "multiselect",
            "required": true,
            "options": [
                "Inestabilidad del personal: Contratos cortos o temporales que generan alta rotación del equipo técnico.",
                "Burocracia en la selección: Procesos administrativos lentos o complejos para vincular personal especializado.",
                "Barreras comerciales: Dificultades normativas para vender servicios o facturar a empresas externas.",
                "Perfiles indefinidos: Falta de roles institucionales fijos y claros para la operación del centro.",
                "Ninguna: El modelo actual de vinculación y contratación funciona de manera ágil y adecuada."
            ]
        },
        {
            "id": "L_10",
            "label": "¿Qué estrategias institucionales considera prioritarias para garantizar el funcionamiento y la sostenibilidad futura del Centro de Prototipado?",
            "type": "multiselect",
            "required": true,
            "options": [
                "Vincular de forma permanente (planta) al personal técnico y de coordinación del centro.",
                "Implementar un modelo de negocio para comercializar servicios tecnológicos al sector externo.",
                "Articular el centro con la academia, vinculándolo formalmente a proyectos de grado, semilleros y prácticas.",
                "Establecer alianzas con empresas tecnológicas para cofinanciar la operación y actualizar equipos.",
                "Crear una unidad de compras ágil para agilizar la adquisición de insumos y repuestos sin burocracia.",
                "Definir un presupuesto compartido entre las Facultades beneficiarias y la Vicerrectoría de Investigación.",
                "Otro"
            ]
        },
        {
            "id": "L_11",
            "label": "¿Qué capacidades considera prioritario fortalecer en el equipo del Centro de Prototipado?",
            "type": "multiselect",
            "required": true,
            "options": [
                "Diseño y fabricación digital",
                "Metodologías STEAM/STEM",
                "Investigación aplicada",
                "Gestión de proyectos",
                "Programación",
                "Electrónica",
                "Desarrollo de contenidos formativos",
                "Atención y acompañamiento a usuarios",
                "Innovación y emprendimiento",
                "Seguridad en laboratorio",
                "Otro"
            ]
        }
    ],
    "sec2_stem_unal": [
        {
            "id": "M_1",
            "label": "¿Qué situaciones han afectado la sostenibilidad y continuidad del Proyecto Aulas STEAM en el territorio?",
            "type": "multiselect",
            "required": true,
            "options": [
                "Dependencia de una única fuente de financiación",
                "Cambios de administración o liderazgo",
                "Falta de apropiación institucional",
                "Limitaciones presupuestales",
                "Retrasos administrativos o contractuales",
                "Baja articulación con aliados estratégicos",
                "Falta de indicadores claros de impacto",
                "Costos de operación y mantenimiento elevados",
                "Otro"
            ]
        },
        {
            "id": "M_2",
            "label": "¿La distribución y organización actual de los espacios dentro del Centro de Prototipado facilita el desarrollo de actividades de prototipado, experimentación y trabajo colaborativo?",
            "type": "scale",
            "required": true
        },
        {
            "id": "M_3",
            "label": "¿Qué tan pertinentes considera los equipos y tecnologías actualmente disponibles en el Centro de Prototipado?",
            "type": "scale",
            "required": true
        },
        {
            "id": "M_4",
            "label": "¿Qué tecnologías, capacidades o herramientas considera prioritario fortalecer o incorporar?",
            "type": "multiselect",
            "required": true,
            "options": [
                "Impresión 3D avanzada (resina, multimaterial, gran formato, impresión funcional)",
                "Robótica avanzada, colaborativa (cobots) y automatización",
                "Electrónica avanzada y sistemas embebidos",
                "Gemelos digitales y simulación avanzada",
                "Maquinaria CNC de mayor precisión",
                "Escaneo 3D y digitalización de objetos",
                "Motion capture y análisis de movimiento",
                "Diseño CAD/CAM/CAE especializado",
                "Biofabricación, biomateriales o bioingeniería",
                "Laboratorios de innovación y prototipado interdisciplinario",
                "Software especializado para simulación, ingeniería y diseño",
                "Tecnologías para educación inmersiva y aprendizaje interactivo",
                "Otro"
            ]
        },
        {
            "id": "M_5",
            "label": "¿Qué limitaciones técnicas afectan actualmente el aprovechamiento de los equipos y espacios del Centro?",
            "type": "multiselect",
            "required": true,
            "options": [
                "Equipos desactualizados",
                "Falta de mantenimiento",
                "Insuficiencia de materiales o consumibles",
                "Problemas de conectividad o software",
                "Espacios insuficientes",
                "Alta demanda de equipos",
                "Falta de personal técnico",
                "Falta de capacitación especializada",
                "Limitaciones eléctricas o de infraestructura",
                "Procesos operativos poco eficientes",
                "Otro"
            ]
        },
        {
            "id": "M_6",
            "label": "¿Qué capacidades considera prioritario fortalecer en el equipo del Centro?",
            "type": "multiselect",
            "required": true,
            "options": [
                "Diseño y fabricación digital",
                "Metodologías STEAM/STEM",
                "Investigación aplicada",
                "Gestión de proyectos",
                "Programación",
                "Electrónica",
                "Desarrollo de contenidos formativos",
                "Atención y acompañamiento a usuarios",
                "Innovación y emprendimiento",
                "Seguridad en laboratorio",
                "Otro"
            ]
        },
        {
            "id": "M_7",
            "label": "¿Qué tan articulado considera el Centro de Prototipado con las necesidades académicas, investigativas y de extensión de la Universidad?",
            "type": "scale",
            "required": true
        },
        {
            "id": "M_8",
            "label": "¿Con qué actores considera importante fortalecer alianzas o articulaciones?",
            "type": "multiselect",
            "required": true,
            "options": [
                "Facultades y programas académicos",
                "Grupos de investigación",
                "Sector empresarial",
                "Instituciones educativas",
                "Entidades públicas",
                "Ecosistemas de innovación",
                "Makerspaces y laboratorios externos",
                "Organizaciones sociales o comunitarias",
                "Otro"
            ]
        },
        {
            "id": "M_9",
            "label": "¿Qué aspectos considera prioritarios para garantizar el crecimiento y sostenibilidad del Centro en los próximos años?",
            "type": "multiselect",
            "required": true,
            "options": [
                "Renovación tecnológica",
                "Formación del equipo humano",
                "Nuevas fuentes de financiación",
                "Mayor articulación institucional",
                "Estrategias de visibilidad",
                "Vinculación con industria",
                "Fortalecimiento de servicios",
                "Expansión de infraestructura",
                "Generación de proyectos de investigación",
                "Otro"
            ]
        },
        {
            "id": "M_10",
            "label": "¿Cuál considera que debería ser la visión futura del Centro de Prototipado dentro de la Universidad y el territorio?",
            "type": "multiselect",
            "required": true,
            "options": [
                "Consolidarse como un centro líder en innovación y desarrollo tecnológico",
                "Fortalecer la formación práctica e interdisciplinaria",
                "Impulsar investigación aplicada y prototipado avanzado",
                "Generar soluciones para necesidades del territorio y sectores productivos",
                "Integrar tecnologías emergentes y manufactura digital avanzada",
                "Fortalecer alianzas con empresas, comunidades y entidades públicas",
                "Promover emprendimiento y transferencia tecnológica",
                "Garantizar sostenibilidad y crecimiento del Centro",
                "Otro"
            ]
        },
        {
            "id": "M_11",
            "label": "¿Las actividades del Centro de Prototipado están alineadas con las Aulas STEAM?",
            "type": "select",
            "required": true,
            "options": [
                "Sí",
                "No",
                "No sé"
            ]
        },
        {
            "id": "M_12",
            "label": "¿Las tecnologías y metodologías desarrolladas en el Centro de Prototipado responden a las necesidades actuales de las Aulas STEAM?",
            "type": "scale",
            "required": true
        },
        {
            "id": "M_13",
            "label": "¿Cómo realizan actualmente el seguimiento al impacto de los estudiantes que usan el Aula o solicitan servicios?",
            "type": "multiselect",
            "required": true,
            "options": [
                "Formularios digitales",
                "Encuestas de satisfacción",
                "Registro de proyectos",
                "Portafolio de prototipos",
                "Seguimiento a emprendimientos",
                "No existe seguimiento formal",
                "Otro"
            ]
        },
        {
            "id": "M_14",
            "label": "¿Considera que las experiencias desarrolladas desde el Centro de Prototipado pueden transferirse fácilmente a contextos educativos escolares?",
            "type": "scale",
            "required": true
        },
        {
            "id": "M_15",
            "label": "¿Considera que el Centro de Prototipado debería consolidarse como un nodo articulador de innovación educativa y tecnológica para el territorio?",
            "type": "select",
            "required": true,
            "options": [
                "Sí",
                "No",
                "Parcialmente"
            ]
        }
    ],
    "sec2_oso_unal": [
        {
            "id": "O_1",
            "label": "¿Qué tipos de intereses o tendencias identifica con mayor frecuencia en los estudiantes evaluados?",
            "type": "multiselect",
            "required": true,
            "options": [
                "Tecnología y programación",
                "Robótica y electrónica",
                "Diseño y creatividad digital",
                "Ciencias e investigación",
                "Emprendimiento e innovación",
                "Producción audiovisual y multimedia",
                "Oficios técnicos o industriales",
                "Ciencias sociales y comunitarias",
                "Otro"
            ]
        },
        {
            "id": "O_2",
            "label": "¿Qué limitaciones o dificultades identifica actualmente en el proceso de levantamiento de información en los municipios o instituciones educativas?",
            "type": "multiselect",
            "required": true,
            "options": [
                "Baja participación estudiantil",
                "Falta de tiempo institucional",
                "Dificultades logísticas o desplazamiento",
                "Limitaciones tecnológicas o de conectividad",
                "Falta de articulación institucional",
                "Información insuficiente para análisis posteriores",
                "Baja apropiación del proceso por parte de las instituciones",
                "Otro"
            ]
        },
        {
            "id": "O_3",
            "label": "¿Qué información adicional considera importante recolectar para fortalecer la planeación y focalización del Proyecto Aulas STEAM en el territorio?",
            "type": "multiselect",
            "required": true,
            "options": [
                "Intereses vocacionales de estudiantes",
                "Necesidades productivas del territorio",
                "Problemáticas locales para resolver",
                "Capacidades docentes existentes",
                "Infraestructura tecnológica disponible",
                "Proyectos institucionales previos",
                "Intereses del sector productivo local",
                "Caracterización socioeconómica",
                "Otro"
            ]
        },
        {
            "id": "O_4",
            "label": "¿Qué tipos de capacitación o formación docente considera prioritarios?",
            "type": "multiselect",
            "required": true,
            "options": [
                "Metodologías STEAM/STEM",
                "Uso de herramientas tecnológicas y equipos",
                "Programación y pensamiento computacional",
                "Robótica y electrónica básica",
                "Impresión 3D y prototipado",
                "Inteligencia artificial aplicada a educación",
                "Diseño de proyectos interdisciplinarios",
                "Estrategias pedagógicas innovadoras",
                "Uso de plataformas y software educativo",
                "Gestión y operación del Aula STEAM",
                "Seguridad y manejo de equipos",
                "Evaluación de proyectos y experiencias STEAM",
                "Otro"
            ]
        },
        {
            "id": "O_5",
            "label": "¿Qué temores, dudas o barreras iniciales identifica frente al Proyecto Aulas STEAM?",
            "type": "multiselect",
            "required": true,
            "options": [
                "Falta de sostenibilidad financiera",
                "Dificultades de mantenimiento y soporte técnico",
                "Falta de formación docente o técnica",
                "Baja apropiación institucional",
                "Limitaciones de conectividad o infraestructura",
                "Poco tiempo para integrar actividades STEAM",
                "Desactualización rápida de tecnologías y equipos",
                "Falta de personal de apoyo",
                "Baja participación o interés de la comunidad educativa",
                "Dificultades administrativas o de gestión",
                "Incertidumbre sobre continuidad del proyecto",
                "Otro"
            ]
        },
        {
            "id": "O_6",
            "label": "¿Qué cuellos de botella financieros o contractuales ha identificado en fases anteriores?",
            "type": "multiselect",
            "required": true,
            "options": [
                "Retrasos en desembolsos",
                "Procesos administrativos lentos",
                "Presupuesto insuficiente",
                "Problemas con proveedores",
                "Demoras contractuales",
                "Fluctuación de costos",
                "Incumplimiento de plazos, demoras en las entregas o problemas de calidad por parte de los proveedores",
                "No se han identificado cuellos de botella financieros ni contractuales.",
                "Otro"
            ]
        },
        {
            "id": "O_7",
            "label": "¿Qué factores han limitado el desarrollo eficiente y sostenible del Proyecto Aulas STEAM?",
            "type": "multiselect",
            "required": true,
            "options": [
                "Restricciones en el uso de recursos de Estampilla",
                "Rotación de personal o cambios institucionales",
                "Falta de planeación financiera a largo plazo",
                "Cambios en prioridades institucionales o políticas",
                "Dificultades en la coordinación interinstitucional",
                "Procesos administrativos complejos",
                "Falta de recursos para mantenimiento y actualización",
                "Dificultades para garantizar continuidad operativa",
                "Limitaciones en seguimiento y evaluación del impacto",
                "Otro"
            ]
        }
    ],
    "sec1_aliado": [
        {
            "id": "N_1",
            "label": "Desde su perspectiva, ¿Qué tan pertinente ha sido el Proyecto Aulas STEAM para las necesidades educativas y de innovación del territorio?",
            "type": "scale",
            "required": true
        },
        {
            "id": "N_2",
            "label": "¿Qué impactos considera más relevantes en el desarrollo del Proyecto Aulas STEAM?",
            "type": "multiselect",
            "required": true,
            "maxSelections": 3,
            "options": [
                "Fortalecimiento de capacidades tecnológicas",
                "Formación docente",
                "Innovación educativa",
                "Apropiación STEAM/STEM",
                "Desarrollo de habilidades en estudiantes",
                "Articulación institucional",
                "Acceso a tecnologías emergentes",
                "Otro"
            ]
        },
        {
            "id": "N_3",
            "label": "¿Considera que el Proyecto Aulas STEAM tiene potencial de crecimiento y continuidad en el territorio?",
            "type": "select",
            "required": true,
            "options": [
                "Sí",
                "No",
                "Parcialmente"
            ]
        },
        {
            "id": "N_4",
            "label": "Desde su perspectiva externa, ¿cómo percibe la adecuación de los espacios y la infraestructura tecnológica del Aula STEAM?",
            "type": "scale",
            "required": true
        },
        {
            "id": "N_4_comment",
            "label": "Comentario sobre infraestructura",
            "type": "text",
            "required": false
        }
    ],
    "sec2_aliado": [
        {
            "id": "D_5_aliado",
            "label": "¿Qué oportunidades de mejora identifica en la estructura actual de las alianzas estratégicas?",
            "type": "multiselect",
            "required": true,
            "options": [
                "Formalización de acuerdos",
                "Claridad en responsabilidades",
                "Mejor comunicación",
                "Indicadores conjuntos",
                "Cofinanciación",
                "Vinculación de nuevos aliados",
                "Otro"
            ]
        },
        {
            "id": "D_6_aliado",
            "label": "¿Qué recomendaciones estratégicas tiene respecto a la optimización de los recursos financieros actuales del Proyecto Aulas STEAM para garantizar su sostenibilidad?",
            "type": "text",
            "required": true
        }
    ],
    "sec3_aliado": [
        {
            "id": "E_S_3",
            "label": "¿Cómo observa la alíneación de las actividades del Aula STEAM con las tendencias o necesidades actuales del sector académico y productivo?",
            "type": "scale",
            "required": true
        }
    ],
    "sec5_aliado": [
        {
            "id": "E_S_4",
            "label": "¿Qué rol específico deberían asumir los aliados estratégicos para garantizar la escalabilidad e impacto del Proyecto Aulas STEAM?",
            "type": "multiselect",
            "required": true,
            "options": [
                "Cofinanciador: Aportar recursos económicos directos o gestionar fondos de inversión externos.",
                "Proveedor de tecnología: Facilitar, donar o renovar licencias de software, equipos e infraestructura.",
                "Asesor técnico / Mentor: Brindar capacitaciones especializadas, charlas técnicas o asesorías conjuntas.",
                "Facilitador de inserción laboral: Ofrecer prácticas profesionales, pasantías o vacantes de empleo a los beneficiarios.",
                "Co-diseñador académico: Colaborar en el diseño de planes de formación alineados con las demandas reales de la industria.",
                "Conector institucional: Enlazar el proyecto con gobiernos locales, gremios empresariales o redes de cooperación regional.",
                "Socio de I+D: Desarrollar de manera conjunta proyectos de investigación, desarrollo tecnológico e innovación aplicada.",
                "Promotor o difusor: Apoyar en la divulgación del impacto del proyecto para atraer nuevos participantes o cooperantes.",
                "Otro"
            ]
        }
    ],
    "sec4_prov": [
        {
            "id": "I_1",
            "label": "¿Los procesos de contratación con la UNAL han sido claros y ágiles?",
            "type": "scale",
            "required": true
        },
        {
            "id": "I_2",
            "label": "¿Qué mejoras en las fichas técnicas o términos de referencia (TDR) harían más eficiente la adquisición?",
            "type": "multiselect",
            "required": true,
            "options": [
                "Estandarizar las especificaciones técnicas de los equipos para evitar confusiones.",
                "Evitar el direccionamiento de marcas específicas para fomentar una mayor competencia.",
                "Realizar estudios de mercado más precisos para establecer presupuestos acordes a la realidad.",
                "Definir criterios de evaluación objetivos y fáciles de calificar por el comité.",
                "Simplificar los requisitos administrativos y jurídicos exigidos a los proponentes.",
                "Exigir certificaciones de calidad y garantías de fábrica mínimas obligatorias.",
                "Incluir la instalación y capacitación básica dentro de las condiciones de entrega.",
                "Publicar pliegos de condiciones preliminares para recibir comentarios previos de los proveedores.",
                "Otro"
            ]
        },
        {
            "id": "I_3",
            "label": "¿Qué plan de mejora propone para garantizar el soporte técnico y el cumplimiento de los niveles de servicio (SLA) por parte de los proveedores?",
            "type": "multiselect",
            "required": true,
            "options": [
                "Establecer multas y sanciones claras en el contrato por incumplimiento de tiempos.",
                "Exigir soporte técnico presencial y local, evitando la asistencia únicamente remota.",
                "Implementar una plataforma digital para registrar, priorizar y rastrear los reportes de fallas.",
                "Fijar tiempos de respuesta estrictos y obligatorios según la gravedad del daño.",
                "Programar mantenimientos preventivos obligatorios de manera periódica en el contrato.",
                "Exigir stock de repuestos inmediato al proveedor para evitar demoras por importaciones o envíos.",
                "Realizar evaluaciones periódicas de desempeño al proveedor para revisar la calidad del servicio.",
                "Capacitar al personal interno para resolver fallas básicas de primer nivel sin depender del proveedor.",
                "Otro"
            ]
        }
    ],
    "sec4_benef_futuro": [
        {
            "id": "K_1",
            "label": "¿Qué beneficios espera que el Aula STEAM genere en su institución o municipio durante el primer año de funcionamiento?",
            "type": "multiselect",
            "required": true,
            "options": [
                "Acceso a tecnologías avanzadas (impresoras 3D, kits de robótica, computadores).",
                "Capacitación técnica y pedagógica para los docentes de la institución.",
                "Mayor motivación y asistencia de los estudiantes a las clases diarias.",
                "Desarrollo de habilidades prácticas en programación, diseño, ciencias y matemáticas.",
                "Reducción de la brecha digital en la institución o en el municipio.",
                "Creación de proyectos escolares que propongan soluciones a problemas locales.",
                "Apertura de talleres y cursos tecnológicos dirigidos a las familias y la comunidad.",
                "Mejor preparación académica de los estudiantes para su futuro universitario o laboral.",
                "Otro"
            ]
        },
        {
            "id": "K_1_1",
            "label": "¿La administración municipal o rectoría está dispuesta a comprometer recursos propios para el funcionamiento (mantenimiento, servicios, personal) ?",
            "type": "select",
            "required": true,
            "options": [
                "Sí",
                "No",
                "Condicional"
            ]
        },
        {
            "id": "K_2",
            "label": "¿La institución/municipio estaría dispuesta a asignar personal responsable para apoyar la operación y sostenibilidad del Aula STEAM?",
            "type": "select",
            "required": true,
            "options": [
                "Sí",
                "No",
                "Parcialmente"
            ]
        },
        {
            "id": "K_3",
            "label": "¿La institución/municipio cuenta con disposición para destinar tiempos académicos o espacios para el desarrollo de actividades STEAM?",
            "type": "scale",
            "required": true
        },
        {
            "id": "K_4",
            "label": "¿La institución/municipio estaría comprometida con procesos de formación y apropiación tecnológica para docentes y equipos de apoyo ?",
            "type": "select",
            "required": true,
            "options": [
                "Sí",
                "No",
                "Parcialmente"
            ]
        },
        {
            "id": "K_5",
            "label": "¿La institución estaría dispuesta a asumir responsabilidades básicas de cuidado, mantenimiento y seguimiento del Aula STEAM?",
            "type": "scale",
            "required": true
        },
        {
            "id": "K_6",
            "label": "¿Qué temores, dudas o barreras iniciales identifica frente al Proyecto Aulas STEAM?",
            "type": "multiselect",
            "required": true,
            "options": [
                "Falta de sostenibilidad financiera",
                "Dificultades de mantenimiento y soporte técnico",
                "Falta de formación docente o técnica",
                "Baja apropiación institucional",
                "Limitaciones de conectividad o infraestructura",
                "Poco tiempo para integrar actividades STEAM",
                "Desactualización rápida de tecnologías y equipos",
                "Falta de personal de apoyo",
                "Baja participación o interés de la comunidad educativa",
                "Dificultades administrativas o de gestión",
                "Incertidumbre sobre continuidad del proyecto",
                "Otro"
            ]
        },
        {
            "id": "K_7_1",
            "label": "Si ha tenido la oportunidad de visitar un Aula STEAM activa, ¿Qué le llamó la atención positiva o negativamente?",
            "type": "text",
            "required": false,
            "dependsOn": {
                "id": "0_8",
                "values": [
                    "Sí"
                ]
            }
        },
        {
            "id": "K_8",
            "label": "¿La institución o municipio estaría dispuesto a generar alianzas con universidades, empresas u otros actores?",
            "type": "select",
            "required": true,
            "options": [
                "Sí",
                "No",
                "Parcialmente"
            ]
        },
        {
            "id": "K_9",
            "label": "¿El espacio físico preseleccionado cuenta con condiciones óptimas de energía, red, ventilación e iluminación ?",
            "type": "scale",
            "required": true
        },
        {
            "id": "K_10",
            "label": "¿Existe alguna experiencia o proyecto previo similar (robótica, clubes de ciencia, aulas de informática avanzadas)?",
            "type": "select",
            "required": true,
            "options": [
                "Sí",
                "No",
                "No sé"
            ]
        },
        {
            "id": "K_11",
            "label": "Pensando en la puesta en marcha del Aula STEAM ¿Qué equipos o recursos tecnológicos considera prioritarios para garantizar el funcionamiento desde el inicio?",
            "type": "multiselect",
            "required": true,
            "options": [
                "Computadores o portátiles",
                "Conectividad y acceso a internet",
                "Kits de robótica y electrónica",
                "Impresoras 3D y consumibles",
                "Pantallas interactivas o proyectores",
                "Tablets o dispositivos móviles",
                "Herramientas de programación y desarrollo",
                "Equipos de realidad virtual o aumentada",
                "Mobiliario especializado y estaciones de trabajo",
                "Kits de ciencias y experimentación",
                "Software educativo y licencias",
                "Sistemas de sonido y grabación audiovisual",
                "Otro"
            ]
        },
        {
            "id": "K_12",
            "label": "¿Qué tipos de capacitación o formación docente considera prioritarios?",
            "type": "multiselect",
            "required": true,
            "options": [
                "Metodologías STEAM/STEM",
                "Uso de herramientas tecnológicas y equipos",
                "Programación y pensamiento computacional",
                "Robótica y electrónica básica",
                "Impresión 3D y prototipado",
                "Inteligencia artificial aplicada a educación",
                "Diseño de proyectos interdisciplinarios",
                "Estrategias pedagógicas innovadoras",
                "Uso de plataformas y software educativo",
                "Gestión y operación del Aula STEAM",
                "Seguridad y manejo de equipos",
                "Evaluación de proyectos y experiencias STEAM",
                "Otro"
            ]
        },
        {
            "id": "K_13",
            "label": "¿Con qué frecuencia esperaría recibir el acompañamiento presencial de la UNAL?",
            "type": "select",
            "required": true,
            "options": [
                "Semanalmente",
                "Cada 15 días",
                "Mensualmente",
                "Cada dos o tres meses",
                "Solo en momentos clave o necesidades específicas",
                "Únicamente al inicio de la implementación",
                "No sería necesario acompañamiento presencial permanente",
                "Otro"
            ]
        },
        {
            "id": "K_14",
            "label": "¿Qué nivel de compromiso tendría la institución para priorizar el Aula STEAM dentro de sus actividades académicas, proyectos institucionales y estrategias de desarrollo educativo?",
            "type": "scale",
            "required": true
        },
        {
            "id": "K_15",
            "label": "¿La institución/municipio estaría dispuesto/a a formalizar un acuerdo de corresponsabilidad con la Universidad Nacional para garantizar el adecuado uso, cuidado, sostenibilidad y aprovechamiento de la dotación del Aula STEAM?",
            "type": "select",
            "required": true,
            "options": [
                "Sí",
                "Sí sujeta a revisión jurídica",
                "No"
            ]
        },
        {
            "id": "K_16",
            "label": "¿Qué aliados locales (empresas, cooperativas de café, universidades locales) podrían vincularse a la dinámica del aula?",
            "type": "text",
            "required": false
        }
    ],
    "sec5_all": [
        {
            "id": "V_1",
            "label": "En una escala de 1 a 10, ¿qué tan satisfecho/a está con el Proyecto Aulas STEAM en general?",
            "type": "satisfaction-scale",
            "required": true
        },
        {
            "id": "V_2",
            "label": "¿Cuáles considera que deberían ser las 3 prioridades más urgentes en la reestructuración del Proyecto Aulas STEAM?",
            "type": "multiselect",
            "required": true,
            "maxSelections": 3,
            "options": [
                "Sostenibilidad financiera",
                "Mejora administrativa y contractual",
                "Actualización tecnológica",
                "Formación docente y técnica",
                "Soporte técnico y mantenimiento",
                "Articulación entre actores e instituciones",
                "Fortalecimiento pedagógico STEAM/STEM",
                "Seguimiento y medición de impacto",
                "Cobertura y sostenibilidad del proyecto",
                "Otro"
            ]
        },
        {
            "id": "V_3",
            "label": "Pensando en el fortalecimiento tecnológico y físico del Proyecto Aulas STEAM, ¿cuáles considera que deberían ser las 3 inversiones prioritarias para la siguiente fase?",
            "type": "multiselect",
            "required": true,
            "maxSelections": 3,
            "options": [
                "Conectividad e infraestructura",
                "Equipos tecnológicos y TIC",
                "Impresión 3D, robótica y manufactura digital",
                "Inteligencia artificial y tecnologías inmersivas",
                "Adecuación de espacios y mobiliario",
                "Mantenimiento y actualización de equipos",
                "Formación y talento humano",
                "Recursos pedagógicos y contenidos",
                "Otro"
            ]
        }
    ]
};;

const actorModuleMapping = {
    "gob_alc": {
        "title": "Gobernación / Secretaría de Educación de Caldas / Alcaldía y Secretaría de Manizales",
        "badgeColor": "var(--color-gob-teal)",
        "modules": [
            "sec0",
            "sec2_gob_alc",
            "sec5_all"
        ]
    },
    "rect_prof": {
        "title": "Rector(a) / Docente de I.E con Aula STEAM",
        "badgeColor": "var(--color-primary)",
        "modules": [
            "sec0",
            "sec1_rect_prof_coord",
            "sec3_rect_prof_coord",
            "sec5_all"
        ]
    },
    "coord": {
        "title": "Coordinador(a) de Aula STEAM Caldas/Manizales",
        "badgeColor": "var(--color-primary-dark)",
        "modules": [
            "sec0",
            "sec1_rect_prof_coord",
            "sec3_rect_prof_coord",
            "sec5_all"
        ]
    },
    "direct_unal": {
        "title": "Directivo UNAL (Vicerrector / DIMA / Financiero / Contratación)",
        "badgeColor": "var(--color-unal-gold)",
        "modules": [
            "sec0",
            "sec2_direct_unal",
            "sec2_direct_unal_prototipado",
            "sec5_all"
        ]
    },
    "stem_unal": {
        "title": "Equipo del Centro de Prototipado UNAL",
        "badgeColor": "var(--color-stem-purple)",
        "modules": [
            "sec0",
            "sec2_stem_unal",
            "sec5_all"
        ]
    },
    "oso_unal": {
        "title": "Equipo de OSO UNAL",
        "badgeColor": "var(--color-primary-dark)",
        "modules": [
            "sec0",
            "sec2_oso_unal",
            "sec5_all"
        ]
    },
    "aliado": {
        "title": "Aliado Académico / Estratégico (U. de Caldas / Fundación Luker)",
        "badgeColor": "var(--color-aliados-orange)",
        "modules": [
            "sec0",
            "sec1_aliado",
            "sec2_aliado",
            "sec3_aliado",
            "sec5_all",
            "sec5_aliado"
        ]
    },
    "prov": {
        "title": "Proveedor de Equipos, Mobiliario o Kits",
        "badgeColor": "var(--color-text-muted)",
        "modules": [
            "sec0",
            "sec4_prov",
            "sec5_all"
        ]
    },
    "benef_futuro": {
        "title": "Futuro Beneficiario (Alcalde o Rector proyectado)",
        "badgeColor": "var(--color-primary-light)",
        "modules": [
            "sec0",
            "sec4_benef_futuro",
            "sec5_all"
        ]
    }
};;

// State Variables
// Google Sheets Web App Endpoint
const googleSheetsWebAppUrl = "https://script.google.com/macros/s/AKfycbxvZ18RXBF2gkTCPyheAsDJZbwYQ4seeB4Y8fGfbVybbvl6NbVoLrp4UYq7e5WQ5KsVsQ/exec";

let currentActorKey = null;
let activeModuleList = [];
let currentStepIndex = 0; // step index in the activeModuleList
const answers = {};

// Selectors
const screenWelcome = document.getElementById("screen-welcome");
const screenForm = document.getElementById("screen-form");
const screenSuccess = document.getElementById("screen-success");
const actorSelect = document.getElementById("actor-select");
const btnStart = document.getElementById("btn-start");
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");
const dynamicFormContainer = document.getElementById("dynamic-form-fields");
const sectionTitleElement = document.getElementById("section-title");
const progressBarFill = document.getElementById("progress-bar-fill");
const progressText = document.getElementById("progress-text");
const badgeRol = document.getElementById("badge-rol");

const btnDownloadJson = document.getElementById("btn-download-json");
const btnDownloadCsv = document.getElementById("btn-download-csv");
const previewContainer = document.getElementById("preview-grid");

// Event Listeners
btnStart.addEventListener("click", startForm);
btnPrev.addEventListener("click", navigateBack);
btnNext.addEventListener("click", navigateNext);
btnDownloadJson.addEventListener("click", downloadJSON);
btnDownloadCsv.addEventListener("click", downloadCSV);
dynamicFormContainer.addEventListener("change", updateDependencies);

// Initial State Setup
function init() {
    actorSelect.innerHTML = '<option value="" disabled selected>Seleccione su rol en el proyecto...</option>';
    for (const [key, value] of Object.entries(actorModuleMapping)) {
        const option = document.createElement("option");
        option.value = key;
        option.textContent = value.title;
        actorSelect.appendChild(option);
    }
}

function startForm() {
    currentActorKey = actorSelect.value;
    if (!currentActorKey) {
        alert("Por favor, seleccione un rol para poder ingresar al formulario.");
        return;
    }
    
    // Set up active modules for the selected actor
    const config = actorModuleMapping[currentActorKey];
    activeModuleList = [...config.modules];
    currentStepIndex = 0;
    
    // Set badge rol
    badgeRol.textContent = config.title;
    badgeRol.style.background = config.badgeColor;
    badgeRol.style.display = "inline-flex";

    // Switch screen
    screenWelcome.classList.remove("active");
    screenForm.classList.add("active");
    
    renderStep();
}

function renderStep() {
    dynamicFormContainer.innerHTML = "";
    const currentModuleKey = activeModuleList[currentStepIndex];
    
    const questionsToShow = questionDatabase[currentModuleKey] || [];
    setSectionTitle(currentModuleKey);
    
    // Render each question
    questionsToShow.forEach(q => {
        const group = document.createElement("div");
        group.className = "question-group";
        group.setAttribute("data-q-id", q.id);
        
        if (q.dependsOn) {
            group.classList.add("dependent-question");
            group.setAttribute("data-depends-on", q.dependsOn.id);
            group.setAttribute("data-depends-values", JSON.stringify(q.dependsOn.values));
        }
        
        const label = document.createElement("label");
        label.className = "question-label";
        label.textContent = q.label;
        if (q.required) {
            const reqStar = document.createElement("span");
            reqStar.style.color = "red";
            reqStar.style.marginLeft = "4px";
            reqStar.textContent = "*";
            label.appendChild(reqStar);
        }
        group.appendChild(label);

        if (q.desc) {
            const desc = document.createElement("p");
            desc.className = "question-desc";
            desc.textContent = q.desc;
            group.appendChild(desc);
        }

        // Render inputs depending on type
        renderInputElement(group, q);
        
        dynamicFormContainer.appendChild(group);
    });

    // Update buttons
    btnPrev.disabled = currentStepIndex === 0;
    if (currentStepIndex === activeModuleList.length - 1) {
        btnNext.innerHTML = 'Finalizar Encuesta <i class="fas fa-check-circle"></i>';
    } else {
        btnNext.innerHTML = 'Siguiente <i class="fas fa-arrow-right"></i>';
    }

    // Update progress tracker
    const percent = Math.round((currentStepIndex / activeModuleList.length) * 100);
    progressBarFill.style.width = `${percent}%`;
    progressText.textContent = `Paso ${currentStepIndex + 1} de ${activeModuleList.length} (${percent}%)`;

    // Apply conditional questions visibility initial state
    updateDependencies();
}

function updateDependencies() {
    const dependentGroups = dynamicFormContainer.querySelectorAll(".question-group[data-depends-on]");
    dependentGroups.forEach(group => {
        const dependsOnId = group.getAttribute("data-depends-on");
        const dependsValues = JSON.parse(group.getAttribute("data-depends-values"));
        
        // Find dependency input value
        let currentVal = "";
        
        // Find inputs by name in the container
        const inputs = dynamicFormContainer.querySelectorAll(`[name="${dependsOnId}"]`);
        if (inputs.length > 0) {
            const firstInput = inputs[0];
            if (firstInput.type === "radio") {
                const checkedRadio = dynamicFormContainer.querySelector(`input[name="${dependsOnId}"]:checked`);
                currentVal = checkedRadio ? checkedRadio.value : "";
            } else if (firstInput.type === "checkbox") {
                // Not typical for simple dependency, but could be multiple values
                const checkedBoxes = dynamicFormContainer.querySelectorAll(`input[name="${dependsOnId}"]:checked`);
                const vals = [];
                checkedBoxes.forEach(cb => vals.push(cb.value));
                // We'll see if any checked values match
                const match = vals.some(v => dependsValues.includes(v.toString()));
                currentVal = match ? dependsValues[0] : ""; // hack to trigger show
            } else {
                currentVal = firstInput.value;
            }
        } else {
            // Check if it's saved in answers object (fallback if not in DOM yet)
            const saved = answers[dependsOnId];
            if (saved) {
                currentVal = typeof saved === "object" ? saved.answer : saved;
            }
        }
        
        const shouldShow = dependsValues.includes(currentVal.toString());
        if (shouldShow) {
            group.style.display = "block";
            // Restore required attributes
            group.querySelectorAll("[data-was-required]").forEach(input => {
                input.required = true;
                input.removeAttribute("data-was-required");
            });
        } else {
            group.style.display = "none";
            // Strip required attributes to pass step validation
            group.querySelectorAll("input, select, textarea").forEach(input => {
                if (input.required) {
                    input.setAttribute("data-was-required", "true");
                    input.required = false;
                }
                // Clear values when hidden
                if (input.type === "checkbox" || input.type === "radio") {
                    input.checked = false;
                } else if (input.tagName === "SELECT") {
                    input.selectedIndex = 0;
                } else {
                    input.value = "";
                }
            });
        }
    });
}

function setSectionTitle(moduleKey) {
    switch (moduleKey) {
        case "sec0":
            sectionTitleElement.textContent = "Sección 0: Identificación del encuestado";
            break;
        case "sec1_rect_prof_coord":
            sectionTitleElement.textContent = "Sección 1: Diagnóstico Operativo (Aulas STEAM)";
            break;
        case "sec1_aliado":
            sectionTitleElement.textContent = "Sección 1: Diagnóstico Operativo (Perspectiva de Aliado)";
            break;
        case "sec2_gob_alc":
            sectionTitleElement.textContent = "Sección 2: Gestión Estratégica y Financiera";
            break;
        case "sec2_direct_unal":
            sectionTitleElement.textContent = "Sección 2: Gestión Estratégica y Financiera (Directivo UNAL)";
            break;
        case "sec2_direct_unal_prototipado":
            sectionTitleElement.textContent = "Sección 2.1: Centro de Prototipado (Directivo UNAL)";
            break;
        case "sec2_aliado":
            sectionTitleElement.textContent = "Sección 2: Alianzas y Cooperación (Aliados)";
            break;
        case "sec2_stem_unal":
            sectionTitleElement.textContent = "Sección 2: Gestión Centro de Prototipado (Equipo UNAL)";
            break;
        case "sec2_oso_unal":
            sectionTitleElement.textContent = "Sección 1: Operación OSO (Equipo OSO UNAL)";
            break;
        case "sec3_rect_prof_coord":
            sectionTitleElement.textContent = "Sección 3: Pedagogía y Apropiación (Docentes / Coordinadores)";
            break;
        case "sec3_aliado":
            sectionTitleElement.textContent = "Sección 3: Pedagogía y Apropiación (Aliados)";
            break;
        case "sec4_prov":
            sectionTitleElement.textContent = "Sección 4: Módulo de Proyección Especializada (Proveedores)";
            break;
        case "sec4_benef_futuro":
            sectionTitleElement.textContent = "Sección 4: Módulo de Proyección Especializada (Futuros Beneficiarios)";
            break;
        case "sec5_all":
            sectionTitleElement.textContent = "Sección 5: Visión de Futuro del Proyecto";
            break;
        case "sec5_aliado":
            sectionTitleElement.textContent = "Sección 5: Visión de Futuro (Aliados)";
            break;
        default:
            sectionTitleElement.textContent = "Módulo del Formulario";
    }
}

function isOtro(text) {
    if (!text) return false;
    const norm = text.toLowerCase().trim();
    return norm.startsWith("otro") || norm.startsWith("otra") || norm.startsWith("otros");
}

function renderInputElement(container, q) {
    const savedVal = answers[q.id];

    if (q.type === "text") {
        const input = document.createElement("textarea");
        input.name = q.id;
        input.placeholder = "Escriba su respuesta detallada aquí...";
        input.value = savedVal || "";
        container.appendChild(input);
    } 
    else if (q.type === "number") {
        const input = document.createElement("input");
        input.type = "number";
        input.name = q.id;
        input.placeholder = "Ej: 2023";
        if (q.min !== undefined) input.min = q.min;
        if (q.max !== undefined) input.max = q.max;
        input.value = savedVal || "";
        container.appendChild(input);
    } 
    else if (q.type === "select") {
        const select = document.createElement("select");
        select.name = q.id;
        
        const defaultOpt = document.createElement("option");
        defaultOpt.value = "";
        defaultOpt.disabled = true;
        defaultOpt.selected = !savedVal;
        defaultOpt.textContent = "Seleccione una opción...";
        select.appendChild(defaultOpt);
        
        // Filter out UNAL options for the Gobernacion (gob) actor in question 0_4
        let optionsToRender = q.options;
        if (q.id === "0_4" && currentActorKey === "gob_alc") {
            optionsToRender = q.options.filter(opt => !opt.startsWith("UNAL"));
        }
        
        optionsToRender.forEach(opt => {
            const o = document.createElement("option");
            o.value = opt;
            o.textContent = opt;
            if (savedVal === opt || (savedVal && savedVal.startsWith("Otro: ") && isOtro(opt))) o.selected = true;
            select.appendChild(o);
        });
        container.appendChild(select);

        // Add dynamic text input for "Otro" option in select type
        const hasOtro = q.options.some(isOtro);
        if (hasOtro) {
            const outroInput = document.createElement("input");
            outroInput.type = "text";
            outroInput.name = `${q.id}_otro`;
            outroInput.placeholder = "Escriba aquí la otra opción...";
            outroInput.className = "otro-text-input";
            outroInput.style.display = "none";
            outroInput.style.marginTop = "8px";
            outroInput.style.width = "100%";
            outroInput.style.padding = "8px";
            outroInput.style.border = "1px solid var(--color-border)";
            outroInput.style.borderRadius = "var(--border-radius)";
            
            if (savedVal && savedVal.startsWith("Otro: ")) {
                outroInput.value = savedVal.replace("Otro: ", "");
                outroInput.style.display = "block";
            }
            
            select.addEventListener("change", () => {
                if (isOtro(select.value)) {
                    outroInput.style.display = "block";
                    outroInput.required = false;
                } else {
                    outroInput.style.display = "none";
                    outroInput.value = "";
                    outroInput.required = false;
                }
            });
            container.appendChild(outroInput);
        }
    } 
    else if (q.type === "binary") {
        const wrapper = document.createElement("div");
        wrapper.className = "binary-wrapper";
        
        ["Sí", "No"].forEach(val => {
            const optDiv = document.createElement("div");
            optDiv.className = "binary-option";
            
            const radio = document.createElement("input");
            radio.type = "radio";
            radio.name = q.id;
            radio.id = `${q.id}_${val}`;
            radio.value = val;
            if (savedVal === val) radio.checked = true;
            
            const lbl = document.createElement("label");
            lbl.htmlFor = `${q.id}_${val}`;
            lbl.className = val === "Sí" ? "yes-lbl" : "no-lbl";
            lbl.innerHTML = val === "Sí" ? '<i class="fas fa-check"></i> Sí' : '<i class="fas fa-times"></i> No';
            
            optDiv.appendChild(radio);
            optDiv.appendChild(lbl);
            wrapper.appendChild(optDiv);
        });
        container.appendChild(wrapper);
    } 
    else if (q.type === "scale" || q.type === "satisfaction-scale") {
        const wrapper = document.createElement("div");
        wrapper.className = "scale-wrapper";
        
        const maxVal = q.max || 5;
        for (let i = 1; i <= maxVal; i++) {
            const optDiv = document.createElement("div");
            optDiv.className = "scale-option";
            
            const radio = document.createElement("input");
            radio.type = "radio";
            radio.name = q.id;
            radio.id = `${q.id}_${i}`;
            radio.value = i;
            if (savedVal == i) radio.checked = true;
            
            const lbl = document.createElement("label");
            lbl.htmlFor = `${q.id}_${i}`;
            lbl.textContent = i;
            
            optDiv.appendChild(radio);
            optDiv.appendChild(lbl);
            wrapper.appendChild(optDiv);
        }
        container.appendChild(wrapper);
        
        // Add guide labels
        const meta = document.createElement("div");
        meta.style.display = "flex";
        meta.style.justify = "space-between";
        meta.style.fontSize = "0.75rem";
        meta.style.color = "var(--color-text-muted)";
        meta.style.marginTop = "6px";
        meta.innerHTML = q.type === "satisfaction-scale" 
            ? "<span>1 - Totalmente insatisfecho</span><span>10 - Totalmente conforme</span>"
            : "<span>1 - Deficiente</span><span>5 - Excelente</span>";
        container.appendChild(meta);
    } 
    else if (q.type === "conditional-text") {
        const wrapper = document.createElement("div");
        wrapper.className = "binary-wrapper";
        
        const options = q.id === "A_3" ? ["Sí", "No", "Parcialmente"] : ["Sí", "No"];
        options.forEach(val => {
            const optDiv = document.createElement("div");
            optDiv.className = "binary-option";
            
            const radio = document.createElement("input");
            radio.type = "radio";
            radio.name = q.id;
            radio.id = `${q.id}_${val}`;
            radio.value = val;
            if (savedVal && savedVal.answer === val) radio.checked = true;
            
            const lbl = document.createElement("label");
            lbl.htmlFor = `${q.id}_${val}`;
            lbl.className = (val === "Sí" || val === "Parcialmente") ? "yes-lbl" : "no-lbl";
            lbl.textContent = val;
            
            optDiv.appendChild(radio);
            optDiv.appendChild(lbl);
            wrapper.appendChild(optDiv);
        });
        container.appendChild(wrapper);
        
        // Conditional text area
        const condDiv = document.createElement("div");
        condDiv.className = "conditional-field";
        condDiv.id = `cond_${q.id}`;
        
        const condLbl = document.createElement("label");
        condLbl.className = "question-label";
        condLbl.style.fontSize = "0.9rem";
        condLbl.style.marginTop = "10px";
        condLbl.textContent = q.condLabel;
        condDiv.appendChild(condLbl);
        
        const text = document.createElement("textarea");
        text.name = `${q.id}_text`;
        text.placeholder = "Indique detalles aquí...";
        text.value = (savedVal && savedVal.details) || "";
        condDiv.appendChild(text);
        
        container.appendChild(condDiv);
        
        // Show/hide logic
        const toggleCondition = () => {
            const selectedVal = container.querySelector(`input[name="${q.id}"]:checked`)?.value;
            let shouldShow = false;
            
            if (q.condTrigger === "No") {
                shouldShow = (selectedVal === "No" || selectedVal === "Parcialmente");
            } else {
                shouldShow = (selectedVal === q.condTrigger);
            }
            
            if (shouldShow) {
                condDiv.classList.add("visible");
            } else {
                condDiv.classList.remove("visible");
            }
        };
        
        // Bind changes
        container.querySelectorAll(`input[name="${q.id}"]`).forEach(rad => {
            rad.addEventListener("change", toggleCondition);
        });
        
        // Run once initial
        toggleCondition();
    } 
    else if (q.type === "multiselect") {
        const grid = document.createElement("div");
        grid.className = "chips-grid";
        
        q.options.forEach((opt, idx) => {
            const chip = document.createElement("div");
            chip.className = "chip-option";
            if (isOtro(opt)) {
                chip.classList.add("chip-option-otro");
                chip.style.display = "flex";
                chip.style.flexDirection = "column";
                chip.style.alignItems = "flex-start";
                chip.style.gap = "8px";
            }
            
            const check = document.createElement("input");
            check.type = "checkbox";
            check.name = q.id;
            check.id = `${q.id}_${idx}`;
            check.value = opt;
            
            let isChecked = false;
            let savedOtroText = "";
            if (savedVal && Array.isArray(savedVal)) {
                if (savedVal.includes(opt)) {
                    isChecked = true;
                } else if (isOtro(opt)) {
                    const foundOtro = savedVal.find(v => v.startsWith("Otro: "));
                    if (foundOtro) {
                        isChecked = true;
                        savedOtroText = foundOtro.replace("Otro: ", "");
                    }
                }
            }
            if (isChecked) check.checked = true;
            
            const lbl = document.createElement("label");
            lbl.htmlFor = `${q.id}_${idx}`;
            lbl.textContent = opt;
            
            const rowWrapper = document.createElement("div");
            rowWrapper.style.display = "flex";
            rowWrapper.style.alignItems = "center";
            rowWrapper.style.gap = "8px";
            rowWrapper.appendChild(check);
            rowWrapper.appendChild(lbl);
            
            chip.appendChild(rowWrapper);
            
            if (isOtro(opt)) {
                const outroInput = document.createElement("input");
                outroInput.type = "text";
                outroInput.placeholder = "Especifique qué otra opción...";
                outroInput.className = "otro-chip-text";
                outroInput.value = savedOtroText;
                outroInput.style.display = isChecked ? "block" : "none";
                outroInput.style.width = "100%";
                outroInput.style.padding = "6px";
                outroInput.style.marginTop = "4px";
                outroInput.style.border = "1px solid var(--color-border)";
                outroInput.style.borderRadius = "var(--border-radius)";
                
                check.addEventListener("change", () => {
                    if (check.checked) {
                        outroInput.style.display = "block";
                        outroInput.required = false;
                        outroInput.focus();
                    } else {
                        outroInput.style.display = "none";
                        outroInput.value = "";
                        outroInput.required = false;
                    }
                });
                chip.appendChild(outroInput);
            }
            
            grid.appendChild(chip);
        });
        container.appendChild(grid);
    } 
    else if (q.type === "triple-text") {
        const wrap = document.createElement("div");
        wrap.style.display = "flex";
        wrap.style.flexDirection = "column";
        wrap.style.gap = "10px";
        
        for (let i = 1; i <= 3; i++) {
            const input = document.createElement("input");
            input.type = "text";
            input.name = `${q.id}_${i}`;
            input.placeholder = `${q.placeholder} #${i}...`;
            input.value = (savedVal && savedVal[i-1]) || "";
            wrap.appendChild(input);
        }
        container.appendChild(wrap);
    }
}

// Navigation Logic
function navigateBack() {
    if (currentStepIndex > 0) {
        saveCurrentAnswers();
        currentStepIndex--;
        renderStep();
    }
}

let isSubmitting = false;

function navigateNext() {
    if (isSubmitting) return;

    if (validateCurrentStep()) {
        saveCurrentAnswers();
        
        if (currentStepIndex < activeModuleList.length - 1) {
            currentStepIndex++;
            renderStep();
        } else {
            // Disable navigation buttons and set submits indicator
            isSubmitting = true;
            btnNext.disabled = true;
            btnPrev.disabled = true;
            btnNext.innerHTML = 'Enviando... <i class="fas fa-spinner fa-spin"></i>';
            submitForm();
        }
    }
}

// Validate current step questions
function validateCurrentStep() {
    const currentModuleKey = activeModuleList[currentStepIndex];
    const questions = questionDatabase[currentModuleKey] || [];

    for (const q of questions) {
        // Skip validation if the question is dependent and currently hidden
        const group = dynamicFormContainer.querySelector(`.question-group[data-q-id="${q.id}"]`);
        if (group && group.style.display === "none") {
            continue;
        }

        if (!q.required) continue;

        if (q.type === "text" || q.type === "number") {
            const element = dynamicFormContainer.querySelector(`[name="${q.id}"]`);
            if (!element || !element.value.trim()) {
                alert(`Por favor complete el campo requerido: "${q.label}"`);
                if (element) element.focus();
                return false;
            }
        } 
        else if (q.type === "select") {
            const selectElem = dynamicFormContainer.querySelector(`select[name="${q.id}"]`);
            if (!selectElem || !selectElem.value.trim()) {
                alert(`Por favor complete el campo requerido: "${q.label}"`);
                if (selectElem) selectElem.focus();
                return false;
            }
            // If select value is "Otro", dynamic text input is optional (removed blocking validation)
        }
        else if (q.type === "binary" || q.type === "scale" || q.type === "satisfaction-scale") {
            const checked = dynamicFormContainer.querySelector(`input[name="${q.id}"]:checked`);
            if (!checked) {
                alert(`Por favor seleccione una respuesta para: "${q.label}"`);
                return false;
            }
        } 
        else if (q.type === "conditional-text") {
            const checked = dynamicFormContainer.querySelector(`input[name="${q.id}"]:checked`);
            if (!checked) {
                alert(`Por favor seleccione una respuesta para: "${q.label}"`);
                return false;
            }
            
            const triggerVal = checked.value;
            let triggers = false;
            if (q.condTrigger === "No") {
                triggers = (triggerVal === "No" || triggerVal === "Parcialmente");
            } else {
                triggers = (triggerVal === q.condTrigger);
            }
            
            if (triggers) {
                const textElem = dynamicFormContainer.querySelector(`[name="${q.id}_text"]`);
                if (!textElem || !textElem.value.trim()) {
                    alert(`Por favor justifique su respuesta en el cuadro de texto.`);
                    if (textElem) textElem.focus();
                    return false;
                }
            }
        } 
        else if (q.type === "multiselect") {
            const checkedBoxes = dynamicFormContainer.querySelectorAll(`input[name="${q.id}"]:checked`);
            if (checkedBoxes.length === 0) {
                alert(`Por favor seleccione al menos una opción para: "${q.label}"`);
                return false;
            }
            
            if (q.maxSelections && checkedBoxes.length > q.maxSelections) {
                alert(`Por favor seleccione un máximo de ${q.maxSelections} opciones para: "${q.label}"`);
                return false;
            }

            // Dynamic text input for "Otro" option is optional (removed blocking validation)
        }
        else if (q.type === "triple-text") {
            // Must fill at least the first item
            const element1 = dynamicFormContainer.querySelector(`[name="${q.id}_1"]`);
            if (!element1 || !element1.value.trim()) {
                alert(`Por favor ingrese al menos el primer ítem para: "${q.label}"`);
                if (element1) element1.focus();
                return false;
            }
        }
    }
    return true;
}

// Save answers of the current step
function saveCurrentAnswers() {
    const currentModuleKey = activeModuleList[currentStepIndex];
    const questions = questionDatabase[currentModuleKey] || [];

    questions.forEach(q => {
        // Skip saving if the question is dependent and currently hidden
        const group = dynamicFormContainer.querySelector(`.question-group[data-q-id="${q.id}"]`);
        if (group && group.style.display === "none") {
            answers[q.id] = undefined;
            return;
        }

        if (q.type === "text" || q.type === "number") {
            const val = dynamicFormContainer.querySelector(`[name="${q.id}"]`)?.value;
            answers[q.id] = val;
        } 
        else if (q.type === "select") {
            const selectElem = dynamicFormContainer.querySelector(`select[name="${q.id}"]`);
            if (selectElem) {
                const val = selectElem.value;
                if (isOtro(val)) {
                    const outroInput = dynamicFormContainer.querySelector(`input[name="${q.id}_otro"]`);
                    answers[q.id] = outroInput && outroInput.value.trim() ? `Otro: ${outroInput.value.trim()}` : val;
                } else {
                    answers[q.id] = val;
                }
            }
        }
        else if (q.type === "binary" || q.type === "scale" || q.type === "satisfaction-scale") {
            const val = dynamicFormContainer.querySelector(`input[name="${q.id}"]:checked`)?.value;
            answers[q.id] = val;
        } 
        else if (q.type === "conditional-text") {
            const ans = dynamicFormContainer.querySelector(`input[name="${q.id}"]:checked`)?.value;
            const det = dynamicFormContainer.querySelector(`[name="${q.id}_text"]`)?.value;
            answers[q.id] = {
                answer: ans,
                details: det || ""
            };
        } 
        else if (q.type === "multiselect") {
            const checkedBoxes = dynamicFormContainer.querySelectorAll(`input[name="${q.id}"]:checked`);
            const selectedList = [];
            checkedBoxes.forEach(cb => {
                const val = cb.value;
                if (isOtro(val)) {
                    const outroInput = cb.parentElement.querySelector('.otro-chip-text');
                    if (outroInput && outroInput.value.trim()) {
                        selectedList.push(`Otro: ${outroInput.value.trim()}`);
                    } else {
                        selectedList.push(val);
                    }
                } else {
                    selectedList.push(val);
                }
            });
            answers[q.id] = selectedList;
        } 
        else if (q.type === "triple-text") {
            const vals = [];
            for (let i = 1; i <= 3; i++) {
                const v = dynamicFormContainer.querySelector(`[name="${q.id}_${i}"]`)?.value;
                if (v && v.trim()) vals.push(v.trim());
            }
            answers[q.id] = vals;
        }
    });
}

function submitForm() {
    progressBarFill.style.width = `100%`;
    progressText.textContent = `Enviando respuestas a Google Sheets...`;
    
    // Obtener el título descriptivo del actor seleccionado
    const actorTitle = actorModuleMapping[currentActorKey]?.title || "General";
    
    // Construir el objeto de respuestas legibles
    const respuestasLegibles = {};
    
    for (const [qId, value] of Object.entries(answers)) {
        if (qId === "V_2" || qId === "V_3") {
            let questionObj = null;
            for (const modQs of Object.values(questionDatabase)) {
                const found = modQs.find(q => q.id === qId);
                if (found) { questionObj = found; break; }
            }
            const questionLabel = questionObj ? questionObj.label : qId;
            
            for (let i = 1; i <= 3; i++) {
                const val = (value && value[i-1]) || "";
                respuestasLegibles[`${questionLabel} (#${i})`] = val;
            }
        } 
        else if (typeof value === "object" && value !== null && !Array.isArray(value)) {
            let questionObj = null;
            for (const modQs of Object.values(questionDatabase)) {
                const found = modQs.find(q => q.id === qId);
                if (found) { questionObj = found; break; }
            }
            
            const label = questionObj ? questionObj.label : qId;
            respuestasLegibles[label] = value.answer;
            
            const condLabel = questionObj && questionObj.condLabel 
                ? questionObj.condLabel 
                : `${label} (Justificación)`;
            respuestasLegibles[condLabel] = value.details || "";
        } 
        else if (Array.isArray(value)) {
            let questionObj = null;
            for (const modQs of Object.values(questionDatabase)) {
                const found = modQs.find(q => q.id === qId);
                if (found) { questionObj = found; break; }
            }
            const label = questionObj ? questionObj.label : qId;
            respuestasLegibles[label] = value.join(", ");
        } 
        else {
            let questionObj = null;
            for (const modQs of Object.values(questionDatabase)) {
                const found = modQs.find(q => q.id === qId);
                if (found) { questionObj = found; break; }
            }
            const label = questionObj ? questionObj.label : qId;
            respuestasLegibles[label] = value !== undefined ? value : "";
        }
    }
    
    // Agregar el Rol descriptivo del actor de forma programática para compatibilidad con la columna de Google Sheets
    respuestasLegibles["Cargo o rol dentro del Proyecto"] = actorTitle;
    answers["0_3"] = actorTitle;
    
    // Si la URL no está configurada, procedemos solo de forma offline / local
    if (!googleSheetsWebAppUrl || googleSheetsWebAppUrl.trim() === "") {
        console.warn("googleSheetsWebAppUrl no está configurada. Las respuestas se guardaron localmente.");
        progressText.textContent = `¡Completado (Local)! (100%)`;
        screenForm.classList.remove("active");
        screenSuccess.classList.add("active");
        renderResponsePreview();
        isSubmitting = false;
        btnNext.disabled = false;
        btnPrev.disabled = false;
        return;
    }
    
    // Envío asíncrono a la Web App de Google Sheets
    fetch(googleSheetsWebAppUrl, {
        method: "POST",
        mode: "no-cors", // Evita bloqueos CORS de redirecciones de Apps Script
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            actor: actorTitle,
            respuestas: respuestasLegibles
        })
    })
    .then(() => {
        progressText.textContent = `¡Completado! (100%)`;
        screenForm.classList.remove("active");
        screenSuccess.classList.add("active");
        renderResponsePreview();
        isSubmitting = false;
        btnNext.disabled = false;
        btnPrev.disabled = false;
    })
    .catch(error => {
        console.error("Error al enviar respuestas a Google Sheets:", error);
        alert("Hubo un error de conexión al enviar al Excel en la nube. Tus respuestas se han guardado de forma local.");
        progressText.textContent = `¡Completado localmente con errores de red! (100%)`;
        screenForm.classList.remove("active");
        screenSuccess.classList.add("active");
        renderResponsePreview();
        isSubmitting = false;
        btnNext.disabled = false;
        btnPrev.disabled = false;
    });
}

function renderResponsePreview() {
    previewContainer.innerHTML = "";
    
    // Flat mapping of answers to show on final screen
    for (const [qId, value] of Object.entries(answers)) {
        // Find question metadata
        let questionObj = null;
        for (const modQs of Object.values(questionDatabase)) {
            const found = modQs.find(q => q.id === qId);
            if (found) {
                questionObj = found;
                break;
            }
        }
        
        if (!questionObj) continue;
        
        const previewItem = document.createElement("div");
        previewItem.className = "preview-item";
        
        const label = document.createElement("strong");
        label.textContent = questionObj.label;
        previewItem.appendChild(label);
        
        const valText = document.createElement("span");
        if (typeof value === "object" && !Array.isArray(value)) {
            valText.innerHTML = `<strong>Seleccionado:</strong> ${value.answer} <br/> <strong>Justificación:</strong> ${value.details}`;
        } else if (Array.isArray(value)) {
            valText.textContent = value.join(", ");
        } else {
            valText.textContent = value;
        }
        previewItem.appendChild(valText);
        
        previewContainer.appendChild(previewItem);
    }
}

// Download local files
function downloadJSON() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(answers, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `Respuestas_Aulas_STEAM_${answers["0_1"] || "Anonimo"}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
}

function downloadCSV() {
    let csvContent = "Pregunta,Respuesta\n";
    
    for (const [qId, value] of Object.entries(answers)) {
        let label = qId;
        for (const modQs of Object.values(questionDatabase)) {
            const found = modQs.find(q => q.id === qId);
            if (found) {
                label = found.label.replace(/"/g, '""');
                break;
            }
        }
        
        let valStr = "";
        if (typeof value === "object" && !Array.isArray(value)) {
            valStr = `"${value.answer.replace(/"/g, '""')} | Justificación: ${value.details.replace(/"/g, '""')}"`;
        } else if (Array.isArray(value)) {
            valStr = `"${value.join("; ").replace(/"/g, '""')}"`;
        } else {
            valStr = `"${String(value).replace(/"/g, '""')}"`;
        }
        
        csvContent += `"${label}",${valStr}\n`;
    }
    
    const dataStr = "data:text/csv;charset=utf-8," + encodeURIComponent(csvContent);
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `Respuestas_Aulas_STEAM_${answers["0_1"] || "Anonimo"}.csv`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
}

// Run Setup
init();
