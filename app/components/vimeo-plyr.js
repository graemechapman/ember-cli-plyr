import plyr from 'ember-cli-plyr/components/plyr-element';
import layout from 'ember-cli-plyr/templates/components/vimeo-plyr';
export default plyr.extend({
  layout,
  dataType: 'vimeo',
  attributeBindings: [ 'video_id:data-plyr-embed-id', 'dataType:data-plyr-provider' ]
});
