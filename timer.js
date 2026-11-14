(() => {
  'use strict';
  class QuizTimer {
    constructor({ onTick, now = () => performance.now(), schedule = (fn, ms) => setTimeout(fn, ms), cancel = id => clearTimeout(id) }) {
      this.onTick = onTick;
      this.now = now;
      this.schedule = schedule;
      this.cancel = cancel;
      this.handle = null;
      this.running = false;
      this.onExpire = null;
      this.remaining = 0;
    }
    start(milliseconds, onExpire) {
      this.stop();
      this.remaining = milliseconds;
      this.onExpire = onExpire;
      this.resume();
    }
    tick() {
      this.handle = null;
      if (!this.running) return;
      this.remaining = Math.max(0, this.deadline - this.now());
      this.onTick(this.remaining);
      if (!this.remaining) {
        this.running = false;
        const callback = this.onExpire;
        this.onExpire = null;
        callback?.();
      } else this.handle = this.schedule(() => this.tick(), Math.min(100, this.remaining));
    }
    pause() {
      if (!this.running) return;
      this.remaining = Math.max(0, this.deadline - this.now());
      this.running = false;
      this.cancel(this.handle);
      this.handle = null;
      this.onTick(this.remaining);
    }
    resume() {
      if (this.running || !this.onExpire) return;
      this.running = true;
      this.deadline = this.now() + this.remaining;
      this.tick();
    }
    stop() {
      this.cancel(this.handle);
      this.handle = null;
      this.running = false;
      this.onExpire = null;
      this.remaining = 0;
    }
  }
  window.QuizTimer = QuizTimer;
})();
