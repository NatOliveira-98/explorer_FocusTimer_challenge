export default function Sounds() {
  const btnPressed = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true',
  );
  const timeEnd = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true',
  );

  function buttonPressed() {
    btnPressed.play();
  }

  function timeEnded() {
    timeEnd.play();
  }

  function playAudio(btn) {
    // reset
    stopAllAudios();
    resetAllIconsToDefault();

    // single btn
    playBgAudio(btn);

    const pause = btn.currentTarget.querySelector('.pause-icon');
    if (btn.target === pause) {
      pauseBgAudio(btn);
      return;
    }
  }

  function playBgAudio(item) {
    const audio = item.currentTarget.firstElementChild;
    const input = item.currentTarget.querySelector('input[type="range"]');

    audio.play();
    audio.volume = 0.5;

    // new volume
    audio.volume = input.value / 100;

    item.currentTarget.classList.add('active-sound');
    showPauseIcon(item);
  }

  function pauseBgAudio(item) {
    const audio = item.currentTarget.firstElementChild;

    audio.pause();
    audio.volume = 0;

    item.currentTarget.classList.remove('active-sound');
    showDefaultIcon(item);
  }

  function stopAllAudios() {
    const allAudios = document.querySelectorAll('audio');

    allAudios.forEach(audio => {
      audio.pause();
    });
  }

  function showDefaultIcon(item) {
    const defaultIcon = item.currentTarget.querySelector('.default-icon');
    const pauseIcon = item.currentTarget.querySelector('.pause-icon');
    const volumeSlider = item.currentTarget.querySelector('.volume-slider');

    defaultIcon.classList.remove('hidden');
    pauseIcon.classList.add('hidden');
    volumeSlider.setAttribute('value', '00');
  }

  function showPauseIcon(item) {
    const defaultIcon = item.currentTarget.querySelector('.default-icon');
    const pauseIcon = item.currentTarget.querySelector('.pause-icon');
    const volumeSlider = item.currentTarget.querySelector('.volume-slider');

    defaultIcon.classList.add('hidden');
    pauseIcon.classList.remove('hidden');
    volumeSlider.setAttribute('value', '50');
  }

  function resetAllIconsToDefault() {
    const allBtns = document.querySelectorAll('.sound');

    allBtns.forEach(btn => {
      btn.classList.remove('active-sound');
      btn.querySelector('.default-icon').classList.remove('hidden');
      btn.querySelector('.pause-icon').classList.add('hidden');
      btn.querySelector('.volume-slider').setAttribute('value', '00');
    });
  }

  return {
    buttonPressed,
    timeEnded,
    playAudio,
  };
}
