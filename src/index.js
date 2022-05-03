import Timer from './Timer.js';
import Sounds from './sounds.js';
import ThemeSwitcher from './theme-mode.js';

const btns = {
  toggleTheme: document.getElementById('theme-switcher'),

  btnPlay: document.getElementById('play'),
  btnStop: document.getElementById('stop'),
  btnAdd: document.getElementById('add-5-min'),
  btnRemove: document.getElementById('remove-5-min'),

  sounds: document.querySelectorAll('.sound'),
};

const dependencies = {
  btns,
  sounds: Sounds(),
};

const timer = new Timer(dependencies);
const sounds = Sounds();
const theme = ThemeSwitcher();

// EVENTS

btns.toggleTheme.addEventListener(
  'DOMContentLoaded',
  theme.verifyLastThemeUsed(),
);
btns.toggleTheme.addEventListener('click', () => theme.setNewTheme());

btns.btnPlay.addEventListener('click', () => timer.play());
btns.btnStop.addEventListener('click', () => timer.pause());
btns.btnAdd.addEventListener('click', () => timer.addFiveMinutes());
btns.btnRemove.addEventListener('click', () => timer.removeFiveMinutes());

btns.sounds.forEach(btn => btn.addEventListener('click', sounds.playAudio));
