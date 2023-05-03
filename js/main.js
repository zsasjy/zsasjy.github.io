/* global function */

window.addEventListener('DOMContentLoaded', () => {

  Global.themeInfo = {
    theme: `Redefine v${Global.theme_config.version}`,
    author: 'EvanNotFound',
    repository: 'https://github.com/EvanNotFound/hexo-theme-redefine'
  }

  Global.localStorageKey = 'Global-THEME-STATUS';

  Global.styleStatus = {
    isExpandPageWidth: false,
    isDark: false,
    fontSizeLevel: 0,
    isOpenPageAside: true
  }

  // print theme base info
  Global.printThemeInfo = () => {
    console.log('欢迎访问我的博客')
  }

  // set styleStatus to localStorage
  Global.setStyleStatus = () => {
    localStorage.setItem(Global.localStorageKey, JSON.stringify(Global.styleStatus));
  }

  // get styleStatus from localStorage
  Global.getStyleStatus = () => {
    let temp = localStorage.getItem(Global.localStorageKey);
    if (temp) {
      temp = JSON.parse(temp);
      for (let key in Global.styleStatus) {
        Global.styleStatus[key] = temp[key];
      }
      return temp;
    } else {
      return null;
    }
  }

  Global.refresh = () => {
    Global.initUtils();
    navbarShrink.init();
    Global.initModeToggle();
    Global.initBackToTop();
    if (Global.theme_config.home_banner.subtitle.text.length !== 0) {
      Global.initTyped('subtitle');
    }

    if (Global.theme_config.plugins.mermaid.enable === true) {
      Global.initMermaid();
    }

    if (Global.theme_config.navbar.search.enable === true) {
      Global.initLocalSearch();
    }

    if (Global.theme_config.articles.code_block.copy === true) {
      Global.initCopyCode();
    }

    if (Global.theme_config.articles.lazyload === true) {
      Global.initLazyLoad();
    }
  }

  Global.printThemeInfo();
  Global.refresh();
});
