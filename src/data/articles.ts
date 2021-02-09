export enum Language {
  english = "English",
  portuguese = "Português",
  french = "Français",
}

export enum Topic {
  go = "Go",
  fuseki = "Fuseki",
  tsumego = "Tsumego",
  joseki = "Joseki",
  goVariants = "Go Variants",
  review = "Review",
  philosophy = "Philosophy",
  meta = "Meta",
  logic = "Logic",
  social = "Social",
  politics = "Politics",
  history = "History",
  productivity = "Productivity",
  psychology = "Psychology",
  math = "Math",
  statistics = "Statistics",
  dataScience = "Data Science",
  browserExtension = "Browser Extension",
  programming = "Programming",
  dart = "Dart",
  flutter = "Flutter",
  design = "Design",
  uiUx = "UI/UX",
  language = "Language",
  literature = "Literature",
  writing = "Writing",
  quotes = "Quotes",
  books = "Books",
  myYouTubeChannel = "My YouTube Channel",
  sports = "Sports",
  comedy = "Comedy",
  health = "Health",
}

export default interface Article {
  index: number;
  title: string;
  link: string;
  date: number;
  languages: Language[];
  mainTopic: Topic;
  otherTopics: Topic[];
}

export const articlesMetadata: Article[] = [
  {
    index: 112,
    title: "FIC: Fast Immutable Collections, for Dart",
    link: "/articles/fic/fic.html",
    date: Date.UTC(2021, 1, 6),
    languages: [Language.english],
    mainTopic: Topic.programming,
    otherTopics: [Topic.dart],
  },
  {
    index: 111,
    title: "Guia Completo de Contagem de Pontos",
    link: "/articles/contagem_guia_completo/contagem_guia_completo.html",
    date: Date.UTC(2021, 0, 12),
    languages: [Language.portuguese],
    mainTopic: Topic.go,
    otherTopics: [],
  },
  {
    index: 110,
    title: "A Github Table of Contents Hack",
    link: "/articles/github_toc_hack/github_toc_hack.html",
    date: Date.UTC(2021, 0, 5),
    languages: [Language.english],
    mainTopic: Topic.design,
    otherTopics: [Topic.design],
  },
  {
    index: 109,
    title: "Murugandi's Fighting Spirit Design",
    link: "/articles/murugandi/murugandi.html",
    date: Date.UTC(2020, 11, 21),
    languages: [Language.english, Language.portuguese],
    mainTopic: Topic.go,
    otherTopics: [Topic.design, Topic.design],
  },
  {
    index: 108,
    title: "My New Website | Meu Novo Site",
    link: "/articles/new_site/new_site.html",
    date: Date.UTC(2020, 11, 20),
    languages: [Language.english, Language.portuguese],
    mainTopic: Topic.meta,
    otherTopics: [Topic.design],
  },
  {
    index: 107,
    title: "Revisão com Amir Fragman",
    link: "/articles/revisao_amir/revisao_amir.html",
    date: Date.UTC(2020, 11, 5),
    languages: [Language.portuguese],
    mainTopic: Topic.go,
    otherTopics: [Topic.review, Topic.myYouTubeChannel],
  },
  {
    index: 106,
    title: "OGS Kbd Nav",
    link: "/articles/ogs_kbd_nav/ogs_kbd_nav.html",
    date: Date.UTC(2020, 10, 28),
    languages: [Language.english, Language.portuguese],
    mainTopic: Topic.productivity,
    otherTopics: [Topic.go, Topic.browserExtension, Topic.myYouTubeChannel],
  },
  {
    index: 105,
    title: "Tips and Advice on Go Etiquette",
    link: "/articles/go_etiquette/go_etiquette.html",
    date: Date.UTC(2020, 10, 22),
    languages: [Language.english, Language.portuguese],
    mainTopic: Topic.go,
    otherTopics: [Topic.psychology, Topic.myYouTubeChannel],
  },
  {
    index: 104,
    title: "YouTube Kbd Nav",
    link: "/articles/youtube_kbd_nav/youtube_kbd_nav.html",
    date: Date.UTC(2020, 8, 29),
    languages: [Language.english],
    mainTopic: Topic.productivity,
    otherTopics: [Topic.browserExtension, Topic.myYouTubeChannel],
  },
  {
    index: 103,
    title: "Recursion: Fibonacci in Go",
    link: "/articles/recursion_fibonacci_in_go/recursion_fibonacci_in_go.html",
    date: Date.UTC(2020, 7, 17),
    languages: [Language.english, Language.portuguese],
    mainTopic: Topic.go,
    otherTopics: [Topic.tsumego, Topic.math, Topic.myYouTubeChannel],
  },
  {
    index: 102,
    title: "Tradução de um Vídeo da BIBA Baduk",
    link: "/articles/traducao_biba/traducao_biba.html",
    date: Date.UTC(2020, 7, 16),
    languages: [Language.portuguese],
    mainTopic: Topic.go,
    otherTopics: [Topic.review, Topic.myYouTubeChannel],
  },
  {
    index: 101,
    title: "Etimologia da Palavra Carro",
    link: "/articles/etimologia_carro/etimologia_carro.html",
    date: Date.UTC(2020, 7, 11),
    languages: [Language.portuguese],
    mainTopic: Topic.language,
    otherTopics: [],
  },
  {
    index: 100,
    title: "Os Grandes Debates de Joseki: Aula com Thiago Sinji Ramos",
    link: "/articles/joseki_debates_sinji/joseki_debates_sinji.html",
    date: Date.UTC(2020, 7, 7),
    languages: [Language.portuguese],
    mainTopic: Topic.go,
    otherTopics: [Topic.books, Topic.joseki, Topic.myYouTubeChannel],
  },
  {
    index: 99,
    title: "Quote #3 - Martin Fowler on Good Code",
    link: "/articles/quote_3_fowler/quote_3_fowler.html",
    date: Date.UTC(2020, 5, 28),
    languages: [Language.english],
    mainTopic: Topic.programming,
    otherTopics: [Topic.productivity, Topic.quotes],
  },
  {
    index: 98,
    title: "DeepL: Traduza Meus Artigos",
    link: "/articles/deepl/deepl.html",
    date: Date.UTC(2020, 4, 20),
    languages: [Language.portuguese, Language.english, Language.french],
    mainTopic: Topic.language,
    otherTopics: [],
  },
  {
    index: 97,
    title: '"Less Code" Print Design',
    link: "/articles/less_code/less_code.html",
    date: Date.UTC(2020, 3, 19),
    languages: [Language.english],
    mainTopic: Topic.programming,
    otherTopics: [Topic.design],
  },
  {
    index: 96,
    title: "Print Designs for My Aunt",
    link: "/articles/design_aunt/design_aunt.html",
    date: Date.UTC(2020, 3, 18),
    languages: [Language.english],
    mainTopic: Topic.design,
    otherTopics: [],
  },
  {
    index: 95,
    title: "(My) Dart Katas",
    link: "/articles/dart_katas/dart_katas.html",
    date: Date.UTC(2020, 3, 11),
    languages: [Language.english],
    mainTopic: Topic.programming,
    otherTopics: [Topic.dart, Topic.flutter],
  },
  {
    index: 94,
    title: "Avoid Spaghetti Theming",
    link: "/articles/spaghetti_theming/spaghetti_theming.html",
    date: Date.UTC(2020, 3, 4),
    languages: [Language.english],
    mainTopic: Topic.uiUx,
    otherTopics: [Topic.programming, Topic.design, Topic.dart, Topic.flutter],
  },
  {
    index: 93,
    title: "Musashi, Craftsmanship and The Critical Moment",
    link: "/articles/musashi/musashi.html",
    date: Date.UTC(2020, 3, 1),
    languages: [Language.english],
    mainTopic: Topic.philosophy,
    otherTopics: [Topic.programming, Topic.design, Topic.go, Topic.sports],
  },
  {
    index: 92,
    title: "My Dad's Logo",
    link: "/articles/dad_logo/dad_logo.html",
    date: Date.UTC(2020, 3, 1),
    languages: [Language.english],
    mainTopic: Topic.design,
    otherTopics: [],
  },
  {
    index: 91,
    title: "A Weightlifting Logo",
    link: "/articles/weightlifting_logo/weightlifting_logo.html",
    date: Date.UTC(2020, 3, 1),
    languages: [Language.english],
    mainTopic: Topic.design,
    otherTopics: [Topic.sports, Topic.myYouTubeChannel],
  },
  {
    index: 90,
    title: "Anti Bullshit Bullshit Club",
    link: "/articles/anti_bullshit_logo/anti_bullshit_logo.html",
    date: Date.UTC(2020, 2, 17),
    languages: [Language.english],
    mainTopic: Topic.design,
    otherTopics: [Topic.comedy],
  },
  {
    index: 89,
    title: "DIY Minimalist Portrait",
    link: "/articles/diy_minimalist_portrait/diy_minimalist_portrait.html",
    date: Date.UTC(2020, 1, 26),
    languages: [Language.english],
    mainTopic: Topic.design,
    otherTopics: [Topic.comedy],
  },
  {
    index: 88,
    title: "Please Stop this Fallacy",
    link: "/articles/fallacy_against_communism/fallacy_against_communism.html",
    date: Date.UTC(2020, 1, 10),
    languages: [Language.english],
    mainTopic: Topic.logic,
    otherTopics: [Topic.politics, Topic.history, Topic.philosophy],
  },
  {
    index: 87,
    title: "My Twitter: @PFanaro",
    link: "/articles/my_twitter/my_twitter.html",
    date: Date.UTC(2020, 0, 20),
    languages: [Language.english],
    mainTopic: Topic.social,
    otherTopics: [Topic.meta],
  },
  {
    index: 86,
    title: "KG-LBS Converter",
    link: "/articles/kg_lbs_converter/kg_lbs_converter.html",
    date: Date.UTC(2019, 11, 30),
    languages: [Language.english],
    mainTopic: Topic.math,
    otherTopics: [Topic.sports, Topic.design],
  },
  {
    index: 85,
    title: "Universal Principles of Design",
    link:
      "/articles/universal_principles_design/universal_principles_design.html",
    date: Date.UTC(2019, 11, 2),
    languages: [Language.english],
    mainTopic: Topic.design,
    otherTopics: [Topic.uiUx],
  },
  {
    index: 84,
    title: "Quote #2 - Stalin on Elections",
    link: "/articles/quote_2_stalin/quote_2_stalin.html",
    date: Date.UTC(2019, 10, 18),
    languages: [Language.english],
    mainTopic: Topic.politics,
    otherTopics: [
      Topic.philosophy,
      Topic.logic,
      Topic.psychology,
      Topic.history,
      Topic.meta,
    ],
  },
  {
    index: 83,
    title: "Quote #1 - Dorothy Parker on What Writing Is",
    link: "/articles/quote_1_parker/quote_1_parker.html",
    date: Date.UTC(2019, 11, 2),
    languages: [Language.english],
    mainTopic: Topic.writing,
    otherTopics: [Topic.productivity, Topic.language, Topic.meta],
  },
  {
    index: 82,
    title: "Tetris Go",
    link: "/articles/tetris_go/tetris_go.html",
    date: Date.UTC(2019, 8, 7),
    languages: [Language.portuguese],
    mainTopic: Topic.go,
    otherTopics: [Topic.goVariants, Topic.myYouTubeChannel],
  },
  {
    index: 81,
    title: "Scrum (Part 2)",
    link: "/articles/scrum_2/scrum_2.html",
    date: Date.UTC(2019, 8, 3),
    languages: [Language.english],
    mainTopic: Topic.productivity,
    otherTopics: [Topic.psychology, Topic.programming],
  },
  {
    index: 80,
    title: "Simão Gonçalves [4-5d EGF] vs Philippe Fanaro [2k-2d KGS]",
    link:
      "/articles/simao_goncalves_vs_philippe_fanaro/simao_goncalves_vs_philippe_fanaro.html",
    date: Date.UTC(2019, 8, 1),
    languages: [Language.portuguese],
    mainTopic: Topic.go,
    otherTopics: [Topic.review, Topic.myYouTubeChannel],
  },
  {
    index: 79,
    title: "Scrum (Part 1)",
    link: "/articles/scrum_1/scrum_1.html",
    date: Date.UTC(2019, 7, 21),
    languages: [Language.english],
    mainTopic: Topic.productivity,
    otherTopics: [Topic.psychology, Topic.programming],
  },
  {
    index: 78,
    title: "Less Pain in the Office",
    link: "/articles/less_pain_office/less_pain_office.html",
    date: Date.UTC(2019, 7, 3),
    languages: [Language.english],
    mainTopic: Topic.health,
    otherTopics: [Topic.productivity, Topic.programming],
  },
  {
    index: 77,
    title: "My VS Code Settings",
    link: "/articles/my_vs_code_settings/my_vs_code_settings.html",
    date: Date.UTC(2019, 6, 28),
    languages: [Language.english],
    mainTopic: Topic.programming,
    otherTopics: [Topic.productivity],
  },
  {
    index: 76,
    title: "Fluent Forever",
    link: "/articles/fluent_forever/fluent_forever.html",
    date: Date.UTC(2019, 6, 4),
    languages: [Language.english],
    mainTopic: Topic.language,
    otherTopics: [Topic.productivity, Topic.psychology],
  },
  {
    index: 75,
    title: "Macunaíma",
    link: "/articles/macunaima/macunaima.html",
    date: Date.UTC(2019, 5, 21),
    languages: [Language.portuguese],
    mainTopic: Topic.literature,
    otherTopics: [Topic.language],
  },
  {
    index: 74,
    title: "Negative Language: WHY you should avoid it",
    link: "/articles/negative_language/negative_language.html",
    date: Date.UTC(2019, 6, 11),
    languages: [Language.english],
    mainTopic: Topic.psychology,
    otherTopics: [Topic.philosophy, Topic.meta, Topic.social],
  },
  {
    index: 73,
    title: "Say Hello to My AI Friend",
    link: "/articles/say_hello_to_my_ai_friend/say_hello_to_my_ai_friend.html",
    date: Date.UTC(2019, 4, 11),
    languages: [Language.portuguese, Language.english],
    mainTopic: Topic.go,
    otherTopics: [Topic.comedy, Topic.meta],
  },
  {
    index: 72,
    title: "Quase Morrendo | Tygem 3",
    link: "/articles/tygem_3/tygem_3.html",
    date: Date.UTC(2019, 4, 2),
    languages: [Language.portuguese],
    mainTopic: Topic.go,
    otherTopics: [Topic.myYouTubeChannel],
  },
  {
    index: 71,
    title: "Quadra Molhada? Sem problemas.",
    link: "/articles/quadra_molhada/quadra_molhada.html",
    date: Date.UTC(2019, 3, 30),
    languages: [Language.portuguese],
    mainTopic: Topic.comedy,
    otherTopics: [Topic.myYouTubeChannel],
  },
  {
    index: 70,
    title: "Cabeçada | Tygem 2",
    link: "/articles/tygem_2/tygem_2.html",
    date: Date.UTC(2019, 3, 12),
    languages: [Language.portuguese],
    mainTopic: Topic.go,
    otherTopics: [Topic.myYouTubeChannel],
  },
  {
    index: 69,
    title: "Grupos Fracos Para Todo Lado | Tygem 1",
    link: "/articles/tygem_1/tygem_1.html",
    date: Date.UTC(2019, 3, 3),
    languages: [Language.portuguese],
    mainTopic: Topic.go,
    otherTopics: [Topic.myYouTubeChannel],
  },
  {
    index: 68,
    title: "Formulário e Estatísticas sobre o Go Brasileiro",
    link: "/articles/estatisticas_go_br/estatisticas_go_br.html",
    date: Date.UTC(2019, 2, 26),
    languages: [Language.portuguese],
    mainTopic: Topic.go,
    otherTopics: [Topic.statistics],
  },
  {
    index: 67,
    title: "The Essential Guide to Keyboards",
    link: "/articles/kbd_guide/kbd_guide.html",
    date: Date.UTC(2019, 2, 20),
    languages: [Language.english],
    mainTopic: Topic.productivity,
    otherTopics: [Topic.programming, Topic.writing],
  },
  {
    index: 66,
    title: "Fundamentos de Go &mdash; Tsumegos Parte II",
    link: "/articles/tsumegos_2/tsumegos_2.html",
    date: Date.UTC(2019, 2, 19),
    languages: [Language.portuguese],
    mainTopic: Topic.go,
    otherTopics: [Topic.tsumego],
  },
  {
    index: 65,
    title: "Fundamentos de Go &mdash; Tsumegos Parte I",
    link: "/articles/tsumegos_1/tsumegos_1.html",
    date: Date.UTC(2019, 2, 11),
    languages: [Language.portuguese],
    mainTopic: Topic.go,
    otherTopics: [Topic.tsumego],
  },
  {
    index: 64,
    title: "The KDD 2009 Data Science Challenge",
    link: "/articles/kdd_2009/kdd_2009.html",
    date: Date.UTC(2019, 1, 27),
    languages: [Language.english],
    mainTopic: Topic.dataScience,
    otherTopics: [Topic.statistics, Topic.math],
  },
  {
    index: 63,
    title: "Mini-Jogos de Go",
    link: "/articles/mini_jogos_go/mini_jogos_go.html",
    date: Date.UTC(2019, 1, 12),
    languages: [Language.english],
    mainTopic: Topic.go,
    otherTopics: [],
  },
  {
    index: 62,
    title: "Some Interesting Go Statistics",
    link: "/articles/go_statistics/go_statistics.html",
    date: Date.UTC(2018, 11, 26),
    languages: [Language.english],
    mainTopic: Topic.go,
    otherTopics: [Topic.statistics],
  },
  {
    index: 61,
    title: "The Pocket Fuseki Encyclopedia",
    link: "/articles/fuseki_encyclopedia/fuseki_encyclopedia.html",
    date: Date.UTC(2018, 11, 24),
    languages: [Language.english],
    mainTopic: Topic.go,
    otherTopics: [Topic.fuseki],
  },
  {
    index: 60,
    title: "The Left Hand of Darkness, and SciFi",
    link: "/articles/left_hand_of_darkness/left_hand_of_darkness.html",
    date: Date.UTC(2018, 11, 20),
    languages: [Language.english],
    mainTopic: Topic.literature,
    otherTopics: [Topic.writing],
  },
  {
    index: 59,
    title: "Fundamentos de Go: Outros Fusekis",
    link: "/articles/outros_fusekis/outros_fusekis.html",
    date: Date.UTC(2018, 11, 10),
    languages: [Language.portuguese],
    mainTopic: Topic.go,
    otherTopics: [Topic.fuseki],
  },
  {
    index: 58,
    title: "Critique de Livre: Le Potentiel Érotique de Ma Femme",
    link: "/articles/potentiel_erotique/potentiel_erotique.html",
    date: Date.UTC(2018, 11, 4),
    languages: [Language.french, Language.english, Language.portuguese],
    mainTopic: Topic.literature,
    otherTopics: [Topic.writing],
  },
  {
    index: 57,
    title: "Fundamentos de Go: Fusekis com 3-4 Parte II",
    link: "/articles/fuseki_34_2/fuseki_34_2.html",
    date: Date.UTC(2018, 11, 3),
    languages: [Language.portuguese],
    mainTopic: Topic.go,
    otherTopics: [Topic.fuseki],
  },
  {
    index: 56,
    title:
      "Statistics: Paid Apps vs Free Apps? Expensive Wines vs Cheap Wines?",
    link: "/articles/statistics_apps_wines/statistics_apps_wines.html",
    date: Date.UTC(2018, 10, 27),
    languages: [Language.english],
    mainTopic: Topic.statistics,
    otherTopics: [Topic.dataScience],
  },
  {
    index: 55,
    title: "Fundamentos de Go: Fusekis com 3-4 Parte I",
    link: "/articles/fuseki_34_1/fuseki_34_1.html",
    date: Date.UTC(2018, 10, 26),
    languages: [Language.portuguese],
    mainTopic: Topic.go,
    otherTopics: [Topic.fuseki],
  },
  {
    index: 54,
    title: "Fundamentos de Go: Fusekis com 4-4",
    link: "/articles/fuseki_44/fuseki_44.html",
    date: Date.UTC(2018, 10, 21),
    languages: [Language.portuguese],
    mainTopic: Topic.go,
    otherTopics: [Topic.fuseki],
  },
  {
    index: 53,
    title: "On Korea: A Brief Summary of My Experience",
    link: "/articles/on_korea/on_korea.html",
    date: Date.UTC(2018, 10, 10),
    languages: [Language.english],
    mainTopic: Topic.go,
    otherTopics: [
      Topic.meta,
      Topic.psychology,
      Topic.philosophy,
      Topic.politics,
      Topic.history,
      Topic.social,
    ],
  },
  {
    index: 52,
    title: "Revisão: Philippe Fanaro [1d] vs Carlos Dutra [?k]",
    link: "/articles/revisao_carlos/revisao_carlos.html",
    date: Date.UTC(2018, 10, 3),
    languages: [Language.portuguese],
    mainTopic: Topic.go,
    otherTopics: [Topic.review],
  },
  {
    index: 51,
    title: "Ali Trump and the 40 Ghost Supporters",
    link: "/articles/trump_40_supporters/trump_40_supporters.html",
    date: Date.UTC(2018, 9, 30),
    languages: [Language.english],
    mainTopic: Topic.statistics,
    otherTopics: [Topic.dataScience, Topic.politics],
  },
  {
    index: 50,
    title: "Copa do Brasil 2018: Uyama Hissao [Kiin 7d]",
    link: "/articles/revisao_uyama/revisao_uyama.html",
    date: Date.UTC(2018, 9, 30),
    languages: [Language.portuguese],
    mainTopic: Topic.go,
    otherTopics: [Topic.review],
  },
  {
    index: 49,
    title: "My deeplearning.ai Experience",
    link: "/articles/deeplearning.ai/deeplearning.ai.html",
    date: Date.UTC(2018, 9, 20),
    languages: [Language.english],
    mainTopic: Topic.dataScience,
    otherTopics: [],
  },
  {
    index: 48,
    title: "Fundamentos de Go: Abertura ou Fuseki (Nível Básico)",
    link: "/articles/fuseki_basico/fuseki_basico.html",
    date: Date.UTC(2018, 9, 16),
    languages: [Language.portuguese],
    mainTopic: Topic.go,
    otherTopics: [Topic.fuseki],
  },
];
