import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  category: DS.attr(),
  shortDescription: DS.attr(),
  description: DS.attr(),
  dateOpened: DS.attr(),
  website: DS.attr(),
  phone: DS.attr(),
  locationName: DS.attr(),
  locationLongitude: DS.attr(),
  locationLatitude: DS.attr(),
  reviews: DS.hasMany('review',{async:true})

});
