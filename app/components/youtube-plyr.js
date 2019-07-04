import plyr from 'ember-cli-plyr/components/plyr-element';
import layout from 'ember-cli-plyr/templates/components/youtube-plyr';
export default plyr.extend({
  layout,
  dataType: 'youtube',
  attributeBindings: [ 'video_id:data-plyr-embed-id', 'dataType:data-plyr-provider' ]
});
