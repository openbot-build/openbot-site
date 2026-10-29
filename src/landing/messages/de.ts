import type { Messages } from "./types.ts"

export default {
 experienceSections: ["Die Arbeit geschieht in deinen Werkzeugen.", "Die Arbeit geht außerhalb des Chats weiter.", "Teile deine Arbeitsweise.", "Eine gemeinsame Rolle und Methode", "Eigene Konten und Daten"],
 diagram: {"verify": "Quelle prüfen und Absender zuordnen", "return": "Ergebnisse im ursprünglichen Thread senden", "parallel": "Aufgaben laufen unabhängig und liefern Ergebnisse an diesen Chat", "resume": "Nach dem Verbinden ab dem letzten empfangenen Ereignis fortsetzen", "message": "Nachricht senden", "work": "Aufgabe ausführen", "reply": "Antwort erhalten", "appFlow": ["Dienst finden", "Verbindungsdaten lesen", "Werkzeuge und Ansichten nutzen"]},
	linkLabels: {"deploy": "Bereitstellungsanleitung", "apps": "Spezifikation zur App-Veröffentlichung", "channels": "Anleitung zur Kanalintegration", "delegation": "Anleitung zur Aufgabendelegation", "chats": "Anleitung zu Chats und Ereignisströmen", "models": "Modell-Backends erweitern", "source": "Quellcode"},
	developerSections: ["Dienste zu Fähigkeiten machen.", "Dort sein, wo Menschen arbeiten.", "Lange Aufgaben weiterlaufen lassen.", "Auf eigener Infrastruktur betreiben."],
	applications: [
	  {
	    "title": "Kundenservice",
	    "task": "Bearbeite heutige Tickets in Slack über meine verbundene Support-App und leite dringende Fälle weiter.",
	    "steps": [
	      "12 Tickets gelesen, 3 dringende Fälle erkannt.",
	      "Dringende Fälle der Entwicklung zuweisen und Ticketdaten aktualisieren."
	    ],
	    "outcome": "Zuständige und nächste Schritte stehen im ursprünglichen #support-Thread."
	  },
	  {
	    "title": "Filialbetrieb",
	    "task": "Fülle SKU-203 über meine Lager- und Einkaufs-Apps nach und informiere die Lark-Einkaufsgruppe.",
	    "steps": [
	      "Bestand und Lieferzeit prüfen: 12 Stück fehlen vor Lieferung.",
	      "Expressbestellung PO-203 über 12 Stück in der Einkaufs-App erstellen."
	    ],
	    "outcome": "Die Bestellung ist erfasst; ihre Nummer steht zur Nachverfolgung in Lark."
	  },
	  {
	    "title": "Geteilter Lehrassistent",
	    "task": "Teile meinen Unterrichts-Bot mit einer Lehrkraft für deren eigene Materialien und Konten.",
	    "steps": [
	      "Lehrrolle und Anweisungen des Bots beibehalten.",
	      "E-Mail-Einladung für teacher@example.com erstellen."
	    ],
	    "outcome": "Nach Annahme nutzt die Lehrkraft den verknüpften Bot mit eigenen Apps. Unsere Chats bleiben getrennt."
	  },
	  {
	    "title": "Familienreise",
	    "task": "Plane Rom anhand gespeicherter Vorlieben und Buchungen in meinem Kalender und sende es an Telegram.",
	    "steps": [
	      "Ruhiges Tempo und Nachmittagspausen berücksichtigen; Buchungen lesen.",
	      "Drei Tage mit Pausen über die verbundene Kalender-App eintragen."
	    ],
	    "outcome": "Kalender aktualisiert; die Reise steht im Telegram-Chat und kann dort angepasst werden."
	  },
	  {
	    "title": "Umzugsbegleitung",
	    "task": "Organisiere meinen Umzug nächste Woche und erinnere mich über Telegram in meiner Zeitzone.",
	    "steps": [
	      "Aufgaben für Versorger, Packen und Schlüsselübergabe anlegen.",
	      "Einmalige Trigger für 7 Tage vorher, 3 Tage vorher und den Umzugstag setzen."
	    ],
	    "outcome": "Drei Erinnerungen sind geplant; jeder Trigger startet die Aufgabe und meldet sich über Telegram."
	  },
	  {
	    "title": "Vertrieb nachfassen",
	    "task": "Verfolge OPP-204 nach dem Gespräch über meine CRM- und Kalender-Apps weiter.",
	    "steps": [
	      "Gesprächsnotizen und aktuellen Geschäftsvorgang lesen.",
	      "Nächsten Schritt im CRM aktualisieren und Folgetermin eintragen."
	    ],
	    "outcome": "OPP-204 hat nächste Aktion und Termin; die Kundenmail wurde über die verbundene Mail-App gesendet."
	  },
	  {
	    "title": "Release vorbereiten",
	    "task": "Gib API- und UI-Prüfungen an zwei Bots. Nutze den Test-Computer und bringe Ergebnisse hierher.",
	    "steps": [
	      "API-Tests und UI-Prüfungen getrennt delegieren; dieser Chat bleibt nutzbar.",
	      "Prüfungen auf dem Computer ausführen und beide Ergebnisse sammeln."
	    ],
	    "outcome": "Beide Aufgaben sind zurück: 28 Tests bestanden, 2 Dateien geändert. Der Kandidat ist zur Prüfung bereit."
	  }
	],
	demo: {
		"send": "Senden",
	  "label": "Interaktive Demo",
	  "task": "Prüfe 12 Supportanfragen, erstelle einen Bericht und maile ihn dem Team.",
	  "read": "12 Anfragen gelesen",
	  "grouped": "In 3 Themen gruppiert",
	  "report": "Supportbericht",

	  "sent": "E-Mail gesendet",
	  "reset": "Wiederholen",
	  "download": "Bericht herunterladen",
	  "categories": [
	    "Anmeldung",
	    "Abrechnung",
	    "Export"
	  ]
	},
	product: {
		online: "Online-Erlebnis",
		progress: "Verfolge die Arbeit",
		results: "Erhalte das Ergebnis",

	  "title": "Von der Idee zur Tat.",
	  "ui": "Von der Idee zur Tat.",
	  "core": "Agenten, die arbeiten.",
	  "developers": "Für Entwickler",
	  "soon": "Demnächst"
	},
	description:
		"Eine Bot-Plattform ohne Oberfläche, mit der API an erster Stelle.",
	nav: {
		label: "Website",
		docs: "Doku",
		api: "API",
		language: "Sprache",
	},
	hero: {
		title: ["Deine Agenten.", "Deine Regeln."],
		body: "OpenBot ist eine Open-Source-Plattform für Bots ohne Benutzeroberfläche. Du gibst einem Bot Arbeit über HTTP.",
		quickStart: "Schnellstart",
		apiReference: "API-Referenz",
		visual: "Einen Turn starten",
		prompt: "Plane drei Tage in Rom.",
	},
	scenarios: {
		title: "Was baust du?",
		label: "Clients",
		script: {
			label: "Ein Skript",
			prompt: "Lies jeden Morgen die neuen Support-Tickets und sortiere sie.",
			meaning:
				"Rufe einen Endpoint aus einem cron-Job auf. Lies die Antwort als JSON.",
		},
		service: {
			label: "Ein Dienst",
			prompt:
				"Prüfe jede neue Bestellung und markiere die, die falsch aussehen.",
			meaning:
				"Dein Server startet einen Turn. Dann liest er einen Stream oder wartet per Long Polling.",
		},
		bot: {
			label: "Ein Chatbot",
			prompt:
				"Beantworte Fragen in unserem Team-Chat. Frag mich, bevor du eine E-Mail sendest.",
			meaning: "Riskante Tool-Aufrufe warten, bis ein Mensch Ja sagt.",
		},
	},
	contract: {
		visual: "Ein Vertrag",
		title: ["Jede Funktion ist ein HTTP-Aufruf.", "Ein typisierter Vertrag."],
		body: "Der Server, der TypeScript-Client und die API-Referenz kommen alle aus einem Vertrag. Nutze einen API-Schlüssel aus jedem Programm.",
	},
	features: {
		title: ["Nutze deinen eigenen Client.", "Menschen behalten die Kontrolle."],
		items: [
			{
				title: "Ein Chat mit jedem Bot",
				text: "Du hast mit jedem Bot einen Chat. Der Bot antwortet immer sofort, und lange Arbeit läuft parallel.",
			},
			{
				title: "Freigaben",
				text: "Riskante Tool-Aufrufe warten, bis ein Mensch Ja sagt. Jede Antwort behält ihren Verlauf.",
			},
			{
				title: "Offene Apps",
				text: "Bots finden und nutzen Apps, die Anbieter mit dem OpenBot App Protocol ins offene Web stellen.",
			},
			{
				title: "Deine Modelle",
				text: "Nutze OpenAI, Anthropic oder jeden Server, der Chat Completions spricht.",
			},
		],
	},
	closing: {
		title: ["Starte in", "drei Schritten."],
		label: "Schritte",
		steps: [
			{
				title: "Server starten",
				text: "Starte OpenBot auf deinem Computer mit Docker und devenv. Ein Testkonto und Testmodelle sind dabei.",
			},
			{
				title: "API-Schlüssel erstellen",
				text: "Melde dich einmal im Browser an, erstelle einen Schlüssel und rufe die API aus jedem Programm auf.",
			},
			{
				title: "Einen Turn starten",
				text: "Schicke Arbeit in einfacher Sprache. Lies die Antwort, die Tool-Aufrufe und den Verlauf.",
			},
		],
	},
	license: {
		tagline: "Von Grund auf offen.",
		label: "Lizenz",
		body: "OpenBot ist freie Software unter AGPL-3.0-only. Du kannst den Code lesen, ändern und auf deinen eigenen Servern laufen lassen.",
		link: "Code lesen",
	},
} satisfies Messages
