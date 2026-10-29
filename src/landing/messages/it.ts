import type { Messages } from "./types.ts"

export default {
 experienceSections: ["Il lavoro avviene nei tuoi strumenti.", "Il lavoro continua fuori dalla chat.", "Condividi il tuo modo di lavorare.", "Un ruolo e un metodo condivisi", "I tuoi account e dati"],
 diagram: {"verify": "Verificare la provenienza e identificare il mittente", "return": "Inviare i risultati alla discussione originale", "parallel": "Le attività vengono eseguite separatamente e restituiscono risultati a questa chat", "resume": "Riconnettersi e riprendere dall’ultimo evento ricevuto", "message": "Invia messaggio", "work": "Esegui attività", "reply": "Ricevi risposta", "appFlow": ["Trova servizio", "Leggi la connessione", "Usa strumenti e viste"]},
	linkLabels: {"deploy": "Guida alla distribuzione", "apps": "Specifica per pubblicare App", "channels": "Guida all’integrazione dei canali", "delegation": "Guida alla delega delle attività", "chats": "Guida a chat e flussi di eventi", "models": "Estendere i backend dei modelli", "source": "Codice sorgente"},
	developerSections: ["Pubblica una capacità.", "Raggiungi le persone dove lavorano.", "Lascia proseguire i lavori lunghi.", "Esegui sulla tua infrastruttura."],
	applications: [
	  {
	    "title": "Assistenza clienti",
	    "task": "Gestisci i ticket di oggi in Slack con la mia App di supporto e assegna le urgenze.",
	    "steps": [
	      "Leggere 12 ticket e identificare 3 urgenze.",
	      "Assegnare le urgenze agli sviluppatori e aggiornare i ticket."
	    ],
	    "outcome": "Responsabili e prossimi passi pubblicati nel thread originale di #support."
	  },
	  {
	    "title": "Gestione negozio",
	    "task": "Rifornisci SKU-203 con le mie App di magazzino e acquisti e avvisa il gruppo Lark.",
	    "steps": [
	      "Verificare scorte e tempi: mancano 12 pezzi prima della consegna.",
	      "Creare l’ordine urgente PO-203 di 12 pezzi nell’App acquisti."
	    ],
	    "outcome": "Ordine registrato e riferimento pubblicato in Lark per il seguito."
	  },
	  {
	    "title": "Assistente docente condiviso",
	    "task": "Condividi il mio Bot per le lezioni con un’altra docente, per i suoi materiali e account.",
	    "steps": [
	      "Mantenere ruolo docente e istruzioni del Bot.",
	      "Creare un invito email per teacher@example.com."
	    ],
	    "outcome": "Accettando ottiene un Bot collegato nella propria organizzazione e usa le proprie App. I Chat restano separati."
	  },
	  {
	    "title": "Viaggio in famiglia",
	    "task": "Usa preferenze ricordate e prenotazioni per organizzare Roma nel calendario e inviare tutto su Telegram.",
	    "steps": [
	      "Recuperare ritmo lento e pause; leggere le prenotazioni confermate.",
	      "Inserire tre giorni con pause tramite l’App calendario collegata."
	    ],
	    "outcome": "Calendario aggiornato e itinerario nel Chat Telegram, dove può essere modificato."
	  },
	  {
	    "title": "Coordinamento trasloco",
	    "task": "Organizza il trasloco della prossima settimana e ricorda le tappe su Telegram nel mio fuso.",
	    "steps": [
	      "Creare attività per utenze, scatole e chiavi.",
	      "Impostare attivazioni singole a 7 giorni, 3 giorni e il giorno del trasloco."
	    ],
	    "outcome": "Tre promemoria pianificati; ciascuno avvia l’attività e aggiorna Telegram."
	  },
	  {
	    "title": "Seguito commerciale",
	    "task": "Segui OPP-204 dopo la riunione usando le mie App CRM e calendario.",
	    "steps": [
	      "Leggere note e stato dell’opportunità.",
	      "Aggiornare la prossima azione nel CRM e fissare l’incontro successivo."
	    ],
	    "outcome": "OPP-204 ha azione e data; l’email cliente è inviata tramite l’App di posta collegata."
	  },
	  {
	    "title": "Preparazione rilascio",
	    "task": "Affida i test API e UI a due Bots sul Computer di test e riporta qui i risultati.",
	    "steps": [
	      "Delegare due attività mentre questo Chat rimane disponibile.",
	      "Eseguire i test sul Computer e raccogliere risultati e file."
	    ],
	    "outcome": "Entrambe concluse: 28 test superati, 2 file modificati. La versione è pronta da esaminare."
	  }
	],
	demo: {
		"send": "Invia",
	  "label": "Demo interattiva",
	  "task": "Esamina 12 ticket, prepara un rapporto e invialo al team.",
	  "read": "12 ticket letti",
	  "grouped": "Raggruppati in 3 temi",
	  "report": "Rapporto di assistenza",

	  "sent": "Email inviata",
	  "reset": "Ripeti",
	  "download": "Scarica rapporto",
	  "categories": [
	    "Accesso",
	    "Fatturazione",
	    "Esportazione"
	  ]
	},
	product: {
		online: "Esperienza online",
		progress: "Segui il lavoro",
		results: "Ricevi il risultato",

	  "title": "Dall’idea all’azione.",
	  "ui": "Dall’idea all’azione.",
	  "core": "Agenti al lavoro.",
	  "developers": "Sviluppatori",
	  "soon": "In arrivo"
	},
	description:
		"Una piattaforma di Bot senza interfaccia, pensata prima di tutto per l’API.",
	nav: {
		label: "Sito",
		docs: "Docs",
		api: "API",
		language: "Lingua",
	},
	hero: {
		title: ["I tuoi agenti.", "Le tue regole."],
		body: "OpenBot è una piattaforma di Bot open source senza interfaccia utente. Dai il lavoro a un Bot tramite HTTP.",
		quickStart: "Inizio rapido",
		apiReference: "Riferimento API",
		visual: "Avvia un Turn",
		prompt: "Organizza tre giorni a Roma.",
	},
	scenarios: {
		title: "Cosa costruirai?",
		label: "Client",
		script: {
			label: "Uno script",
			prompt: "Ogni mattina leggi i nuovi ticket di assistenza e ordinali.",
			meaning:
				"Chiama un endpoint da un job cron. Leggi la risposta come JSON.",
		},
		service: {
			label: "Un servizio",
			prompt:
				"Controlla ogni nuovo ordine e segnala quelli che sembrano sbagliati.",
			meaning:
				"Il tuo server avvia un Turn. Poi legge uno stream o aspetta con il long polling.",
		},
		bot: {
			label: "Un chatbot",
			prompt:
				"Rispondi alle domande nella chat del team. Chiedimelo prima di inviare un’email.",
			meaning:
				"Le chiamate a strumenti rischiose aspettano finché una persona non dice sì.",
		},
	},
	contract: {
		visual: "Un solo contratto",
		title: [
			"Ogni funzione è una chiamata HTTP.",
			"Un solo contratto tipizzato.",
		],
		body: "Il server, il client TypeScript e il riferimento API nascono tutti da un solo contratto. Usa una chiave API da qualsiasi programma.",
	},
	features: {
		title: ["Usa il tuo client.", "Il controllo resta alle persone."],
		items: [
			{
				title: "Una chat con ogni Bot",
				text: "Hai una chat con ogni Bot. Il Bot risponde sempre subito, e il lavoro lungo va avanti in parallelo.",
			},
			{
				title: "Approvazioni",
				text: "Le chiamate a strumenti rischiose aspettano finché una persona non dice sì. Ogni risposta conserva la sua cronologia.",
			},
			{
				title: "App aperte",
				text: "I Bot trovano e usano App che gli editori mettono sul web aperto con l’OpenBot App Protocol.",
			},
			{
				title: "I tuoi modelli",
				text: "Usa OpenAI, Anthropic o qualsiasi server compatibile con Chat Completions.",
			},
		],
	},
	closing: {
		title: ["Inizia in", "tre passi."],
		label: "Passi",
		steps: [
			{
				title: "Avvia il server",
				text: "Esegui OpenBot sul tuo computer con Docker e devenv. Include un account di prova e modelli di prova.",
			},
			{
				title: "Crea una chiave API",
				text: "Accedi una volta nel browser, crea una chiave e chiama l’API da qualsiasi programma.",
			},
			{
				title: "Avvia un Turn",
				text: "Invia il lavoro in linguaggio semplice. Leggi la risposta, le chiamate agli strumenti e la cronologia.",
			},
		],
	},
	license: {
		tagline: "Aperto per natura.",
		label: "Licenza",
		body: "OpenBot è software libero con licenza AGPL-3.0-only. Puoi leggere il codice, modificarlo ed eseguirlo sui tuoi server.",
		link: "Leggi il codice",
	},
} satisfies Messages
