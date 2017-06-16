import Ember from 'ember';

export default Ember.Route.extend({
  favoriteList: Ember.inject.service(),
  inFavorites: false,
  model(params){
    return this.store.findRecord('restaurant',params.restaurant_id)
  },
  actions:{
    saveNewReview(params){
      var newReview = this.store.createRecord('review',params);
      var restaurant = params.restaurant;
      restaurant.get('reviews').addObject(newReview);
      newReview.save().then(function() {
        return restaurant.save();
      });
      this.transitionTo('restaurant',restaurant);
    },
    addToFavorites(restaurant){
      this.get('favoriteList').add(restaurant);
      this.set('inFavorites',true)
    },
    removeFromFavorites(restaurant){
      this.get('favoriteList').pop(restaurant);
    }
  }
});
