"use strict";
export default  class Carousel {
    constructor(slides, currentIndex = 0) {
      this._slides = slides;
      this._currentIndex = currentIndex;
    }
    get currentIndex() {
      return this._currentIndex;
    }
    set currentIndex(value) {
      if (typeof value !== 'number') throw new TypeError();
      if (
        !Number.isSafeInteger(value) ||
        value < 0 ||
        value >= this._slides.length
      )
        throw new RangeError();
      this._currentIndex = value;
    }
    get currentSlide() {
      return this._slides[this._currentIndex];
    }
    get nextSlide() {
      return this._slides[this.nextIndex];
    }
    get prevSlide() {
      return this._slides[this.prevIndex];
    }
  
    get nextIndex() {
      return (this._currentIndex + 1) % this._slides.length;
    }
    get prevIndex() {
      return (this._currentIndex - 1 + this._slides.length) % this._slides.length;
    }
  }

  