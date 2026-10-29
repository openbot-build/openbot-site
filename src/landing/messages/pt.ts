import type { Messages } from "./types.ts"

export default {
 experienceSections: ["O trabalho acontece nas suas ferramentas.", "O trabalho continua fora do chat.", "Compartilhe sua forma de trabalhar.", "Um papel e método compartilhados", "Suas próprias contas e dados"],
 diagram: {"verify": "Verificar a origem e identificar o remetente", "return": "Enviar resultados à conversa original", "parallel": "As tarefas executam separadamente e retornam resultados a este chat", "resume": "Reconectar e continuar do último evento recebido", "message": "Enviar mensagem", "work": "Processar tarefa", "reply": "Receber resposta", "appFlow": ["Encontrar serviço", "Ler a conexão", "Usar ferramentas e interfaces"]},
	linkLabels: {"deploy": "Guia de implantação", "apps": "Especificação de publicação de Apps", "channels": "Guia de integração de canais", "delegation": "Guia de delegação de tarefas", "chats": "Guia de chats e fluxos de eventos", "models": "Estender os backends de modelos", "source": "Código-fonte"},
	developerSections: ["Publique uma capacidade.", "Conecte-se onde as pessoas trabalham.", "Mantenha tarefas longas em execução.", "Execute na sua infraestrutura."],
	applications: [
	  {
	    "title": "Atendimento ao cliente",
	    "task": "Trate os chamados de hoje no Slack com meu App de suporte conectado e encaminhe os urgentes.",
	    "steps": [
	      "Ler 12 chamados e identificar 3 urgentes.",
	      "Atribuir urgências à engenharia e atualizar os registros."
	    ],
	    "outcome": "Responsáveis e próximos passos publicados na conversa original de #support."
	  },
	  {
	    "title": "Operação da loja",
	    "task": "Reponha SKU-203 pelos meus Apps de estoque e compras e avise o grupo de compras no Lark.",
	    "steps": [
	      "Conferir estoque e prazo: faltam 12 unidades antes da entrega.",
	      "Criar o pedido urgente PO-203 de 12 unidades no App de compras."
	    ],
	    "outcome": "Pedido registrado e referência publicada no Lark para acompanhamento."
	  },
	  {
	    "title": "Assistente docente compartilhado",
	    "task": "Compartilhe meu Bot de aulas com outra professora para usar materiais e contas próprios.",
	    "steps": [
	      "Manter o papel docente e as instruções do Bot.",
	      "Criar convite por email para teacher@example.com."
	    ],
	    "outcome": "Ao aceitar, ela recebe um Bot vinculado e usa seus Apps. Nossos Chats ficam separados."
	  },
	  {
	    "title": "Viagem em família",
	    "task": "Use preferências lembradas e reservas para colocar Roma no calendário e enviar ao Telegram.",
	    "steps": [
	      "Retomar o ritmo tranquilo e as pausas; ler reservas confirmadas.",
	      "Adicionar três dias com intervalos pelo App de calendário conectado."
	    ],
	    "outcome": "Calendário atualizado e roteiro entregue no Telegram, onde pode ser ajustado."
	  },
	  {
	    "title": "Coordenação da mudança",
	    "task": "Organize minha mudança da próxima semana e lembre cada etapa no Telegram, no meu fuso.",
	    "steps": [
	      "Criar tarefas de serviços, caixas e entrega das chaves.",
	      "Programar gatilhos únicos para 7 dias antes, 3 dias antes e o dia da mudança."
	    ],
	    "outcome": "Três lembretes programados; cada gatilho inicia a tarefa e retorna ao Telegram."
	  },
	  {
	    "title": "Acompanhamento comercial",
	    "task": "Acompanhe OPP-204 após a reunião pelos meus Apps CRM e calendário.",
	    "steps": [
	      "Ler notas da reunião e estado da oportunidade.",
	      "Atualizar a próxima ação do CRM e marcar a reunião de acompanhamento."
	    ],
	    "outcome": "OPP-204 tem ação e data; o email ao cliente foi enviado pelo App de correio conectado."
	  },
	  {
	    "title": "Preparação de versão",
	    "task": "Delegue testes de API e UI a dois Bots no Computer de testes e traga os resultados aqui.",
	    "steps": [
	      "Delegar duas tarefas enquanto este Chat continua disponível.",
	      "Executar testes no Computer e reunir resultados e arquivos."
	    ],
	    "outcome": "As duas tarefas retornaram: 28 testes passaram, 2 arquivos mudaram. A versão está pronta para inspeção."
	  }
	],
	demo: {
		"send": "Enviar",
	  "label": "Demonstração interativa",
	  "task": "Analise 12 chamados, prepare um relatório e envie à equipe.",
	  "read": "12 chamados lidos",
	  "grouped": "Agrupados em 3 temas",
	  "report": "Relatório de suporte",

	  "sent": "Email enviado",
	  "reset": "Repetir",
	  "download": "Baixar relatório",
	  "categories": [
	    "Login",
	    "Cobrança",
	    "Exportação"
	  ]
	},
	product: {
		online: "Experiência online",
		progress: "Acompanhe o trabalho",
		results: "Receba o resultado",

	  "title": "Da ideia à ação.",
	  "ui": "Da ideia à ação.",
	  "core": "Agentes que trabalham.",
	  "developers": "Desenvolvedores",
	  "soon": "Em breve"
	},
	description: "Uma plataforma de Bots sem interface e com foco na API.",
	nav: {
		label: "Site",
		docs: "Docs",
		api: "API",
		language: "Idioma",
	},
	hero: {
		title: ["Seus agentes.", "Suas regras."],
		body: "OpenBot é uma plataforma de Bots de código aberto sem interface de usuário. Você entrega trabalho a um Bot por HTTP.",
		quickStart: "Começo rápido",
		apiReference: "Referência da API",
		visual: "Inicie um Turn",
		prompt: "Planeje três dias em Roma.",
	},
	scenarios: {
		title: "O que você vai criar?",
		label: "Clientes",
		script: {
			label: "Um script",
			prompt: "Toda manhã, leia os novos tickets de suporte e organize-os.",
			meaning:
				"Chame um endpoint a partir de um job cron. Leia a resposta como JSON.",
		},
		service: {
			label: "Um serviço",
			prompt: "Confira cada novo pedido e marque os que parecem errados.",
			meaning:
				"Seu servidor inicia um Turn. Depois ele lê um stream ou espera com long polling.",
		},
		bot: {
			label: "Um chatbot",
			prompt:
				"Responda perguntas no chat da equipe. Me pergunte antes de enviar e-mail.",
			meaning:
				"Chamadas de ferramentas arriscadas esperam até uma pessoa dizer sim.",
		},
	},
	contract: {
		visual: "Um contrato",
		title: ["Cada recurso é uma chamada HTTP.", "Um contrato tipado."],
		body: "O servidor, o cliente TypeScript e a referência da API vêm todos de um único contrato. Use uma chave de API em qualquer programa.",
	},
	features: {
		title: ["Use o seu próprio cliente.", "As pessoas ficam no controle."],
		items: [
			{
				title: "Um chat com cada Bot",
				text: "Você tem um chat com cada Bot. O Bot sempre responde na hora, e o trabalho longo roda em paralelo.",
			},
			{
				title: "Aprovações",
				text: "Chamadas de ferramentas arriscadas esperam até uma pessoa dizer sim. Cada resposta guarda o seu histórico.",
			},
			{
				title: "Apps abertos",
				text: "Bots encontram e usam Apps que publicadores colocam na web aberta com o OpenBot App Protocol.",
			},
			{
				title: "Seus modelos",
				text: "Use OpenAI, Anthropic ou qualquer servidor compatível com Chat Completions.",
			},
		],
	},
	closing: {
		title: ["Comece em", "três passos."],
		label: "Passos",
		steps: [
			{
				title: "Inicie o servidor",
				text: "Rode o OpenBot no seu computador com Docker e devenv. Ele já vem com uma conta de teste e modelos de teste.",
			},
			{
				title: "Crie uma chave de API",
				text: "Entre uma vez no navegador, crie uma chave e chame a API de qualquer programa.",
			},
			{
				title: "Inicie um Turn",
				text: "Envie o trabalho em linguagem simples. Leia a resposta, as chamadas de ferramentas e o histórico.",
			},
		],
	},
	license: {
		tagline: "Aberto por natureza.",
		label: "Licença",
		body: "OpenBot é software livre sob a AGPL-3.0-only. Você pode ler o código, alterá-lo e rodá-lo nos seus próprios servidores.",
		link: "Leia o código",
	},
} satisfies Messages
