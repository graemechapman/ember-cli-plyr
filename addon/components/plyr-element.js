import Ember from 'ember';

export default Ember.Component.extend({
  options: null,
  plyrInstance: null,
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
    const instance = this.setupPlyr();
    if (this.get('evented') && instance) {
      // Bind events.
      this.get('plyrEvents').forEach(eventName => {
        instance.on(eventName, e => {
          this.sendAction(eventName, e);
        });
      })
    }
    this.set('plyrInstance', instance);
  },

  willDestroyElement() {
    this._super(...arguments);
    const instance = this.get('plyrInstance');
    if (instance) {
      // Destroying also removes all events.
      instance.destroy();
    }
  },

  // Sets up a plyr instance on the component's element
  // and returns the instance.
  setupPlyr() {
    const options = this.get('options');
    let instances;
    if (options !== null) {
      instances = plyr.setup(this.element, options);
    } else {
      instances = plyr.setup(this.element);
    }
    return instances[0]
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
