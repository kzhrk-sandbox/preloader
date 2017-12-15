import mustache from 'mustache';
import loaderTemplate from './loader.pug';
import loaderCss from './loader.scss';

import {getTransitionendName, enablePassiveEventListeners} from '../../helper/util';

const options = enablePassiveEventListeners() ? {
  passive: true
} : false;

export default class Loader {
  constructor() {
    this.loaderHtml = mustache.render(loaderTemplate(), loaderCss);
  }

  init() {
    // append loader
    document.body.insertAdjacentHTML('beforeend', this.loaderHtml);

    // get loader element
    this.loaderWrapper = document.querySelector(`.${loaderCss['loader-wrapper']}`);
    this.loaderLeft = document.querySelector(`.${loaderCss['loader-left']}`);
  }

  loaded() {
    const transitionName = getTransitionendName();

    if (transitionName) {
      this.loaderLeft.addEventListener(transitionName, this.remove.bind(this), options);
    }
    else {
      setTimeout(this.remove.bind(this), 300);
    }

    document.body.classList.add(loaderCss.loaded);
  }

  remove() {
    this.loaderWrapper.parentNode.removeChild(this.loaderWrapper);
  }
}
