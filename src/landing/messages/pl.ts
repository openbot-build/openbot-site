import type { Messages } from "./types.ts"

export default {
 experienceSections: ["Praca odbywa się w twoich narzędziach.", "Praca trwa także poza czatem.", "Udostępnij swój sposób pracy.", "Wspólna rola i metoda", "Własne konta i dane"],
 diagram: {"verify": "Sprawdź źródło i zidentyfikuj nadawcę", "return": "Odeślij wyniki do pierwotnego wątku", "parallel": "Zadania działają niezależnie i zwracają wyniki do tego czatu", "resume": "Połącz ponownie i kontynuuj od ostatniego odebranego zdarzenia", "message": "Wiadomość", "work": "Przetwarzanie", "reply": "Odpowiedź", "appFlow": ["Znajdź usługę", "Odczytaj dane połączenia", "Użyj narzędzi i widoków"]},
	linkLabels: {"deploy": "Instrukcja wdrożenia", "apps": "Specyfikacja publikowania Apps", "channels": "Instrukcja integracji kanałów", "delegation": "Instrukcja delegowania zadań", "chats": "Instrukcja czatów i strumieni zdarzeń", "models": "Rozszerzanie backendów modeli", "source": "Kod źródłowy"},
	developerSections: ["Udostępnij nowe możliwości.", "Dołącz tam, gdzie pracują ludzie.", "Pozwól długim zadaniom działać dalej.", "Uruchom na własnej infrastrukturze."],
	applications: [
	  {
	    "title": "Obsługa klienta",
	    "task": "Obsłuż dzisiejsze zgłoszenia w Slack przez moją połączoną App wsparcia i przydziel pilne.",
	    "steps": [
	      "Odczytać 12 zgłoszeń, wykryć 3 pilne.",
	      "Przydzielić pilne programistom i zaktualizować zgłoszenia."
	    ],
	    "outcome": "Odpowiedzialni i kolejne kroki opublikowani w pierwotnym wątku #support."
	  },
	  {
	    "title": "Działanie sklepu",
	    "task": "Uzupełnij SKU-203 przez moje App magazynu i zakupów, powiadom grupę Lark.",
	    "steps": [
	      "Sprawdzić stan i termin: przed dostawą brakuje 12 sztuk.",
	      "Utworzyć pilne zamówienie PO-203 na 12 sztuk w App zakupów."
	    ],
	    "outcome": "Zamówienie zapisano, numer opublikowano w Lark do śledzenia."
	  },
	  {
	    "title": "Wspólny Bot nauczycielski",
	    "task": "Udostępnij mój Bot do lekcji nauczycielce, by używała własnych materiałów i kont.",
	    "steps": [
	      "Zachować rolę nauczycielską i instrukcje Bota.",
	      "Utworzyć zaproszenie email dla teacher@example.com."
	    ],
	    "outcome": "Po przyjęciu korzysta z powiązanego Bota i własnych App. Nasze Chat pozostają oddzielne."
	  },
	  {
	    "title": "Podróż rodzinna",
	    "task": "Użyj zapamiętanych preferencji i rezerwacji, dodaj Rzym do kalendarza i wyślij na Telegram.",
	    "steps": [
	      "Uwzględnić spokojne tempo i przerwy; odczytać rezerwacje.",
	      "Dodać trzy dni z przerwami przez połączoną App kalendarza."
	    ],
	    "outcome": "Kalendarz zaktualizowany, plan w Telegram; można go tam dalej zmieniać."
	  },
	  {
	    "title": "Koordynacja przeprowadzki",
	    "task": "Zorganizuj przeprowadzkę w przyszłym tygodniu i przypominaj w Telegram według mojej strefy.",
	    "steps": [
	      "Utworzyć zadania mediów, pakowania i przekazania kluczy.",
	      "Jednorazowe wyzwalacze 7 dni wcześniej, 3 dni wcześniej i w dniu przeprowadzki."
	    ],
	    "outcome": "Trzy przypomnienia zaplanowane; każde rozpocznie zadanie i prześle postęp do Telegram."
	  },
	  {
	    "title": "Dalsza sprzedaż",
	    "task": "Kontynuuj OPP-204 po spotkaniu przez moje App CRM i kalendarza.",
	    "steps": [
	      "Odczytać notatki i obecny stan szansy.",
	      "Zaktualizować następny krok CRM i dodać spotkanie kontrolne."
	    ],
	    "outcome": "OPP-204 ma działanie i termin; email klienta wysłano przez połączoną App poczty."
	  },
	  {
	    "title": "Przygotowanie wydania",
	    "task": "Zleć API i UI dwóm Bots na testowym Computer i zwróć wyniki tutaj.",
	    "steps": [
	      "Delegować dwie prace, pozostawiając ten Chat dostępny.",
	      "Uruchomić testy na Computer i zebrać wyniki oraz pliki."
	    ],
	    "outcome": "Obie prace wróciły: 28 testów zaliczonych, 2 pliki zmienione. Wersja gotowa do sprawdzenia."
	  }
	],
	demo: {
		"send": "Wyślij",
	  "label": "Interaktywne demo",
	  "task": "Przejrzyj 12 zgłoszeń, przygotuj raport i wyślij zespołowi.",
	  "read": "Odczytano 12 zgłoszeń",
	  "grouped": "Podzielono na 3 tematy",
	  "report": "Raport wsparcia",

	  "sent": "Email wysłany",
	  "reset": "Powtórz",
	  "download": "Pobierz raport",
	  "categories": [
	    "Logowanie",
	    "Rozliczenia",
	    "Eksport"
	  ]
	},
	product: {
		online: "Korzystaj online",
		progress: "Śledź postępy",
		results: "Odbierz wynik",

	  "title": "Od pomysłu do działania.",
	  "ui": "Od pomysłu do działania.",
	  "core": "Agenci, którzy pracują.",
	  "developers": "Dla programistów",
	  "soon": "Wkrótce"
	},
	description: "Platforma dla Botów bez interfejsu, oparta na API.",
	nav: {
		label: "Strona",
		docs: "Dokumentacja",
		api: "API",
		language: "Język",
	},
	hero: {
		title: ["Twoi agenci.", "Twoje zasady."],
		body: "OpenBot to otwarta platforma dla Botów bez interfejsu użytkownika. Dajesz pracę Botowi przez HTTP.",
		quickStart: "Szybki start",
		apiReference: "Dokumentacja API",
		visual: "Zacznij Turn",
		prompt: "Zaplanuj trzy dni w Rzymie.",
	},
	scenarios: {
		title: "Co zbudujesz?",
		label: "Klienci",
		script: {
			label: "Skrypt",
			prompt:
				"Każdego ranka przeczytaj nowe zgłoszenia do supportu i je posortuj.",
			meaning:
				"Wywołaj jeden endpoint z zadania cron. Odczytaj odpowiedź jako JSON.",
		},
		service: {
			label: "Usługa",
			prompt: "Sprawdź każde nowe zamówienie i oznacz te, które wyglądają źle.",
			meaning:
				"Twój serwer zaczyna Turn. Potem czyta strumień albo czeka przez long polling.",
		},
		bot: {
			label: "Chatbot",
			prompt:
				"Odpowiadaj na pytania na naszym czacie zespołu. Zapytaj mnie, zanim wyślesz e-mail.",
			meaning: "Ryzykowne wywołania narzędzi czekają, aż człowiek się zgodzi.",
		},
	},
	contract: {
		visual: "Jeden kontrakt",
		title: ["Każda funkcja to wywołanie HTTP.", "Jeden typowany kontrakt."],
		body: "Serwer, klient TypeScript i dokumentacja API powstają z jednego kontraktu. Używaj klucza API z dowolnego programu.",
	},
	features: {
		title: ["Użyj własnego klienta.", "Ludzie mają kontrolę."],
		items: [
			{
				title: "Jeden czat z każdym Botem",
				text: "Z każdym Botem masz jeden czat. Bot zawsze odpowiada od razu, a długa praca idzie równolegle.",
			},
			{
				title: "Zgody",
				text: "Ryzykowne wywołania narzędzi czekają, aż człowiek się zgodzi. Każda odpowiedź zachowuje swoją historię.",
			},
			{
				title: "Otwarte Apps",
				text: "Agenci znajdują i używają Apps, które wydawcy publikują w otwartej sieci za pomocą OpenBot App Protocol.",
			},
			{
				title: "Twoje modele",
				text: "Używaj OpenAI, Anthropic albo dowolnego serwera, który obsługuje Chat Completions.",
			},
		],
	},
	closing: {
		title: ["Zacznij w", "trzech krokach."],
		label: "Kroki",
		steps: [
			{
				title: "Uruchom serwer",
				text: "Uruchom OpenBot na swoim komputerze z Docker i devenv. Dostajesz konto testowe i modele testowe.",
			},
			{
				title: "Utwórz klucz API",
				text: "Zaloguj się raz w przeglądarce, utwórz klucz i wywołuj API z dowolnego programu.",
			},
			{
				title: "Zacznij Turn",
				text: "Wyślij pracę zwykłym językiem. Przeczytaj odpowiedź, wywołania narzędzi i historię.",
			},
		],
	},
	license: {
		tagline: "Otwarty od podstaw.",
		label: "Licencja",
		body: "OpenBot to wolne oprogramowanie na licencji AGPL-3.0-only. Możesz czytać kod, zmieniać go i uruchamiać na własnych serwerach.",
		link: "Zobacz kod",
	},
} satisfies Messages
