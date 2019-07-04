import Component from '@ember/component';
import Plyr from 'plyr';

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

  willDestroyElement() {
    this._super(...arguments);
    const player = this.get('player');

    if (player) {
      player.destroy();
    }
  }
});
