import Preload from './modules/preload';
import {enablePassiveEventListeners} from './helper/util';

const options = enablePassiveEventListeners() ? {
  passive: true
} : false;

window.addEventListener('load', ()=>{
  const preload = new Preload();

  preload.start();

}, options);
