import type { Messages } from "./types.ts"

export default {
 experienceSections: ["İşler kullandığınız araçlarda tamamlanır.", "İşler sohbet dışında da sürer.", "Çalışma biçiminizi paylaşın.", "Ortak rol ve yöntem", "Kendi hesaplarınız ve verileriniz"],
 diagram: {"verify": "Kaynağı doğrula ve göndereni belirle", "return": "Sonuçları ilk konuşmaya gönder", "parallel": "Görevler bağımsız çalışır ve sonuçları bu sohbete getirir", "resume": "Yeniden bağlanınca son alınan olaydan devam et", "message": "Mesaj gönder", "work": "Görevi işle", "reply": "Yanıt al", "appFlow": ["Hizmeti bul", "Bağlantı bilgilerini oku", "Araç ve görünümleri kullan"]},
	linkLabels: {"deploy": "Dağıtım kılavuzu", "apps": "App yayımlama belirtimi", "channels": "Kanal entegrasyon kılavuzu", "delegation": "Görev devretme kılavuzu", "chats": "Sohbet ve olay akışı kılavuzu", "models": "Model arka uçlarını genişletme", "source": "Kaynak kodu"},
	developerSections: ["Bir yetenek yayımlayın.", "İnsanların çalıştığı yere bağlanın.", "Uzun görevler çalışmaya devam etsin.", "Kendi altyapınızda çalıştırın."],
	applications: [
	  {
	    "title": "Müşteri desteği",
	    "task": "Slack taleplerini bağlı destek App ile işle ve acilleri dağıt.",
	    "steps": [
	      "12 talebi oku, 3 acil durum bul.",
	      "Acilleri mühendisliğe ata ve kayıtları güncelle."
	    ],
	    "outcome": "Sorumlular ve sonraki adımlar aynı #support konuşmasına döndü."
	  },
	  {
	    "title": "Mağaza operasyonu",
	    "task": "SKU-203 stokunu stok ve satın alma App ile tamamla, Lark grubuna bildir.",
	    "steps": [
	      "Stok ve teslimatı kontrol et: 12 ürün açık var.",
	      "12 ürünlük acil PO-203 siparişi oluştur."
	    ],
	    "outcome": "Sipariş kaydedildi; numarası takip için Lark grubuna gönderildi."
	  },
	  {
	    "title": "Paylaşılan öğretmen Bot",
	    "task": "Ders Botumu başka öğretmenle kendi materyal ve hesapları için paylaş.",
	    "steps": [
	      "Botun öğretim rolünü ve talimatlarını koru.",
	      "teacher@example.com için e-posta daveti oluştur."
	    ],
	    "outcome": "Kabul edince kendi App bağlantılarıyla bağlı Bot alır. Chatlerimiz ayrı kalır."
	  },
	  {
	    "title": "Aile seyahati",
	    "task": "Hatırlanan tercihler ve rezervasyonlarla Roma’yı takvimime ekle, Telegram’a gönder.",
	    "steps": [
	      "Sakin tempo ve molaları hatırla, rezervasyonları oku.",
	      "Bağlı takvim App ile üç gün etkinlik ekle."
	    ],
	    "outcome": "Takvim güncellendi, plan Telegram’da ve oradan değiştirilebilir."
	  },
	  {
	    "title": "Taşınma koordinasyonu",
	    "task": "Gelecek haftaki taşınmayı düzenle, saat dilimimde Telegram’dan hatırlat.",
	    "steps": [
	      "Abonelik, paketleme ve anahtar görevleri oluştur.",
	      "7 gün önce, 3 gün önce ve taşınma günü tek seferlik tetikleyiciler ayarla."
	    ],
	    "outcome": "Üç hatırlatıcı planlandı; her biri görev başlatıp Telegram’a güncelleme gönderir."
	  },
	  {
	    "title": "Satış takibi",
	    "task": "Toplantı sonrası OPP-204’ü CRM ve takvim App ile takip et.",
	    "steps": [
	      "Toplantı notlarını ve fırsatı oku.",
	      "CRM sonraki adımını güncelle, takip toplantısını ekle."
	    ],
	    "outcome": "OPP-204’ün eylemi ve zamanı var; müşteri e-postası bağlı posta App ile gönderildi."
	  },
	  {
	    "title": "Sürüm hazırlığı",
	    "task": "API ve UI kontrollerini test Computer üzerinde iki Bota ver.",
	    "steps": [
	      "İki görevi devret; bu Chat açık kalsın.",
	      "Kontrolleri çalıştır, sonuç ve dosyaları topla."
	    ],
	    "outcome": "İki görev döndü: 28 test geçti, 2 dosya değişti. Sürüm incelemeye hazır."
	  }
	],
	demo: {
		"send": "Gönder",
	  "label": "Etkileşimli demo",
	  "task": "12 destek talebini incele, rapor hazırla ve ekibe gönder.",
	  "read": "12 talep okundu",
	  "grouped": "3 konuya ayrıldı",
	  "report": "Destek raporu",

	  "sent": "E-posta gönderildi",
	  "reset": "Tekrarla",
	  "download": "Raporu indir",
	  "categories": [
	    "Giriş",
	    "Faturalama",
	    "Dışa aktarma"
	  ]
	},
	product: {
		online: "Çevrimiçi deneyim",
		progress: "İlerlemeyi takip et",
		results: "Sonucu al",

	  "title": "Fikirden eyleme.",
	  "ui": "Fikirden eyleme.",
	  "core": "İşe koyulan ajanlar.",
	  "developers": "Geliştiriciler için",
	  "soon": "Yakında"
	},
	description: "Arayüzü olmayan, API öncelikli bir Bot platformu.",
	nav: {
		label: "Site",
		docs: "Belgeler",
		api: "API",
		language: "Dil",
	},
	hero: {
		title: ["Senin ajanların.", "Senin kuralların."],
		body: "OpenBot, kullanıcı arayüzü olmayan açık kaynak bir Bot platformudur. Bot'a işi HTTP ile verirsin.",
		quickStart: "Hızlı başlangıç",
		apiReference: "API başvurusu",
		visual: "Bir Turn başlat",
		prompt: "Roma'da üç günlük bir gezi planla.",
	},
	scenarios: {
		title: "Ne yapacaksın?",
		label: "İstemciler",
		script: {
			label: "Bir betik",
			prompt: "Her sabah yeni destek taleplerini oku ve sırala.",
			meaning:
				"Bir cron işinden tek bir uç noktayı çağır. Cevabı JSON olarak oku.",
		},
		service: {
			label: "Bir servis",
			prompt: "Her yeni siparişi kontrol et ve yanlış görünenleri işaretle.",
			meaning:
				"Sunucun bir Turn başlatır. Sonra bir akışı okur ya da uzun yoklama ile bekler.",
		},
		bot: {
			label: "Bir sohbet botu",
			prompt:
				"Ekip sohbetimizde soruları cevapla. E-posta göndermeden önce bana sor.",
			meaning: "Riskli araç çağrıları bir kişi evet diyene kadar bekler.",
		},
	},
	contract: {
		visual: "Tek sözleşme",
		title: ["Her özellik bir HTTP çağrısıdır.", "Tek, tipli bir sözleşme."],
		body: "Sunucu, TypeScript istemcisi ve API başvurusu tek bir sözleşmeden gelir. Herhangi bir programdan bir API anahtarı ile kullan.",
	},
	features: {
		title: ["Kendi istemcini getir.", "Kontrol insanlarda kalsın."],
		items: [
			{
				title: "Her Bot ile tek sohbet",
				text: "Her Bot ile bir sohbetin olur. Bot her zaman hemen cevap verir, uzun işler ise paralel yürür.",
			},
			{
				title: "Onaylar",
				text: "Riskli araç çağrıları bir kişi evet diyene kadar bekler. Her cevap geçmişini saklar.",
			},
			{
				title: "Açık App'ler",
				text: "Bot'lar, yayıncıların OpenBot App Protocol ile açık web'e koyduğu App'leri bulur ve kullanır.",
			},
			{
				title: "Senin modellerin",
				text: "OpenAI, Anthropic ya da Chat Completions konuşan herhangi bir sunucuyu kullan.",
			},
		],
	},
	closing: {
		title: ["Üç adımda", "başla."],
		label: "Adımlar",
		steps: [
			{
				title: "Sunucuyu başlat",
				text: "OpenBot'u bilgisayarında Docker ve devenv ile çalıştır. Bir test hesabı ve test modelleri ile gelir.",
			},
			{
				title: "Bir API anahtarı oluştur",
				text: "Bir kez tarayıcıda giriş yap, bir anahtar oluştur ve API'yi herhangi bir programdan çağır.",
			},
			{
				title: "Bir Turn başlat",
				text: "İşi sade bir dille gönder. Cevabı, araç çağrılarını ve geçmişi oku.",
			},
		],
	},
	license: {
		tagline: "Temelden açık.",
		label: "Lisans",
		body: "OpenBot, AGPL-3.0-only altında özgür bir yazılımdır. Kodu okuyabilir, değiştirebilir ve kendi sunucularında çalıştırabilirsin.",
		link: "Kodu oku",
	},
} satisfies Messages
