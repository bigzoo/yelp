import Ember from 'ember';

export default Ember.Component.extend({
  favoriteList: Ember.inject.service(),
  inFavorites: false,
  actions:{
    addToFavorites(restaurant){
      this.get('favoriteList').add(restaurant);
      this.set('inFavorites',true)
    },
    removeFromFavorites(restaurant){
      this.get('favoriteList').pop(restaurant);
      this.set('inFavorites',false)
    }
  }
});
