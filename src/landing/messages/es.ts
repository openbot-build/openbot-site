import type { Messages } from "./types.ts"

export default {
 experienceSections: ["El trabajo ocurre en tus herramientas.", "El trabajo continúa fuera del chat.", "Comparte tu forma de trabajar.", "Un rol y método compartidos", "Tus propias cuentas y datos"],
 diagram: {"verify": "Verificar el origen e identificar al remitente", "return": "Enviar resultados al hilo original", "parallel": "Las tareas se ejecutan por separado y devuelven resultados a este chat", "resume": "Reconectar y continuar desde el último evento recibido", "message": "Enviar mensaje", "work": "Procesar tarea", "reply": "Recibir respuesta", "appFlow": ["Encontrar servicio", "Leer la conexión", "Usar herramientas y vistas"]},
	linkLabels: {"deploy": "Guía de despliegue", "apps": "Especificación para publicar Apps", "channels": "Guía de integración de canales", "delegation": "Guía de delegación de tareas", "chats": "Guía de chats y flujos de eventos", "models": "Ampliar los backends de modelos", "source": "Código fuente"},
	developerSections: ["Publica una capacidad.", "Conecta donde trabaja la gente.", "Deja que las tareas largas continúen.", "Ejecuta en tu infraestructura."],
	applications: [
	  {
	    "title": "Atención al cliente",
	    "task": "Gestiona los tickets de hoy en Slack con mi App de soporte conectada y asigna los urgentes.",
	    "steps": [
	      "Leer 12 tickets y detectar 3 urgencias.",
	      "Asignar los urgentes a ingeniería y actualizar los registros."
	    ],
	    "outcome": "Responsables y próximos pasos publicados en el hilo original de #support."
	  },
	  {
	    "title": "Operaciones de tienda",
	    "task": "Repón SKU-203 con mis Apps de inventario y compras, y avisa al grupo de compras de Lark.",
	    "steps": [
	      "Revisar stock y plazo: faltan 12 unidades antes de la entrega.",
	      "Crear el pedido urgente PO-203 de 12 unidades en la App de compras."
	    ],
	    "outcome": "Pedido registrado y referencia enviada a Lark para continuar el seguimiento."
	  },
	  {
	    "title": "Asistente docente compartido",
	    "task": "Comparte mi Bot de preparación de clases con otra docente para sus propios materiales y cuentas.",
	    "steps": [
	      "Mantener el rol docente y las instrucciones del Bot.",
	      "Crear invitación por email para teacher@example.com."
	    ],
	    "outcome": "Al aceptar obtiene un Bot vinculado y usa sus Apps. Nuestros Chats siguen separados."
	  },
	  {
	    "title": "Viaje familiar",
	    "task": "Usa nuestras preferencias guardadas y reservas para organizar Roma en mi calendario y enviarlo a Telegram.",
	    "steps": [
	      "Recuperar el ritmo tranquilo y las pausas; leer las reservas confirmadas.",
	      "Añadir tres días con descansos mediante la App de calendario conectada."
	    ],
	    "outcome": "Calendario actualizado; el itinerario llega al chat de Telegram para ajustarlo allí."
	  },
	  {
	    "title": "Coordinación de mudanza",
	    "task": "Organiza mi mudanza de la próxima semana y recuérdame cada etapa en Telegram, en mi zona horaria.",
	    "steps": [
	      "Crear tareas de suministros, embalaje y entrega de llaves.",
	      "Programar activadores únicos a 7 días, 3 días y el día de la mudanza."
	    ],
	    "outcome": "Tres recordatorios programados; cada activador inicia su tarea y vuelve a Telegram."
	  },
	  {
	    "title": "Seguimiento comercial",
	    "task": "Da seguimiento a OPP-204 tras la reunión mediante mis Apps CRM y calendario.",
	    "steps": [
	      "Leer las notas y el estado actual de la oportunidad.",
	      "Actualizar el siguiente paso del CRM y agendar la reunión de seguimiento."
	    ],
	    "outcome": "OPP-204 tiene acción y fecha; el email al cliente sale por la App de correo conectada."
	  },
	  {
	    "title": "Preparación de lanzamiento",
	    "task": "Encarga pruebas API y UI a dos Bots en el Computer de pruebas y trae los resultados aquí.",
	    "steps": [
	      "Delegar dos tareas mientras este Chat sigue disponible.",
	      "Ejecutar pruebas en el Computer y reunir resultados y archivos."
	    ],
	    "outcome": "Ambas tareas regresaron: 28 pruebas superadas, 2 archivos cambiados. La versión está lista para revisión."
	  }
	],
	demo: {
		"send": "Enviar",
	  "label": "Demo interactiva",
	  "task": "Revisa 12 tickets, prepara un informe y envíalo al equipo.",
	  "read": "12 tickets leídos",
	  "grouped": "Agrupados en 3 temas",
	  "report": "Informe de soporte",

	  "sent": "Correo enviado",
	  "reset": "Repetir",
	  "download": "Descargar informe",
	  "categories": [
	    "Acceso",
	    "Facturación",
	    "Exportación"
	  ]
	},
	product: {
		online: "Experiencia en línea",
		progress: "Sigue el progreso",
		results: "Recibe el resultado",

	  "title": "De la idea a la acción.",
	  "ui": "De la idea a la acción.",
	  "core": "Agentes que trabajan.",
	  "developers": "Desarrolladores",
	  "soon": "Próximamente"
	},
	description:
		"Una plataforma de Bots sin interfaz y pensada primero para la API.",
	nav: {
		label: "Sitio",
		docs: "Docs",
		api: "API",
		language: "Idioma",
	},
	hero: {
		title: ["Tus agentes.", "Tus reglas."],
		body: "OpenBot es una plataforma de Bots de código abierto sin interfaz de usuario. Le das trabajo a un Bot por HTTP.",
		quickStart: "Inicio rápido",
		apiReference: "Referencia de la API",
		visual: "Inicia un Turn",
		prompt: "Planea tres días en Roma.",
	},
	scenarios: {
		title: "¿Qué vas a crear?",
		label: "Clientes",
		script: {
			label: "Un script",
			prompt: "Cada mañana, lee los tickets de soporte nuevos y ordénalos.",
			meaning:
				"Llama a un endpoint desde una tarea cron. Lee la respuesta como JSON.",
		},
		service: {
			label: "Un servicio",
			prompt: "Revisa cada pedido nuevo y marca los que parezcan incorrectos.",
			meaning:
				"Tu servidor inicia un Turn. Luego lee un stream o espera con long polling.",
		},
		bot: {
			label: "Un chatbot",
			prompt:
				"Responde preguntas en el chat del equipo. Pregúntame antes de enviar un correo.",
			meaning:
				"Las llamadas a herramientas con riesgo esperan hasta que una persona dice que sí.",
		},
	},
	contract: {
		visual: "Un contrato",
		title: ["Cada función es una llamada HTTP.", "Un contrato con tipos."],
		body: "El servidor, el cliente de TypeScript y la referencia de la API salen de un solo contrato. Usa una clave de API desde cualquier programa.",
	},
	features: {
		title: ["Usa tu propio cliente.", "Las personas tienen el control."],
		items: [
			{
				title: "Un chat con cada Bot",
				text: "Tienes un chat con cada Bot. El Bot siempre responde enseguida, y el trabajo largo corre en paralelo.",
			},
			{
				title: "Aprobaciones",
				text: "Las llamadas a herramientas con riesgo esperan hasta que una persona dice que sí. Cada respuesta guarda su historial.",
			},
			{
				title: "Apps abiertas",
				text: "Los Bots encuentran y usan Apps que los editores publican en la web abierta con el OpenBot App Protocol.",
			},
			{
				title: "Tus modelos",
				text: "Usa OpenAI, Anthropic o cualquier servidor compatible con Chat Completions.",
			},
		],
	},
	closing: {
		title: ["Empieza en", "tres pasos."],
		label: "Pasos",
		steps: [
			{
				title: "Inicia el servidor",
				text: "Ejecuta OpenBot en tu computadora con Docker y devenv. Incluye una cuenta de prueba y modelos de prueba.",
			},
			{
				title: "Crea una clave de API",
				text: "Inicia sesión una vez en el navegador, crea una clave y llama a la API desde cualquier programa.",
			},
			{
				title: "Inicia un Turn",
				text: "Envía trabajo en lenguaje sencillo. Lee la respuesta, las llamadas a herramientas y el historial.",
			},
		],
	},
	license: {
		tagline: "Abierto por diseño.",
		label: "Licencia",
		body: "OpenBot es software libre bajo AGPL-3.0-only. Puedes leer el código, cambiarlo y ejecutarlo en tus propios servidores.",
		link: "Lee el código",
	},
} satisfies Messages
