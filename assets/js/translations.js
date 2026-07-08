/**
 * Словарь переводов интерфейса (не контента!).
 * Контент самих тем (объяснения французских терминов) переводится
 * прямо в HTML через блоки data-lang="ru|en|fr" — см. pages/template-topic.html
 *
 * Чтобы добавить новый текст интерфейса:
 * 1. Придумайте ключ, например "myNewLabel"
 * 2. Добавьте перевод в ru / en / fr ниже
 * 3. В HTML используйте: <span data-i18n="myNewLabel">текст-заглушка</span>
 */
window.TRANSLATIONS = {
  ru: {
    brand: "Carnet",
    brandSuffix: "de français",
    navHome: "Главная",
    heroEyebrow: "Шпаргалка к экзамену",
    heroTitle: "Тетрадь по французскому",
    heroLead: "Все темы экзамена в одном месте: грамматика, лексика, устная и письменная часть. Собрано и структурировано для быстрого повторения.",

    catGrammarTitle: "Грамматика",
    catGrammarDesc: "Времена, спряжения, местоимения, предлоги",
    catVocabTitle: "Лексика по темам",
    catVocabDesc: "Слова и выражения по тематическим блокам",
    catSpeakingTitle: "Устная часть",
    catSpeakingDesc: "Фразы, клише и конструкции для говорения",
    catWritingTitle: "Письменная часть",
    catWritingDesc: "Коннекторы, шаблоны эссе и писем",
    catListeningTitle: "Аудирование",
    catListeningDesc: "Устойчивые конструкции и типичные ловушки",
    catTextsTitle: "Тексты и диалоги",
    catTextsDesc: "Примеры текстов с разбором",

    cardOpen: "Открыть →",
    footerText: "Личная шпаргалка к экзамену по французскому. Обновляется по мере подготовки.",
    backHome: "← На главную",
    notesTitle: "Заметки",
  },
  en: {
    brand: "Carnet",
    brandSuffix: "de français",
    navHome: "Home",
    heroEyebrow: "Exam cheat sheet",
    heroTitle: "French exam notebook",
    heroLead: "Every exam topic in one place: grammar, vocabulary, speaking and writing. Organised for quick review.",

    catGrammarTitle: "Grammar",
    catGrammarDesc: "Tenses, conjugations, pronouns, prepositions",
    catVocabTitle: "Vocabulary by topic",
    catVocabDesc: "Words and expressions grouped by theme",
    catSpeakingTitle: "Speaking",
    catSpeakingDesc: "Phrases, clichés and constructions for oral exam",
    catWritingTitle: "Writing",
    catWritingDesc: "Connectors, essay and letter templates",
    catListeningTitle: "Listening",
    catListeningDesc: "Set phrases and common traps",
    catTextsTitle: "Texts & dialogues",
    catTextsDesc: "Sample texts with breakdown",

    cardOpen: "Open →",
    footerText: "Personal cheat sheet for the French exam. Updated as I study.",
    backHome: "← Back to home",
    notesTitle: "Notes",
  },
  fr: {
    brand: "Carnet",
    brandSuffix: "de français",
    navHome: "Accueil",
    heroEyebrow: "Fiche de révision",
    heroTitle: "Carnet de révision",
    heroLead: "Tous les thèmes de l'examen réunis : grammaire, vocabulaire, expression orale et écrite. Organisé pour réviser vite.",

    catGrammarTitle: "Grammaire",
    catGrammarDesc: "Temps, conjugaisons, pronoms, prépositions",
    catVocabTitle: "Vocabulaire thématique",
    catVocabDesc: "Mots et expressions regroupés par thème",
    catSpeakingTitle: "Expression orale",
    catSpeakingDesc: "Phrases et tournures utiles à l'oral",
    catWritingTitle: "Expression écrite",
    catWritingDesc: "Connecteurs, modèles d'essai et de lettre",
    catListeningTitle: "Compréhension orale",
    catListeningDesc: "Tournures fréquentes et pièges classiques",
    catTextsTitle: "Textes et dialogues",
    catTextsDesc: "Exemples de textes commentés",

    cardOpen: "Ouvrir →",
    footerText: "Fiche personnelle pour l'examen de français. Mise à jour au fil des révisions.",
    backHome: "← Retour à l'accueil",
    notesTitle: "Notes",
  },
};
