import DS from 'ember-data';

const {attr,belongsTo,hasMany} = DS;

export default DS.Model.extend({
  name: attr('string'),
  channels: hasMany('light-channel'),
  fixture: belongsTo('light-fixture'),
});
