/**
 * Переключение языка интерфейса и контента.
 * Ничего менять тут не нужно — просто подключите этот файл на каждой странице
 * ПОСЛЕ translations.js.
 */
(function () {
  const STORAGE_KEY = "cheatsheet-lang";
  const DEFAULT_LANG = "ru";
  const SUPPORTED = ["ru", "en", "fr"];

  function applyLanguage(lang) {
    if (!SUPPORTED.includes(lang)) lang = DEFAULT_LANG;

    document.documentElement.setAttribute("lang", lang);

    // Показать/скрыть контентные блоки data-lang="ru|en|fr"
    document.querySelectorAll("[data-lang]").forEach((el) => {
      const isMatch = el.getAttribute("data-lang") === lang;
      el.style.display = isMatch ? (el.dataset.displayAs || "") : "none";
    });

    // Обновить текст интерфейса по словарю translations.js
    const dict = (window.TRANSLATIONS && window.TRANSLATIONS[lang]) || {};
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    // Подсветить активную кнопку переключателя
    document.querySelectorAll(".lang-switch [data-set-lang]").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-set-lang") === lang);
    });

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* localStorage недоступен (например, приватный режим) — не критично */
    }
  }

  function initLanguage() {
    let saved = DEFAULT_LANG;
    try {
      saved = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
    } catch (e) {
      /* игнорируем */
    }

    applyLanguage(saved);

    document.querySelectorAll(".lang-switch [data-set-lang]").forEach((btn) => {
      btn.addEventListener("click", () => applyLanguage(btn.getAttribute("data-set-lang")));
    });
  }

  document.addEventListener("DOMContentLoaded", initLanguage);
})();
