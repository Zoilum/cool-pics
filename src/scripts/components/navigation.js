import { getRandomImage, setImgSrc, showElem, hideElem, setSpinner } from "../utils/index.js";

export default class Navigation {
  constructor(container) {
    this.container = container;
    this.img = this.container && this.container.querySelector('img');
    this.currentImage = '';
    this.next = this.container && this.container.querySelector('.arrow-right')
    this.prev = this.container && this.container.querySelector('.arrow-left')
    this.imgIndex = 0;
    this.images = [];
  }

  async getImage() {
    this.currentImage = await getRandomImage();
    return this.currentImage;
  }

  async nextImage() {
    ++this.imgIndex;
    let nextImg = this.images[this.imgIndex] ? this.images[this.imgIndex] : await this.getNewImage();
    setImgSrc(this.img, nextImg);
  }

  async getNewImage() {
    const newImg = await this.getImage();
    this.images = [...this.images, newImg];
    return newImg;
  }

  previousImage() {
    --this.imgIndex;
    setImgSrc(this.img, this.images[this.imgIndex]);
  }

  setEventListeners() {
    this.next.addEventListener('click', async() => {
      const done = await this.nextImage();
      showElem(this.prev);
    });
    this.prev.addEventListener('click', () => {
      this.previousImage();
      if (this.imgIndex === 0) {
        hideElem(this.prev);
      }
    })
    this.img.addEventListener('load', () => {
      setSpinner(false);
    })
  }

  render() {
    this.setEventListeners();
    this.nextImage();
  }
}
