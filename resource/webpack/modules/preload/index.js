import Loader from './loader.js';

export default class Preload {
  constructor() {
    this.loader = new Loader();
    this.loader.init();

    this.count = 0;
    this.max = 0;
    this.images = document.querySelectorAll('img');
  }

  start() {
    const checkCount = ()=>{
      return (this.count === this.max);
    };

    this.max = this.images.length;

    [].forEach.call(this.images, (image)=>{
      let tmpImage = new Image();
      tmpImage.onload = ()=>{
        this.count ++;

        if (checkCount()) {
          this.loaded();
        }
      };
      tmpImage.onerror = ()=>{
        this.max --;

        if (checkCount()) {
          this.loaded();
        }
      };
      tmpImage.src = image.src;
    });
  }

  loaded() {
    this.loader.loaded();
  }
}