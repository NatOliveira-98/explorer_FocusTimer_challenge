export default class Timer {
  constructor({ btns, sounds }) {
    this.btns = btns;
    this.sounds = sounds;

    this.minutesElement = document.getElementById('timer-minutes');
    this.secondsElement = document.getElementById('timer-seconds');

    this.minutes = Number(this.minutesElement.innerText);
    this.seconds = Number(this.secondsElement.innerText);
    this.countdown;
  }

  play() {
    this.startCounter();
    this.sounds.buttonPressed();
  }

  pause() {
    this.pauseCounter();
    this.sounds.buttonPressed();
  }

  startCounter() {
    this.countdown = setInterval(() => {
      const isFinished = this.minutes === 0 && this.seconds < 1;
      if (isFinished) {
        // to pause and reset
        this.pauseCounter();
        this.resetCounter();
        return;
      }

      if (this.seconds <= 0) {
        // countdown
        this.seconds = 60;
        this.minutes--;

        // change display text
        this.formatMinutes();
      }

      // countdown
      this.seconds--;

      // change display text
      this.formatSeconds();
    }, 1000);
  }

  pauseCounter() {
    clearInterval(this.countdown);
  }

  addFiveMinutes() {
    this.sounds.buttonPressed();

    if (this.minutes < 60) {
      if (this.minutes >= 54 && this.minutes <= 59) {
        this.minutes = 60;
        this.formatMinutes();

        this.seconds = 0;
        this.formatSeconds();
        return;
      }

      this.minutes += 5;
      this.formatMinutes();
      return;
    }
  }

  removeFiveMinutes() {
    this.sounds.buttonPressed();

    if (this.minutes > 0) {
      if (this.minutes <= 5 && this.minutes >= 1) {
        this.minutes = 0;
        this.formatMinutes();

        this.seconds = 0;
        this.formatSeconds();
        return;
      }

      this.minutes -= 5;
      this.formatMinutes();
      return;
    }
  }

  resetCounter() {
    this.resetMinutesToDefault();
    this.resetSecondsToDefault();
  }

  resetMinutesToDefault() {
    this.minutes = 25;
    this.minutesElement.innerText = this.minutes;
  }

  resetSecondsToDefault() {
    this.seconds = 0;
    this.secondsElement.innerText = this.seconds + '0';
  }

  formatMinutes() {
    this.minutesElement.innerText =
      this.minutes < 10 ? `0${this.minutes}` : this.minutes;
  }

  formatSeconds() {
    this.secondsElement.innerText =
      this.seconds < 10 ? `0${this.seconds}` : this.seconds;
  }
}
