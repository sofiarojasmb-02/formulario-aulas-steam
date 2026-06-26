// Bank of questions per module as described in the survey document
const questionDatabase = {
    // SECTION 0: User profile - Common for all
    sec0: [
        {
            id: "0_1",
            label: "Nombre completo",
            type: "text",
            required: true
        },
        {
            id: "0_2",
            label: "Institución / entidad a la que pertenece",
            type: "text",
            required: true
        },
        {
            id: "0_4",
            label: "Municipio o sede de referencia",
            type: "select",
            required: true,
            options: [
                "Manizales (Sede Central)", "Aguadas", "Anserma", "Aranzazu", "Belalcázar", 
                "Chinchiná", "Filadelfia", "La Dorada", "La Merced", "Manzanares", 
                "Marmato", "Marquetalia", "Marulanda", "Neira", "Norcasia", "Pácora", 
                "Palestina", "Pensilvania", "Riosucio", "Risaralda", "Salamina", 
                "Samaná", "San José", "Supía", "Victoria", "Villamaría", "Viterbo",
                "UNAL Sede Manizales", "UNAL Sede Bogotá", "UNAL Sede Medellín", "UNAL Sede Tumaco"
            ]
        },
        {
            id: "0_5",
            label: "¿Desde qué año está vinculado/a al proyecto Aulas STEAM?",
            type: "number",
            required: true,
            min: 2015,
            max: 2026
        },
        {
            id: "0_6",
            label: "¿Ha visitado o trabajado directamente en al menos un Aula STEAM?",
            type: "binary",
            required: true
        }
    ],

    // MODULE A: Physical Infrastructure
    modA: [
        {
            id: "A_1",
            label: "¿Cómo califica las condiciones físicas actuales de las Aulas STEAM?",
            desc: "Tenga en cuenta aspectos como espacio de transito, ventilación, iluminación y accesibilidad.",
            type: "scale",
            max: 5,
            required: true
        },
        {
            id: "A_2",
            label: "¿Qué problemas de infraestructura ha identificado con mayor frecuencia?",
            type: "multiselect",
            options: [
                "Instalación eléctrica inestable o sin puesta a tierra",
                "Conectividad de red lenta o nula",
                "Ventilación inadecuada / exceso de calor",
                "Filtraciones o alta humedad relativa",
                "Aislamiento acústico insuficiente para la CNC",
                "Iluminación deficiente",
                "Espacio físico muy reducido",
                "Falta de rejas de seguridad o cerraduras seguras",
                "Falta de pintura o adecuación civil básica"
            ]
        },
        {
            id: "A_3",
            label: "¿Las instalaciones eléctricas y de red son suficientes para el uso simultáneo de todos los equipos?",
            desc: "Piense en conectar routers CNC, impresoras 3D y ordenadores a la vez.",
            type: "conditional-text",
            condTrigger: "No", // Se despliega si dice No o Parcialmente
            condLabel: "Especifique qué fallas eléctricas o limitaciones de red ha experimentado:",
            required: true
        },
        {
            id: "A_4",
            label: "¿Se han presentado situaciones de seguridad asociadas a la infraestructura?",
            desc: "Ej: hurtos, fallos eléctricos peligrosos, accidentes físicos. Descríbalas brevemente si aplica.",
            type: "text",
            required: false
        },
        {
            id: "A_5",
            label: "¿Qué mejoras de infraestructura considera prioritarias para la siguiente fase del proyecto?",
            type: "text",
            required: true
        }
    ],

    // MODULE B: ICT Equipment
    modB: [
        {
            id: "B_1",
            label: "¿Los equipos TIC disponibles (computadores, impresoras 3D, kits de robótica, VR) son suficientes para la demanda?",
            type: "scale",
            max: 5,
            required: true
        },
        {
            id: "B_2",
            label: "¿Con qué frecuencia se presentan fallas técnicas en los equipos?",
            type: "select",
            required: true,
            options: ["Diaria", "Semanal", "Mensual", "Rara vez", "Nunca"]
        },
        {
            id: "B_3",
            label: "¿Existe un protocolo de mantenimiento preventivo?",
            type: "select",
            required: true,
            options: ["Sí, y se cumple a cabalidad", "Sí, pero se cumple de forma parcial", "No existe o no se realiza", "No tengo conocimiento"]
        },
        {
            id: "B_4",
            label: "¿Qué equipos, kits tecnológicos o software considera que hacen falta o deberían actualizarse?",
            type: "text",
            required: true
        },
        {
            id: "B_5",
            label: "¿Los equipos actuales son compatibles con el software y las metodologías STEAM que se utilizan?",
            type: "scale",
            max: 5,
            required: true
        },
        {
            id: "B_6",
            label: "¿Se han presentado pérdidas, robos o daños irreparables de equipos en su sede?",
            desc: "De ser así, explique brevemente el caso y cómo se gestionó ante el inventario.",
            type: "text",
            required: false
        }
    ],

    // MODULE C: Furniture & Storage
    modC: [
        {
            id: "C_1",
            label: "¿El mobiliario actual (mesas de trabajo, almacenamiento, tableros móviles) favorece el trabajo colaborativo?",
            type: "scale",
            max: 5,
            required: true
        },
        {
            id: "C_2",
            label: "¿Se ha deteriorado, dañado o perdido mobiliario desde la instalación inicial?",
            type: "conditional-text",
            condTrigger: "Sí",
            condLabel: "Especifique qué mobiliario se ha deteriorado o perdido y las causas:",
            required: true
        },
        {
            id: "C_3",
            label: "¿Qué elementos de mobiliario o dotación de almacenamiento considera que deben reemplazarse o incorporarse?",
            type: "text",
            required: true
        },
        {
            id: "C_4",
            label: "¿El almacenamiento de los kits de robótica y herramientas manuales es adecuado y seguro?",
            type: "scale",
            max: 5,
            required: true
        }
    ],

    // MODULE D: Financial & Contractual Management
    modD: [
        {
            id: "D_1",
            label: "¿El modelo de financiación actual (recursos de la Estampilla) permite una ejecución oportuna de las metas?",
            type: "scale",
            max: 5,
            required: true
        },
        {
            id: "D_2",
            label: "¿Qué cuellos de botella financieros o de contratación pública ha identificado en fases anteriores?",
            type: "text",
            required: true
        },
        {
            id: "D_3",
            label: "¿Considera que el presupuesto asignado es suficiente para sostener y ampliar el proyecto en la siguiente vigencia?",
            type: "conditional-text",
            condTrigger: "No",
            condLabel: "Escriba su justificación o qué rubros adicionales se deben contemplar:",
            required: true
        },
        {
            id: "D_4",
            label: "¿Existen restricciones normativas de la Universidad Nacional como entidad pública que limiten la adquisición ágil de equipos o servicios?",
            desc: "Ej: trabas en importación de chips, demoras en licitaciones de kits.",
            type: "text",
            required: true
        },
        {
            id: "D_5",
            label: "¿Qué criterios deberían priorizarse en los futuros procesos de selección de proveedores tecnológicos?",
            type: "multiselect",
            options: [
                "Menor precio ofertado",
                "Calidad y robustez industrial del hardware",
                "Capacidad de soporte técnico y garantías in-situ",
                "Experiencia previa en el sector educativo público",
                "Disponibilidad de repuestos en el mercado nacional"
            ]
        },
        {
            id: "D_6",
            label: "¿Ha detectado inconsistencias o demoras severas entre los pliegos cotizados y lo entregado finalmente por los proveedores?",
            type: "conditional-text",
            condTrigger: "Sí",
            condLabel: "Describa detalladamente la inconsistencia detectada:",
            required: false
        }
    ],

    // MODULE E: Technical & Operational Aspects
    modE: [
        {
            id: "E_1",
            label: "¿Existe un manual operativo, protocolo de uso o reglamento del Aula STEAM?",
            type: "select",
            required: true,
            options: ["Sí, y se utiliza efectivamente", "Sí, pero los docentes no lo aplican", "No existe o está en construcción"]
        },
        {
            id: "E_2",
            label: "¿Cuántas horas semanales promedio está activo el Aula STEAM para clases directas con estudiantes?",
            type: "number",
            required: true,
            min: 0,
            max: 40
        },
        {
            id: "E_3",
            label: "¿Cuántos docentes de su institución se encuentran capacitados para operar el Aula de forma autónoma?",
            type: "number",
            required: true,
            min: 0,
            max: 100
        },
        {
            id: "E_4",
            label: "¿Qué brechas de capacitación técnica y soporte de hardware identifica en el equipo local?",
            type: "text",
            required: true
        },
        {
            id: "E_5",
            label: "¿El modelo de coordinación actual (coordinador municipal contratado por la UNAL) es sostenible?",
            desc: "Argumente los pros y contras observados en el territorio.",
            type: "text",
            required: true
        },
        {
            id: "E_6",
            label: "¿Cómo se realiza el seguimiento, inventario y reporte de uso diario del Aula? ¿Es suficiente?",
            type: "text",
            required: true
        },
        {
            id: "E_7",
            label: "¿Qué mejoras operativas implementaría para aumentar la tasa de uso efectivo del Aula por los estudiantes?",
            type: "text",
            required: true
        },
        {
            id: "E_8",
            label: "¿De qué manera implementaría el sostenimiento del aula STEAM para la adquisición de materiales consumibles?",
            desc: "Ej: filamentos 3D, componentes electrónicos, resinas, repuestos.",
            type: "text",
            required: true
        }
    ],

    // MODULE F: Functional & Pedagogical Integration
    modF: [
        {
            id: "F_1",
            label: "¿Las actividades prácticas del Aula STEAM están alineadas con la malla curricular de su institución?",
            type: "scale",
            max: 5,
            required: true
        },
        {
            id: "F_2",
            label: "¿Existe una planificación anual o trimestral de proyectos de aprendizaje basados en STEAM?",
            type: "select",
            required: true,
            options: ["Sí, consolidada en el PEI", "En proceso de estructuración", "No existe planificación, se usa de forma libre"]
        },
        {
            id: "F_3",
            label: "¿Qué áreas del conocimiento se integran con facilidad y cuáles presentan barreras pedagógicas?",
            desc: "Ej: Matemáticas y Ciencias vs. Lenguaje o Ciencias Sociales.",
            type: "text",
            required: true
        },
        {
            id: "F_4",
            label: "¿Se realiza un seguimiento estructurado al impacto en el aprendizaje y desarrollo de habilidades del estudiante?",
            desc: "Si es así, indique qué instrumentos o rúbricas de evaluación utilizan.",
            type: "text",
            required: true
        },
        {
            id: "F_5",
            label: "¿Cómo percibe la motivación y rendimiento académico de los estudiantes que hacen uso del Aula STEAM?",
            type: "text",
            required: true
        },
        {
            id: "F_6",
            label: "¿Qué tipo de contenidos formativos, guías didácticas o metodologías de co-diseño enriquecerían la experiencia?",
            type: "text",
            required: true
        }
    ],

    // MODULE G: Territoriality & Public Policy
    modG: [
        {
            id: "G_1",
            label: "¿El Aula STEAM ha generado beneficios visibles para la comunidad del municipio?",
            desc: "Ej: ferias de ciencia, desarrollo de prototipos para solucionar problemas locales de acueducto o agro.",
            type: "text",
            required: true
        },
        {
            id: "G_2",
            label: "¿El municipio ha podido aportar recursos propios (cofinanciación, infraestructura, fibra óptica, talento humano) para complementar el proyecto?",
            type: "conditional-text",
            condTrigger: "Sí",
            condLabel: "Especifique el monto o el tipo de aporte realizado por la administración municipal:",
            required: true
        },
        {
            id: "G_3",
            label: "¿Considera que los criterios de selección de municipios para nuevas Aulas STEAM son pertinentes?",
            desc: "¿Qué variables o indicadores territoriales sugeriría agregar o modificar?",
            type: "text",
            required: true
        },
        {
            id: "G_4",
            label: "¿Existe alguna política pública o acuerdo municipal que articule el Aula STEAM con planes de desarrollo educativo?",
            type: "select",
            required: true,
            options: ["Sí, acuerdo municipal vigente", "En proceso de formulación en el concejo", "No existe articulación formal"]
        },
        {
            id: "G_5",
            label: "¿Qué riesgos de sostenibilidad presupuestaria y operativa identifica una vez finalice la financiación por Estampilla?",
            type: "text",
            required: true
        }
    ],

    // MODULE H: Alliances & Cooperation
    modH: [
        {
            id: "H_1",
            label: "¿Cómo se ha articulado su organización (Luker / Universidad de Caldas / Comité) con el equipo ejecutor de la UNAL?",
            type: "text",
            required: true
        },
        {
            id: "H_2",
            label: "¿Qué aportes metodológicos o didácticos concretos ha hecho su alianza a la operación de las Aulas?",
            type: "text",
            required: true
        },
        {
            id: "H_3",
            label: "¿Qué oportunidades de mejora o cuellos de botella identifica en la estructura y gobernanza actual de la alianza?",
            type: "text",
            required: true
        },
        {
            id: "H_4",
            label: "(Exclusivo Luker/Uruguay) ¿Qué aprendizajes del Plan Ceibal de Uruguay son directamente aplicables a Caldas?",
            desc: "¿Cuáles definitivamente no son viables debido a las particularidades del contexto local?",
            type: "text",
            required: true
        },
        {
            id: "H_5",
            label: "¿Estaría dispuesta su organización a ampliar su participación en el co-diseño de la reestructuración?",
            desc: "De ser así, ¿bajo qué condiciones institucionales y de aporte técnico?",
            type: "text",
            required: true
        }
    ],

    // MODULE I: Providers / Suppliers
    modI: [
        {
            id: "I_1",
            label: "¿Los procesos contractuales y pliegos de licitación de la UNAL han sido claros, justos y ágiles?",
            type: "scale",
            max: 5,
            required: true
        },
        {
            id: "I_2",
            label: "¿Ha recibido fichas técnicas y requerimientos detallados para cotizar y fabricar/entregar de forma correcta?",
            type: "conditional-text",
            condTrigger: "No",
            condLabel: "Indique cuáles fueron las mayores deficiencias en las fichas técnicas provistas:",
            required: true
        },
        {
            id: "I_3",
            label: "¿Qué mejoras o especificaciones estándar sugeriría incluir en los pliegos para evitar compras deficientes o entregas tardías?",
            type: "text",
            required: true
        },
        {
            id: "I_4",
            label: "¿Qué plan de acción u oferta técnica tiene su organización para implementar un SLA (Acuerdo de Nivel de Servicio) de soporte postventa?",
            type: "text",
            required: true
        },
        {
            id: "I_5",
            label: "¿Qué nuevas tecnologías, kits de robótica pedagógicos o mobiliario ergonómico recomendaría incluir para la reestructuración?",
            type: "text",
            required: true
        }
    ],

    // MODULE J: Institutional Appropriation (Rectores, Coordinadores, Gobernacion, Alcaldias)
    modJ: [
        {
            id: "J_1",
            label: "¿El Aula STEAM está incluida formalmente en el PEI (Proyecto Educativo Institucional) o en los planes municipales?",
            type: "select",
            required: true,
            options: ["Sí, totalmente integrado", "En proceso de inclusión y reforma curricular", "No, opera como un espacio aislado"]
        },
        {
            id: "J_2",
            label: "¿Existe un rubro presupuestal propio asignado por la rectoría o alcaldía para el sostenimiento operativo del Aula?",
            type: "select",
            required: true,
            options: ["Sí, presupuesto anual recurrente", "Aportes parciales para contingencias", "Ninguno, dependencia absoluta de la UNAL"]
        },
        {
            id: "J_3",
            label: "¿Qué dependencia, área académica o persona asume la responsabilidad administrativa del Aula en el colegio?",
            type: "text",
            required: true
        },
        {
            id: "J_4",
            label: "¿Qué ocurriría con la operación y custodia del Aula STEAM si el soporte de la Universidad Nacional finalizara hoy?",
            type: "conditional-text",
            condTrigger: "Cierre parcial",
            condLabel: "Escriba qué acciones inmediatas requeriría para evitar el cierre operativo del aula:",
            required: true
        },
        {
            id: "J_5",
            label: "¿La institución o el municipio tiene capacidad técnica instalada propia para operar de forma 100% autónoma el Aula?",
            type: "scale",
            max: 5,
            required: true
        },
        {
            id: "J_6",
            label: "¿Cuáles son las mayores amenazas que ponen en riesgo la continuidad del Aula en su territorio?",
            type: "multiselect",
            options: [
                "Falta de presupuesto para filamentos e insumos",
                "Desinterés de los directivos docentes o relevo de alcaldes",
                "Traslado o rotación frecuente de docentes capacitados",
                "Cortes de energía eléctrica recurrentes o mala conectividad",
                "Obsolescencia tecnológica sin soporte de garantías",
                "Falta de seguridad física (riesgo de vandalismo o hurto)"
            ]
        }
    ],

    // MODULE K: Future Beneficiaries (Planned municipalities/schools)
    modK: [
        {
            id: "K_1_1",
            label: "¿Qué beneficios concretos espera que genere la llegada del Aula STEAM a su municipio o institución?",
            type: "text",
            required: true
        },
        {
            id: "K_1_2",
            label: "¿Qué temores, dudas o barreras iniciales identifica frente al proyecto de implementación?",
            type: "text",
            required: true
        },
        {
            id: "K_1_3",
            label: "¿Ha tenido la oportunidad de visitar un Aula STEAM activa? Si es así, ¿qué le llamó la atención positiva o negativamente?",
            type: "conditional-text",
            condTrigger: "Sí",
            condLabel: "Describa brevemente su percepción y aprendizajes de la visita:",
            required: false
        },
        {
            id: "K_2_1",
            label: "¿El espacio físico preseleccionado para el Aula cuenta con condiciones óptimas de energía, red, ventilación e iluminación?",
            type: "select",
            required: true,
            options: ["Sí, cumple a cabalidad", "Cumple parcialmente (requiere adecuación menor)", "No cumple (requiere reforma estructural civil)"]
        },
        {
            id: "K_2_2",
            label: "¿Cuántos docentes estarían disponibles y motivados para capacitarse y liderar las actividades del Aula?",
            type: "number",
            required: true,
            min: 0,
            max: 50
        },
        {
            id: "K_2_3",
            label: "¿Existe alguna experiencia o proyecto previo similar (robótica, clubes de ciencia, aulas de informática avanzadas)?",
            type: "text",
            required: false
        },
        {
            id: "K_3_1",
            label: "¿Qué adecuaciones físicas prioriza realizar en el espacio antes de recibir la dotación de equipos?",
            desc: "Considere cableados, tomas a tierra, rejas de seguridad, aire acondicionado.",
            type: "text",
            required: true
        },
        {
            id: "K_3_2",
            label: "¿Qué equipos o kits tecnológicos considera indispensables desde el primer día de operación?",
            type: "multiselect",
            options: [
                "Computadores portátiles con software de modelado",
                "Impresoras 3D con filamentos",
                "Router o cortadora CNC escolar",
                "Kits de robótica educativa y sensores electrónicos",
                "Gafas de Realidad Virtual / Inmersión",
                "Mesas modulares ergonómicas",
                "Estaciones de soldadura y herramientas manuales"
            ]
        },
        {
            id: "K_3_3",
            label: "¿Qué condiciones de custodia y seguridad física de los activos tecnológicos puede garantizar su institución?",
            type: "text",
            required: true
        },
        {
            id: "K_4_1",
            label: "¿Qué tipo de capacitación o áreas de formación docente consideran urgentes antes de iniciar la operación?",
            type: "multiselect",
            options: [
                "Modelado e impresión 3D",
                "Programación en Arduino / micro:bit",
                "Didáctica del Aprendizaje Basado en Proyectos (ABP)",
                "Diseño mecánico y corte en router CNC",
                "Metodologías activas de educación STEM"
            ]
        },
        {
            id: "K_4_2",
            label: "¿Con qué frecuencia esperaría recibir el acompañamiento presencial del coordinador técnico de la UNAL?",
            type: "select",
            required: true,
            options: ["Semanal", "Quincenal", "Mensual", "Únicamente ante fallas reportadas"]
        },
        {
            id: "K_5_1",
            label: "¿La alcaldía municipal o rectoría está dispuesta a firmar compromisos para cofinanciar el sostenimiento y consumibles?",
            type: "select",
            required: true,
            options: ["Sí, totalmente comprometidos", "Compromiso de cofinanciación parcial", "No contamos con recursos propios, requerimos apoyo al 100%"]
        },
        {
            id: "K_5_2",
            label: "¿Cómo articularía el Aula STEAM con el Plan de Desarrollo Municipal o el Proyecto Educativo Institucional (PEI)?",
            type: "text",
            required: true
        },
        {
            id: "K_5_3",
            label: "¿Estaría dispuesto/a a firmar un acta formal de corresponsabilidad con la Universidad Nacional frente a la dotación?",
            type: "select",
            required: true,
            options: ["Sí, de forma incondicional", "Sí, sujeta a revisión jurídica de la alcaldía/colegio", "No es viable jurídicamente"]
        },
        {
            id: "K_6_1",
            label: "¿Existe algún problema territorial local (ambiental, agrícola, de salud) que el Aula STEAM pueda ayudar a abordar con tecnología?",
            type: "text",
            required: true
        },
        {
            id: "K_6_2",
            label: "¿Qué aliados locales (empresas, cooperativas de café, universidades locales) podrían vincularse a la dinámica del aula?",
            type: "text",
            required: false
        },
        {
            id: "K_6_3",
            label: "¿Qué indicadores clave consideraría apropiados para medir el éxito del aula al cabo del primer año de funcionamiento?",
            type: "text",
            required: true
        }
    ],

    // SECTION 3: Future Vision - Common for all
    sec3: [
        {
            id: "V_1",
            label: "En una escala de 1 a 10, ¿cuál es su nivel de satisfacción general con el desarrollo del proyecto?",
            type: "satisfaction-scale",
            max: 10,
            required: true
        },
        {
            id: "V_2",
            label: "¿Cuáles considera que son los tres logros más importantes del proyecto hasta ahora?",
            type: "triple-text",
            placeholder: "Logro",
            required: true
        },
        {
            id: "V_3",
            label: "¿Cuáles son los tres cambios más urgentes que haría para la reestructuración del proyecto?",
            type: "triple-text",
            placeholder: "Cambio prioritario",
            required: true
        },
        {
            id: "V_4",
            label: "¿Hay algún aspecto clave del proyecto que no haya sido contemplado en esta encuesta y que considere relevante?",
            type: "text",
            required: false
        },
        {
            id: "V_6",
            label: "Si solo pudiera priorizar tres inversiones prioritarias para la siguiente fase del proyecto, ¿cuáles seleccionaría?",
            type: "multiselect",
            maxSelections: 3,
            options: [
                "Infraestructura física (Aulas y adecuaciones civiles)",
                "Conectividad a internet dedicada y de alta velocidad",
                "Capacitación pedagógica y técnica docente",
                "Equipos de cómputo y servidores locales",
                "Impresoras 3D y filamentos consumibles",
                "Kits de robótica educativa y microcontroladores",
                "Plan de mantenimiento preventivo y repuestos",
                "Talento humano de soporte (Coordinadores locales)",
                "Diseño y desarrollo de contenidos pedagógicos",
                "Plataformas de Inteligencia Artificial aplicadas",
                "Estaciones de Realidad Virtual y Aumentada",
                "Aulas STEAM móviles (Makerspaces móviles)"
            ]
        },
        {
            id: "V_5",
            label: "¿Estaría disponible para participar en una entrevista complementaria de ingeniería de detalle con la UNAL?",
            type: "conditional-text",
            condTrigger: "Sí",
            condLabel: "Escriba su número telefónico de contacto o correo electrónico directo:",
            required: true
        }
    ]
};

// Actor-to-module mapping table as defined in Section 5 of Borrador
const actorModuleMapping = {
    "gob": {
        title: "Gobernación / Secretaría de Educación de Caldas",
        badgeColor: "var(--color-gob-teal)",
        modules: ["sec0", "modA", "modB", "modC", "modD", "modG", "modJ", "sec3"]
    },
    "alc_m": {
        title: "Alcaldía y Secretaría de Manizales",
        badgeColor: "var(--color-gob-teal)",
        modules: ["sec0", "modA", "modB", "modC", "modD", "modG", "modJ", "sec3"]
    },
    "alc_mun": {
        title: "Alcalde de Municipio de Caldas",
        badgeColor: "var(--color-unal-gold)",
        modules: ["sec0", "modA_partial", "modG", "modJ", "sec3"]
    },
    "rect": {
        title: "Rector de I.E. Pública con Aula STEAM",
        badgeColor: "var(--color-primary)",
        modules: ["sec0", "modA", "modB", "modC", "modE", "modF", "modJ", "sec3"]
    },
    "prof": {
        title: "Docente de I.E. con Aula STEAM",
        badgeColor: "var(--color-primary)",
        modules: ["sec0", "modB", "modC", "modF", "sec3"]
    },
    "coord": {
        title: "Coordinador de Aula STEAM Caldas/Manizales",
        badgeColor: "var(--color-primary-dark)",
        modules: ["sec0", "modA", "modB", "modC", "modE", "modF", "modJ", "sec3"]
    },
    "direct_unal": {
        title: "Directivo UNAL (Vicerrector / DIMA / Financiero / Contratación)",
        badgeColor: "var(--color-unal-gold)",
        modules: ["sec0", "modA_partial", "modD", "modE", "sec3"]
    },
    "stem_unal": {
        title: "Equipo del Aula STEM - Universidad Nacional",
        badgeColor: "var(--color-stem-purple)",
        modules: ["sec0", "modA", "modB", "modC", "modD", "modE", "modF", "sec3"]
    },
    "aliado": {
        title: "Aliado Académico / Estratégico (U. de Caldas / Fundación Luker)",
        badgeColor: "var(--color-aliados-orange)",
        modules: ["sec0", "modH", "sec3"]
    },
    "prov": {
        title: "Proveedor de Equipos, Mobiliario o Kits",
        badgeColor: "var(--color-text-muted)",
        modules: ["sec0", "modI", "sec3"]
    },
    "benef_futuro": {
        title: "Futuro Beneficiario (Alcalde o Rector proyectado)",
        badgeColor: "var(--color-primary-light)",
        modules: ["sec0", "modK", "sec3"]
    }
};

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
    
    // Determine the questions to show (handling partial modA)
    let questionsToShow = [];
    if (currentModuleKey === "modA_partial") {
        sectionTitleElement.textContent = "Infraestructura Física (Revisión Crítica)";
        // Only show A.1 (scale) and A.5 (text) for directivos / alcaldes
        questionsToShow = questionDatabase.modA.filter(q => q.id === "A_1" || q.id === "A_5");
    } else {
        questionsToShow = questionDatabase[currentModuleKey] || [];
        setSectionTitle(currentModuleKey);
    }
    
    // Render each question
    questionsToShow.forEach(q => {
        const group = document.createElement("div");
        group.className = "question-group";
        group.setAttribute("data-q-id", q.id);
        
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
}

function setSectionTitle(moduleKey) {
    switch (moduleKey) {
        case "sec0":
            sectionTitleElement.textContent = "Sección 0: Identificación del encuestado";
            break;
        case "modA":
            sectionTitleElement.textContent = "Módulo A: Infraestructura Física";
            break;
        case "modB":
            sectionTitleElement.textContent = "Módulo B: Equipos Tecnológicos (TIC)";
            break;
        case "modC":
            sectionTitleElement.textContent = "Módulo C: Mobiliario y Dotación";
            break;
        case "modD":
            sectionTitleElement.textContent = "Módulo D: Gestión Financiera y Contractual";
            break;
        case "modE":
            sectionTitleElement.textContent = "Módulo E: Aspectos Técnicos y Operacionales";
            break;
        case "modF":
            sectionTitleElement.textContent = "Módulo F: Aspectos Funcionales y Pedagógicos";
            break;
        case "modG":
            sectionTitleElement.textContent = "Módulo G: Territorialidad y Política Pública";
            break;
        case "modH":
            sectionTitleElement.textContent = "Módulo H: Alianzas y Cooperación";
            break;
        case "modI":
            sectionTitleElement.textContent = "Módulo I: Proveedores";
            break;
        case "modJ":
            sectionTitleElement.textContent = "Módulo J: Apropiación y Sostenibilidad";
            break;
        case "modK":
            sectionTitleElement.textContent = "Módulo K: Formulación Nuevos Beneficiarios";
            break;
        case "sec3":
            sectionTitleElement.textContent = "Sección 3: Visión de Futuro del Proyecto";
            break;
        default:
            sectionTitleElement.textContent = "Módulo del Formulario";
    }
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
        if (q.id === "0_4" && currentActorKey === "gob") {
            optionsToRender = q.options.filter(opt => !opt.startsWith("UNAL"));
        }
        
        optionsToRender.forEach(opt => {
            const o = document.createElement("option");
            o.value = opt;
            o.textContent = opt;
            if (savedVal === opt) o.selected = true;
            select.appendChild(o);
        });
        container.appendChild(select);
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
            
            const check = document.createElement("input");
            check.type = "checkbox";
            check.name = q.id;
            check.id = `${q.id}_${idx}`;
            check.value = opt;
            if (savedVal && savedVal.includes(opt)) check.checked = true;
            
            const lbl = document.createElement("label");
            lbl.htmlFor = `${q.id}_${idx}`;
            lbl.textContent = opt;
            
            chip.appendChild(check);
            chip.appendChild(lbl);
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

function navigateNext() {
    if (validateCurrentStep()) {
        saveCurrentAnswers();
        
        if (currentStepIndex < activeModuleList.length - 1) {
            currentStepIndex++;
            renderStep();
        } else {
            submitForm();
        }
    }
}

// Validate current step questions
function validateCurrentStep() {
    const currentModuleKey = activeModuleList[currentStepIndex];
    let questions = [];
    if (currentModuleKey === "modA_partial") {
        questions = questionDatabase.modA.filter(q => q.id === "A_1" || q.id === "A_5");
    } else {
        questions = questionDatabase[currentModuleKey] || [];
    }

    for (const q of questions) {
        if (!q.required) continue;

        if (q.type === "text" || q.type === "number" || q.type === "select") {
            const element = dynamicFormContainer.querySelector(`[name="${q.id}"]`);
            if (!element || !element.value.trim()) {
                alert(`Por favor complete el campo requerido: "${q.label}"`);
                if (element) element.focus();
                return false;
            }
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
    let questions = [];
    if (currentModuleKey === "modA_partial") {
        questions = questionDatabase.modA.filter(q => q.id === "A_1" || q.id === "A_5");
    } else {
        questions = questionDatabase[currentModuleKey] || [];
    }

    questions.forEach(q => {
        if (q.type === "text" || q.type === "number" || q.type === "select") {
            const val = dynamicFormContainer.querySelector(`[name="${q.id}"]`)?.value;
            answers[q.id] = val;
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
            checkedBoxes.forEach(cb => selectedList.push(cb.value));
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
            const questionLabel = qId === "V_2" 
                ? "¿Cuáles considera que son los tres logros más importantes del proyecto hasta ahora?"
                : "¿Cuáles son los tres cambios más urgentes que haría para la reestructuración del proyecto?";
            
            for (let i = 1; i <= 3; i++) {
                const val = value[i-1] || "";
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
            respuestasLegibles[label] = value;
        }
    }
    
    // Si la URL no está configurada, procedemos solo de forma offline / local
    if (!googleSheetsWebAppUrl || googleSheetsWebAppUrl.trim() === "") {
        console.warn("googleSheetsWebAppUrl no está configurada. Las respuestas se guardaron localmente.");
        progressText.textContent = `¡Completado (Local)! (100%)`;
        screenForm.classList.remove("active");
        screenSuccess.classList.add("active");
        renderResponsePreview();
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
    })
    .catch(error => {
        console.error("Error al enviar respuestas a Google Sheets:", error);
        alert("Hubo un error de conexión al enviar al Excel en la nube. Tus respuestas se han guardado de forma local.");
        progressText.textContent = `¡Completado localmente con errores de red! (100%)`;
        screenForm.classList.remove("active");
        screenSuccess.classList.add("active");
        renderResponsePreview();
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
