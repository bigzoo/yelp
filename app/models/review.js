import DS from 'ember-data';

export default DS.Model.extend({
  description: DS.attr(),
  rating: DS.attr(),
  timeCreated: DS.attr(),
  restaurant: DS.belongsTo('restaurant',{async:true})

});
