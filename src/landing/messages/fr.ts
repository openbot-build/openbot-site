import type { Messages } from "./types.ts"

export default {
 experienceSections: ["Le travail se fait dans vos outils.", "Le travail continue hors du chat.", "Partagez votre façon de travailler.", "Un rôle et une méthode partagés", "Vos propres comptes et données"],
 diagram: {"verify": "Vérifier la source et identifier l’expéditeur", "return": "Renvoyer les résultats dans le fil d’origine", "parallel": "Les tâches s’exécutent séparément et renvoient leurs résultats à ce chat", "resume": "Après reconnexion, reprendre au dernier événement reçu", "message": "Envoyer", "work": "Traiter", "reply": "Recevoir", "appFlow": ["Trouver le service", "Lire la configuration", "Utiliser outils et vues"]},
	linkLabels: {"deploy": "Guide de déploiement", "apps": "Spécification de publication des Apps", "channels": "Guide d’intégration des canaux", "delegation": "Guide de délégation des tâches", "chats": "Guide des chats et flux d’événements", "models": "Étendre les backends de modèles", "source": "Code source"},
	developerSections: ["Publiez une capacité.", "Rejoignez les outils de travail.", "Laissez les tâches longues continuer.", "Déployez sur votre infrastructure."],
	applications: [
	  {
	    "title": "Service client",
	    "task": "Traite les tickets du jour dans Slack via mon App d’assistance connectée et attribue les urgences.",
	    "steps": [
	      "Lire 12 tickets et repérer 3 urgences.",
	      "Attribuer les urgences à l’équipe technique et mettre à jour les tickets."
	    ],
	    "outcome": "Les responsables et prochaines étapes sont publiés dans le fil #support."
	  },
	  {
	    "title": "Gestion de boutique",
	    "task": "Réapprovisionne SKU-203 via mes Apps de stock et d’achat, puis informe le groupe Lark.",
	    "steps": [
	      "Vérifier stock et délai : manque de 12 unités avant livraison.",
	      "Créer la commande urgente PO-203 de 12 unités dans l’App d’achat."
	    ],
	    "outcome": "La commande est enregistrée et sa référence est publiée dans Lark pour le suivi."
	  },
	  {
	    "title": "Assistant pédagogique partagé",
	    "task": "Partage mon Bot de préparation de cours avec une collègue pour ses propres ressources et comptes.",
	    "steps": [
	      "Conserver le rôle pédagogique et les instructions du Bot.",
	      "Créer une invitation par email pour teacher@example.com."
	    ],
	    "outcome": "Après acceptation, elle utilise le Bot lié avec ses propres Apps. Nos Chats restent séparés."
	  },
	  {
	    "title": "Voyage familial",
	    "task": "Utilise nos préférences mémorisées et réservations pour planifier Rome dans mon agenda, puis Telegram.",
	    "steps": [
	      "Retrouver le rythme calme et les pauses ; lire les réservations confirmées.",
	      "Inscrire trois jours avec des pauses via l’App d’agenda connectée."
	    ],
	    "outcome": "Agenda mis à jour ; l’itinéraire arrive dans Telegram et peut y être ajusté."
	  },
	  {
	    "title": "Organisation du déménagement",
	    "task": "Organise mon déménagement la semaine prochaine et rappelle chaque étape sur Telegram, dans mon fuseau.",
	    "steps": [
	      "Créer les tâches de contrats, cartons et remise des clés.",
	      "Programmer des déclencheurs uniques à J−7, J−3 et le jour du départ."
	    ],
	    "outcome": "Trois rappels sont programmés ; chaque déclencheur lance sa tâche et revient dans Telegram."
	  },
	  {
	    "title": "Suivi commercial",
	    "task": "Assure le suivi de l’opportunité OPP-204 après la réunion via mes Apps CRM et agenda.",
	    "steps": [
	      "Lire les notes de réunion et l’état de l’opportunité.",
	      "Mettre à jour la prochaine action du CRM et créer le rendez-vous de suivi."
	    ],
	    "outcome": "OPP-204 a une action et une date ; l’email client est envoyé via l’App de messagerie connectée."
	  },
	  {
	    "title": "Préparer une version",
	    "task": "Confie les tests API et UI à deux Bots sur le Computer de test, puis rapporte les résultats ici.",
	    "steps": [
	      "Déléguer deux tâches distinctes tout en gardant ce Chat disponible.",
	      "Exécuter les tests sur le Computer et rassembler les résultats et fichiers."
	    ],
	    "outcome": "Les deux tâches sont revenues : 28 tests réussis, 2 fichiers modifiés. La version est prête à examiner."
	  }
	],
	demo: {
		"send": "Envoyer",
	  "label": "Démo interactive",
	  "task": "Analyse 12 tickets, prépare un rapport et envoie-le à l’équipe.",
	  "read": "12 tickets lus",
	  "grouped": "Classés en 3 thèmes",
	  "report": "Rapport d’assistance",

	  "sent": "Email envoyé",
	  "reset": "Rejouer",
	  "download": "Télécharger le rapport",
	  "categories": [
	    "Connexion",
	    "Facturation",
	    "Exportation"
	  ]
	},
	product: {
		online: "Expérience en ligne",
		progress: "Suivez le travail",
		results: "Retrouvez le résultat",

	  "title": "De l’idée à l’action.",
	  "ui": "De l’idée à l’action.",
	  "core": "Des agents qui travaillent.",
	  "developers": "Développeurs",
	  "soon": "Bientôt disponible"
	},
	description:
		"Une plateforme de Bots sans interface, pensée d’abord pour l’API.",
	nav: {
		label: "Site",
		docs: "Docs",
		api: "API",
		language: "Langue",
	},
	hero: {
		title: ["Vos agents.", "Vos règles."],
		body: "OpenBot est une plateforme de Bots open source sans interface utilisateur. Vous confiez du travail à un Bot par HTTP.",
		quickStart: "Démarrage rapide",
		apiReference: "Référence de l’API",
		visual: "Lancer un Turn",
		prompt: "Prépare un séjour de trois jours à Rome.",
	},
	scenarios: {
		title: "Qu’allez-vous créer ?",
		label: "Clients",
		script: {
			label: "Un script",
			prompt: "Chaque matin, lis les nouveaux tickets de support et trie-les.",
			meaning:
				"Appelez un endpoint depuis une tâche cron. Lisez la réponse en JSON.",
		},
		service: {
			label: "Un service",
			prompt:
				"Vérifie chaque nouvelle commande et signale celles qui semblent fausses.",
			meaning:
				"Votre serveur lance un Turn. Ensuite, il lit un flux ou attend avec du long polling.",
		},
		bot: {
			label: "Un chatbot",
			prompt:
				"Réponds aux questions dans le chat de l’équipe. Demande-moi avant d’envoyer un e-mail.",
			meaning:
				"Les appels d’outils à risque attendent qu’une personne dise oui.",
		},
	},
	contract: {
		visual: "Un seul contrat",
		title: ["Chaque fonction est un appel HTTP.", "Un seul contrat typé."],
		body: "Le serveur, le client TypeScript et la référence de l’API viennent tous d’un seul contrat. Utilisez une clé d’API depuis n’importe quel programme.",
	},
	features: {
		title: [
			"Utilisez votre propre client.",
			"Les humains gardent le contrôle.",
		],
		items: [
			{
				title: "Un chat avec chaque Bot",
				text: "Vous avez un chat avec chaque Bot. Le Bot répond toujours tout de suite, et le travail long avance en parallèle.",
			},
			{
				title: "Validations",
				text: "Les appels d’outils à risque attendent qu’une personne dise oui. Chaque réponse garde son historique.",
			},
			{
				title: "Apps ouvertes",
				text: "Les Bots trouvent et utilisent des Apps que des éditeurs publient sur le web ouvert avec l’OpenBot App Protocol.",
			},
			{
				title: "Vos modèles",
				text: "Utilisez OpenAI, Anthropic ou tout serveur compatible avec Chat Completions.",
			},
		],
	},
	closing: {
		title: ["Démarrez en", "trois étapes."],
		label: "Étapes",
		steps: [
			{
				title: "Lancez le serveur",
				text: "Lancez OpenBot sur votre ordinateur avec Docker et devenv. Un compte de test et des modèles de test sont inclus.",
			},
			{
				title: "Créez une clé d’API",
				text: "Connectez-vous une fois dans un navigateur, créez une clé et appelez l’API depuis n’importe quel programme.",
			},
			{
				title: "Lancez un Turn",
				text: "Envoyez le travail en langage simple. Lisez la réponse, les appels d’outils et l’historique.",
			},
		],
	},
	license: {
		tagline: "Ouvert par nature.",
		label: "Licence",
		body: "OpenBot est un logiciel libre sous AGPL-3.0-only. Vous pouvez lire le code, le modifier et le faire tourner sur vos propres serveurs.",
		link: "Lire le code",
	},
} satisfies Messages
