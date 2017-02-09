import Ember from 'ember';

export default Ember.Component.extend({
  // Formats
  mp4:        "",
  webm:       "",
  captions:   "",
  poster:     "",
  mp3:        "",
  ogg:        "",
  video_id:   "",
  options:    null,
  plyrObject: null,
  evented:    true,
  didInsertElement() {
    this._super(...arguments);
    // this.$().attr('contenteditable', true);
    const options = this.get('options');
    if (options !== null) {
      plyr.setup(this, options);
    } else {
      plyr.setup(this);
    }
    // plyr.setup();
    this.set('plyrObject', this.element.plyr);

    if (this.get('evented') && this.get('plyrObject')) {
      const media = this.get('plyrObject').media;

      this.$(media).on('abort', (e) => {
        this.sendAction('abort', e);
      }).on('loadstart', (e) => {
        this.sendAction('loadstart', e);
      }).on('progess', (e) => {
        this.sendAction('progress', e);
      }).on('suspend', (e) => {
        this.sendAction('suspend', e);
      }).on('error', (e) => {
        this.sendAction('error', e);
      }).on('emptied', (e) => {
        this.sendAction('emptied', e);
      }).on('stalled', (e) => {
        this.sendAction('stalled', e);
      }).on('loadedmetadata', (e) => {
        this.sendAction('loadedmetadata', e);
      }).on('loadeddata', (e) => {
        this.sendAction('loadeddata', e);
      }).on('canplay', (e) => {
        this.sendAction('canplay', e);
      }).on('canplaythrough', (e) => {
        this.sendAction('canplaythrough', e);
      }).on('playing', (e) => {
        this.sendAction('playing', e);
      }).on('waiting', (e) => {
        this.sendAction('waiting', e);
      }).on('seeking', (e) => {
        this.sendAction('seeking', e);
      }).on('seeked', (e) => {
        this.sendAction('seeked', e);
      }).on('ended', (e) => {
        this.sendAction('ended', e);
      }).on('durationchange', (e) => {
        this.sendAction('durationchange', e);
      }).on('timeupdate', (e) => {
        this.sendAction('timeupdate', e);
      }).on('play', (e) => {
        this.sendAction('play', e);
      }).on('pause', (e) => {
        this.sendAction('pause', e);
      }).on('ratechange', (e) => {
        this.sendAction('ratechange', e);
      }).on('resize', (e) => {
        this.sendAction('resize', e);
      }).on('volumechange', (e) => {
        this.sendAction('volumechange', e);
      });
    }
  },
  willDestroyElement() {
    const plyrObject = this.get('plyrObject');
    if (plyrObject) {
      const media = plyrObject.media;

      this.$(media).off('abort loadstart progress suspend error emptied stalled ' +
        'loadedmetadata loadeddata canplay canplaythrough playing waiting ' +
        'seeking seeked ended durationchange timeupdate play pause ' +
        'ratechange resize volumechange');

      plyrObject.destroy();
    }
  }
});
