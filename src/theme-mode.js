export default function ThemeSwitcher() {
  const icon = document.getElementById('theme-switcher').firstElementChild;
  const body = document.body.classList;

  function verifyLastThemeUsed() {
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme == 'dark') {
      document.body.classList.add('dark-theme');
      icon.setAttribute('src', './assets/dark.svg');
    }
  }

  function setNewTheme() {
    let theme;

    if (body.contains('dark-theme')) {
      body.remove('dark-theme');
      icon.setAttribute('src', './assets/light.svg');
      theme = 'light';
      localStorage.setItem('theme', theme);

      return;
    }

    body.add('dark-theme');
    icon.setAttribute('src', './assets/dark.svg');
    theme = 'dark';

    localStorage.setItem('theme', theme);
  }

  return {
    verifyLastThemeUsed,
    setNewTheme,
  };
}
