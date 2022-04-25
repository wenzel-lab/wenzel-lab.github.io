// Multilingual preference storage
// 2022 Vicente Parot
// Catholic University of Chile

  function lang_load() {
    var defaultlang = window.navigator.userLanguage || window.navigator.language;
    defaultlang = defaultlang.substring(0,2).toLowerCase();
    var storedlang = window.localStorage.getItem('localStoredLang');
    return (storedlang?storedlang:defaultlang);
  }

  function lang_click(clicked_lang) {
    // alert('lang_click(' + clicked_lang + ')');
    window.localStorage.setItem('localStoredLang', clicked_lang);
  }

