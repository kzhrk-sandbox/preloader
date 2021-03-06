let polyfilled = false;

if(typeof window !=="undefined" && typeof window.CustomEvent !== "function") {

  function CustomEvent ( event, params = { bubbles: false, cancelable: false, detail: undefined } ) {
    let evt = document.createEvent( 'CustomEvent' );
    evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
    return evt;
  }

  CustomEvent.prototype = window.Event.prototype;

  window.CustomEvent = CustomEvent;

  polyfilled = true;

};

export default polyfilled;