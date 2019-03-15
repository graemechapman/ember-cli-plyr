import Ember from 'ember';

export default Ember.Component.extend({
  options: null,
  player: null,
  evented: true,

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

    // Bind events.
    if (this.get('evented') && player) {
      this.get('plyrEvents').forEach(eventName => {
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
      return plyr.setup(el, options)[0];
    } else {
      return plyr.setup(el)[0];
    }
  },

  willDestroyElement() {
    this._super(...arguments);
    const player = this.get('player');
    if (player) {
      player.destroy();
    }
  },

  // https://github.com/Selz/plyr#events
  plyrEvents: [
    'setup',
    'ready',
    'canplay',
    'canplaythrough',
    'emptied',
    'ended',
    'error',
    'loadeddata',
    'loadedmetadata',
    'loadstart',
    'pause',
    'play',
    'playing',
    'progress',
    'seeked',
    'seeking',
    'stalled',
    'timeupdate',
    'volumechange',
    'waiting',
    'enterfullscreen',
    'exitfullscreen',
    'captionsenabled',
    'captionsdisabled',
    'destroyed'
  ]
});
