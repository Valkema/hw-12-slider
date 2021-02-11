class Slide {
  constructor(src, description) {
    this._src = src;
    this._description = description;
  }
  get src() {
    return this._src;
  }
  get description() {
    return this._description;
  }
}

class Carousel {
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
const carousel = new Carousel([
  new Slide(
    'https://scientificrussia.ru/data/shared/top_10/kartiny/141.jpg',
    'девочка с персиками'
  ),
  new Slide(
    'https://scientificrussia.ru/data/shared/top_10/kartiny/Die_drei_Bogatyr.jpg',
    'богатыри'
  ),
  new Slide(
    'https://artworld.ru/images/cms/content/catalog2/rodriguez_kartina_maslom_citrusovyj_fresh_apelsiny_jr190515.jpg',
    'апельсины'
  ),
  new Slide(
    'https://images.ua.prom.st/1036837498_kartiny-po-nomeram.jpg',
    'девушка с цветами'
  ),
  new Slide(
    'https://zvetnoe.ru/upload/images/blog/kartini/001.jpg',
    'ночь'
  ),
  new Slide(
    'https://walldeco.ua/img/gallery/126/thumbs/thumb_m_25841.jpg',
    'осенний вечер'
  ),
  new Slide(
    'https://walldeco.ua/img/gallery/122/thumbs/thumb_m_00025.jpg',
    'ван гог'
  ),
]);


const [prevButtonElem, nextButtonElem] = document.querySelectorAll('.btn');

const sliderClick = (direction = 'next') => (e) => {
  carousel.currentIndex =
    carousel[direction == 'next' ? 'nextIndex' : 'prevIndex'];
  updateSlide(direction);
};

prevButtonElem.addEventListener('click', sliderClick('prev'));
nextButtonElem.addEventListener('click', sliderClick('next'));

updateSlide();
function updateSlide(direction) {
  const prevSlide = carousel.prevSlide;
  const currentSlide = carousel.currentSlide;
  const nextSlide = carousel.nextSlide;

  const oldCurrentImg = document.querySelector('.prevImage').setAttribute('src', prevSlide.src);
  const nowCurrentImg = document.querySelector('.currentImage').setAttribute('src', currentSlide.src);
  const newCurrentImg = document.querySelector('.nextImage').setAttribute('src', nextSlide.src);


  oldCurrentImg.classList.replace('prevImage', 'currentImage');
  nowCurrentImg.classList.replace('currentImage', 'nextImage');
  newCurrentImg.classList.replace('nextImage', 'prevImage');

};