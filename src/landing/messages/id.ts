import type { Messages } from "./types.ts"

export default {
 experienceSections: ["Pekerjaan selesai di alat Anda.", "Pekerjaan berlanjut di luar chat.", "Bagikan cara kerja Anda.", "Peran dan metode bersama", "Akun dan data milik sendiri"],
 diagram: {"verify": "Verifikasi sumber dan identifikasi pengirim", "return": "Kirim hasil ke utas awal", "parallel": "Tugas berjalan mandiri dan mengembalikan hasil ke chat ini", "resume": "Sambungkan kembali dari peristiwa terakhir yang diterima", "message": "Kirim pesan", "work": "Proses tugas", "reply": "Terima balasan", "appFlow": ["Temukan layanan", "Baca konfigurasi", "Gunakan alat dan tampilan"]},
	linkLabels: {"deploy": "Panduan penerapan", "apps": "Spesifikasi penerbitan App", "channels": "Panduan integrasi kanal", "delegation": "Panduan delegasi tugas", "chats": "Panduan chat dan aliran peristiwa", "models": "Memperluas backend model", "source": "Kode sumber"},
	developerSections: ["Terbitkan sebuah kemampuan.", "Terhubung di tempat orang bekerja.", "Biarkan tugas panjang terus berjalan.", "Jalankan di infrastruktur sendiri."],
	applications: [
	  {
	    "title": "Layanan pelanggan",
	    "task": "Tangani tiket di Slack lewat App dukungan saya dan teruskan yang mendesak.",
	    "steps": [
	      "Baca 12 tiket; temukan 3 mendesak.",
	      "Tugaskan ke teknisi dan perbarui tiket."
	    ],
	    "outcome": "Penanggung jawab dan langkah berikutnya dikirim ke utas #support semula."
	  },
	  {
	    "title": "Operasi toko",
	    "task": "Isi SKU-203 lewat App stok dan pembelian saya; kabari grup Lark.",
	    "steps": [
	      "Periksa stok dan waktu pasokan: kekurangan 12 unit.",
	      "Buat pesanan cepat PO-203 untuk 12 unit."
	    ],
	    "outcome": "Pesanan tercatat dan nomornya dikirim ke Lark untuk ditindaklanjuti."
	  },
	  {
	    "title": "Bot pengajar bersama",
	    "task": "Bagikan Bot pelajaran saya kepada guru lain untuk bahan dan akunnya sendiri.",
	    "steps": [
	      "Pertahankan peran dan instruksi mengajar.",
	      "Buat undangan email untuk teacher@example.com."
	    ],
	    "outcome": "Setelah menerima, guru memakai Bot tertaut dengan App miliknya. Chat kami tetap terpisah."
	  },
	  {
	    "title": "Perjalanan keluarga",
	    "task": "Gunakan preferensi tersimpan dan pemesanan untuk memasukkan Roma ke kalender lalu Telegram.",
	    "steps": [
	      "Ingat tempo santai dan istirahat; baca pemesanan.",
	      "Tambahkan tiga hari kegiatan melalui App kalender terhubung."
	    ],
	    "outcome": "Kalender diperbarui, jadwal masuk Telegram dan bisa diubah di sana."
	  },
	  {
	    "title": "Koordinator pindahan",
	    "task": "Atur pindahan minggu depan dan ingatkan melalui Telegram sesuai zona waktu saya.",
	    "steps": [
	      "Buat tugas utilitas, pengepakan, dan kunci.",
	      "Jadwalkan pemicu sekali pada H−7, H−3, dan hari pindah."
	    ],
	    "outcome": "Tiga pengingat aktif; setiap pemicu memulai tugas dan mengirim kabar ke Telegram."
	  },
	  {
	    "title": "Tindak lanjut penjualan",
	    "task": "Tindak lanjuti OPP-204 lewat App CRM dan kalender saya.",
	    "steps": [
	      "Baca catatan rapat dan peluang.",
	      "Perbarui langkah CRM dan jadwalkan pertemuan lanjutan."
	    ],
	    "outcome": "OPP-204 memiliki tindakan dan jadwal; email pelanggan terkirim lewat App surat terhubung."
	  },
	  {
	    "title": "Persiapan rilis",
	    "task": "Delegasikan pemeriksaan API dan UI kepada dua Bots di Computer pengujian.",
	    "steps": [
	      "Dua tugas terpisah; Chat ini tetap tersedia.",
	      "Jalankan pengujian dan kumpulkan hasil serta berkas."
	    ],
	    "outcome": "Dua tugas kembali: 28 tes lulus, 2 berkas berubah. Kandidat rilis siap diperiksa."
	  }
	],
	demo: {
		"send": "Kirim",
	  "label": "Demo interaktif",
	  "task": "Tinjau 12 tiket dukungan, buat laporan, dan kirim ke tim.",
	  "read": "12 tiket dibaca",
	  "grouped": "Dikelompokkan dalam 3 topik",
	  "report": "Laporan dukungan",

	  "sent": "Email terkirim",
	  "reset": "Ulangi",
	  "download": "Unduh laporan",
	  "categories": [
	    "Masuk",
	    "Tagihan",
	    "Ekspor"
	  ]
	},
	product: {
		online: "Pengalaman online",
		progress: "Ikuti progresnya",
		results: "Dapatkan hasilnya",

	  "title": "Dari ide menjadi aksi.",
	  "ui": "Dari ide menjadi aksi.",
	  "core": "Agen yang bekerja.",
	  "developers": "Pengembang",
	  "soon": "Segera hadir"
	},
	description: "Platform Bot tanpa antarmuka yang mengutamakan API.",
	nav: {
		label: "Situs",
		docs: "Dokumentasi",
		api: "API",
		language: "Bahasa",
	},
	hero: {
		title: ["Agen Anda.", "Aturan Anda."],
		body: "OpenBot adalah platform Bot open source tanpa antarmuka pengguna. Kamu memberi pekerjaan ke Bot lewat HTTP.",
		quickStart: "Mulai cepat",
		apiReference: "Referensi API",
		visual: "Mulai Turn",
		prompt: "Buat rencana tiga hari di Roma.",
	},
	scenarios: {
		title: "Apa yang akan kamu buat?",
		label: "Klien",
		script: {
			label: "Skrip",
			prompt: "Setiap pagi, baca tiket dukungan yang baru lalu urutkan.",
			meaning:
				"Panggil satu endpoint dari cron job. Baca jawabannya sebagai JSON.",
		},
		service: {
			label: "Layanan",
			prompt: "Periksa setiap pesanan baru dan tandai yang kelihatan salah.",
			meaning:
				"Server kamu memulai Turn. Lalu server membaca stream atau menunggu dengan long poll.",
		},
		bot: {
			label: "Chatbot",
			prompt:
				"Jawab pertanyaan di chat tim kami. Tanya saya dulu sebelum mengirim email.",
			meaning:
				"Panggilan tool yang berisiko menunggu sampai ada orang yang setuju.",
		},
	},
	contract: {
		visual: "Satu kontrak",
		title: ["Setiap fitur adalah panggilan HTTP.", "Satu kontrak bertipe."],
		body: "Server, klien TypeScript, dan referensi API semuanya berasal dari satu kontrak. Pakai API key dari program apa pun.",
	},
	features: {
		title: ["Pakai klienmu sendiri.", "Manusia tetap memegang kendali."],
		items: [
			{
				title: "Satu chat dengan setiap Bot",
				text: "Kamu punya satu chat dengan setiap Bot. Bot selalu menjawab saat itu juga, dan pekerjaan panjang berjalan paralel.",
			},
			{
				title: "Persetujuan",
				text: "Panggilan tool yang berisiko menunggu sampai ada orang yang setuju. Setiap jawaban menyimpan riwayatnya.",
			},
			{
				title: "App terbuka",
				text: "Bot menemukan dan memakai App yang dipasang penerbit di web terbuka dengan OpenBot App Protocol.",
			},
			{
				title: "Model kamu",
				text: "Pakai OpenAI, Anthropic, atau server apa pun yang mendukung Chat Completions.",
			},
		],
	},
	closing: {
		title: ["Mulai dalam", "tiga langkah."],
		label: "Langkah",
		steps: [
			{
				title: "Jalankan server",
				text: "Jalankan OpenBot di komputermu dengan Docker dan devenv. Sudah ada akun uji dan model uji.",
			},
			{
				title: "Buat API key",
				text: "Masuk sekali di browser, buat key, lalu panggil API dari program apa pun.",
			},
			{
				title: "Mulai Turn",
				text: "Kirim pekerjaan dengan bahasa sehari-hari. Baca jawabannya, panggilan tool, dan riwayatnya.",
			},
		],
	},
	license: {
		tagline: "Terbuka sejak awal.",
		label: "Lisensi",
		body: "OpenBot adalah perangkat lunak bebas dengan lisensi AGPL-3.0-only. Kamu bisa membaca kodenya, mengubahnya, dan menjalankannya di servermu sendiri.",
		link: "Baca kodenya",
	},
} satisfies Messages
