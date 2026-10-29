import type { Messages } from "./types.ts"

export default {
 experienceSections: ["쓰던 도구에서 일을 끝내세요.", "채팅을 떠나도 작업은 계속됩니다.", "유용한 도우미를 공유하세요.", "함께 쓰는 역할과 방법", "각자의 계정과 데이터"],
 diagram: {"verify": "메시지 출처를 검증하고 발신자 확인", "return": "결과를 원래 대화 스레드로 전송", "parallel": "작업은 독립 실행되고 결과는 현재 채팅으로 반환", "resume": "재연결 후 마지막 수신 이벤트부터 계속", "message": "메시지 전송", "work": "작업 처리", "reply": "응답 수신", "appFlow": ["서비스 발견", "연결 정보 확인", "도구와 화면 사용"]},
	linkLabels: {"deploy": "배포 가이드", "apps": "App 게시 명세", "channels": "채널 연동 가이드", "delegation": "작업 위임 가이드", "chats": "채팅 및 이벤트 스트림 가이드", "models": "모델 백엔드 확장", "source": "소스 코드"},
	developerSections: ["서비스를 기능으로 연결하세요.", "사람들이 일하는 곳에 연결하세요.", "긴 작업도 계속 실행하세요.", "자신의 인프라에서 실행하세요."],
	applications: [
	  {
	    "title": "고객 지원",
	    "task": "Slack에서 연결된 지원 App으로 오늘의 문의를 처리하고 긴급 건을 담당 팀에 맡겨 주세요.",
	    "steps": [
	      "문의 12건을 읽고 긴급 3건을 식별.",
	      "긴급 건을 개발팀에 배정하고 문의 기록 갱신."
	    ],
	    "outcome": "담당자와 다음 조치를 #support 원래 스레드에 게시해 팀이 이어서 처리합니다."
	  },
	  {
	    "title": "매장 운영",
	    "task": "재고·구매 App으로 SKU-203을 보충하고 Lark 구매 그룹에 알려 주세요.",
	    "steps": [
	      "재고와 납기를 확인해 도착 전 12개 부족을 파악.",
	      "구매 App에 12개 긴급 발주 PO-203 생성."
	    ],
	    "outcome": "발주가 등록되고 번호가 Lark에 공유되어 팀이 추적할 수 있습니다."
	  },
	  {
	    "title": "수업 Bot 공유",
	    "task": "내 수업 준비 Bot을 다른 선생님에게 공유해 본인 교재와 계정으로 쓰게 해 주세요.",
	    "steps": [
	      "Bot의 교사 역할과 수업 준비 지침 유지.",
	      "teacher@example.com에 이메일 초대 생성."
	    ],
	    "outcome": "수락하면 본인 조직의 연결 Bot으로 본인 App을 사용합니다. 서로의 Chat은 분리됩니다."
	  },
	  {
	    "title": "가족 여행",
	    "task": "기억한 취향과 예약 App으로 로마 일정을 달력에 넣고 Telegram에 보내 주세요.",
	    "steps": [
	      "느긋한 속도와 오후 휴식 선호를 반영하고 확정 예약 확인.",
	      "연결된 달력 App에 휴식을 포함한 3일 일정 등록."
	    ],
	    "outcome": "달력이 갱신되고 Telegram에 일정이 전달됩니다. 그 채팅에서 계속 수정할 수 있습니다."
	  },
	  {
	    "title": "이사 관리",
	    "task": "다음 주 이사를 정리하고 각 단계에 내 시간대로 Telegram 알림을 주세요.",
	    "steps": [
	      "공과금 이전, 포장, 열쇠 반납 작업 생성.",
	      "7일 전, 3일 전, 당일의 일회성 트리거 설정."
	    ],
	    "outcome": "세 알림이 예약되었습니다. 각 트리거가 작업을 시작하고 Telegram에 진행 상황을 보냅니다."
	  },
	  {
	    "title": "영업 후속 조치",
	    "task": "연결된 CRM과 달력 App으로 회의 후 OPP-204를 후속 관리해 주세요.",
	    "steps": [
	      "회의 기록과 현재 영업 기회 확인.",
	      "CRM의 다음 조치를 갱신하고 후속 미팅 예약."
	    ],
	    "outcome": "OPP-204에 다음 조치와 일정이 기록되고 연결된 메일 App으로 고객 이메일이 전송되었습니다."
	  },
	  {
	    "title": "출시 준비",
	    "task": "API와 UI 점검을 두 Bot에 맡기고 연결된 테스트 Computer에서 실행해 결과를 여기로 보내 주세요.",
	    "steps": [
	      "API 테스트와 UI 점검을 별도 위임하고 현재 Chat은 유지.",
	      "Computer에서 점검하고 두 결과와 변경 파일 수집."
	    ],
	    "outcome": "두 작업 완료: 테스트 28개 통과, 파일 2개 변경. 팀이 후보 버전을 검토할 수 있습니다."
	  }
	],
	demo: {
		"send": "보내기",
	  "label": "인터랙티브 데모",
	  "task": "지원 요청 12건을 정리하고 보고서를 팀에 이메일로 보내세요.",
	  "read": "요청 12건 확인",
	  "grouped": "주제 3개로 분류",
	  "report": "지원 보고서",

	  "sent": "이메일 전송 완료",
	  "reset": "다시 보기",
	  "download": "보고서 다운로드",
	  "categories": [
	    "로그인",
	    "청구",
	    "내보내기"
	  ]
	},
	product: {
		online: "온라인 경험",
		progress: "진행 상황 확인",
		results: "결과 받기",

	  "title": "아이디어에서 실행까지.",
	  "ui": "아이디어에서 실행까지.",
	  "core": "일하는 에이전트.",
	  "developers": "개발자",
	  "soon": "출시 예정"
	},
	description: "화면 없이 API를 먼저 생각한 Bot 플랫폼.",
	nav: {
		label: "사이트",
		docs: "문서",
		api: "API",
		language: "언어",
	},
	hero: {
		title: ["나만의 에이전트.", "내가 정하는 규칙."],
		body: "OpenBot은 사용자 인터페이스가 없는 오픈 소스 Bot 플랫폼입니다. HTTP로 Bot에게 일을 맡기세요.",
		quickStart: "빠른 시작",
		apiReference: "API 레퍼런스",
		visual: "Turn 시작하기",
		prompt: "로마에서 보낼 3일 일정을 짜 줘.",
	},
	scenarios: {
		title: "무엇을 만들까요?",
		label: "클라이언트",
		script: {
			label: "스크립트",
			prompt: "매일 아침 새 지원 티켓을 읽고 분류해 줘.",
			meaning:
				"cron 작업에서 엔드포인트 하나를 호출하세요. 답은 JSON으로 읽으면 됩니다.",
		},
		service: {
			label: "서비스",
			prompt: "새 주문을 하나씩 확인하고 이상해 보이는 주문을 표시해 줘.",
			meaning:
				"서버가 Turn을 시작합니다. 그다음 스트림을 읽거나 롱 폴링으로 기다립니다.",
		},
		bot: {
			label: "채팅 봇",
			prompt:
				"우리 팀 채팅에서 질문에 답해 줘. 이메일을 보내기 전에는 나에게 물어봐.",
			meaning: "위험한 도구 호출은 사람이 허락할 때까지 기다립니다.",
		},
	},
	contract: {
		visual: "하나의 계약",
		title: ["모든 기능은 HTTP 호출입니다.", "타입이 있는 하나의 계약."],
		body: "서버, TypeScript 클라이언트, API 레퍼런스가 모두 하나의 계약에서 만들어집니다. 어떤 프로그램에서든 API 키로 사용하세요.",
	},
	features: {
		title: ["원하는 클라이언트를 쓰세요.", "결정은 사람이 합니다."],
		items: [
			{
				title: "Bot마다 채팅 하나",
				text: "Bot마다 채팅이 하나 있습니다. Bot은 언제나 바로 답하고, 긴 일은 병렬로 진행됩니다.",
			},
			{
				title: "승인",
				text: "위험한 도구 호출은 사람이 허락할 때까지 기다립니다. 모든 답은 기록을 남깁니다.",
			},
			{
				title: "열린 App",
				text: "Bot는 게시자가 OpenBot App Protocol로 열린 웹에 올린 App을 찾아서 사용합니다.",
			},
			{
				title: "원하는 모델",
				text: "OpenAI, Anthropic, 또는 Chat Completions를 지원하는 어떤 서버든 쓸 수 있습니다.",
			},
		],
	},
	closing: {
		title: ["세 단계로", "시작하세요."],
		label: "단계",
		steps: [
			{
				title: "서버 시작하기",
				text: "Docker와 devenv로 내 컴퓨터에서 OpenBot을 실행하세요. 테스트 계정과 테스트 모델이 함께 들어 있습니다.",
			},
			{
				title: "API 키 만들기",
				text: "브라우저에서 한 번 로그인하고 키를 만든 뒤, 어떤 프로그램에서든 API를 호출하세요.",
			},
			{
				title: "Turn 시작하기",
				text: "평소 쓰는 말로 일을 보내세요. 답, 도구 호출, 기록을 읽을 수 있습니다.",
			},
		],
	},
	license: {
		tagline: "처음부터 열린 설계.",
		label: "라이선스",
		body: "OpenBot은 AGPL-3.0-only 라이선스의 자유 소프트웨어입니다. 코드를 읽고, 바꾸고, 내 서버에서 실행할 수 있습니다.",
		link: "코드 보기",
	},
} satisfies Messages
