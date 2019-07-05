import Component from '@ember/component';
import Plyr from 'plyr';


// https://github.com/sampotts/plyr#events
const plyrEvents = [
  'canplay',
  'canplaythrough',
  'captionsdisabled',
  'captionsenabled',
  'controlshidden',
  'controlsshown',
  'cuechange',
  'emptied',
  'ended',
  'enterfullscreen',
  'error',
  'exitfullscreen',
  'languagechange',
  'loadeddata',
  'loadedmetadata',
  'loadstart',
  'pause',
  'play',
  'playing',
  'progress',
  'qualitychange',
  'ratechange',
  'ready',
  'seeked',
  'seeking',
  'stalled',
  'statechange',
  'timeupdate',
  'volumechange',
  'waiting'
];

export default Ember.Component.extend({
  tagName: 'div',
  attributeBindings: [ 'controls', 'crossorigin' ],
  controls: true,
  crossorigin: true,
  options: null,
  player: null,

  // formats
  mp4: '',
  webm: '',
  captions: '',
  poster: '',
  mp3: '',
  ogg: '',
  video_id: '',

  didInsertElement() {
    this._super(...arguments);
    let player = this.setupPlyr(this.element);
    this.set('player', player);

    // Bind events, these get unbound automatically when we call player.destroy
    if (this.get('evented') && player) {
      plyrEvents.forEach(eventName => {
        player.on(eventName, e => {
          Ember.tryInvoke(this, eventName, [e]);
        });
      })
    }
  },

  // Sets up a plyr player on the component's element
  // and returns the player.
  setupPlyr(el) {
    const options = this.get('options');
    if (options !== null) {
      return new Plyr(el, options);
    } else {
      return new Plyr(el);
    }
  },

  willDestroy() {
    this._super(...arguments);
    const player = this.get('player');

    if (player) {
      player.destroy();
    }
  }
});
