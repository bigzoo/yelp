import Ember from 'ember';
import moment from 'moment'

export default Ember.Component.extend({
  addNewReview: false,
  actions:{
    reviewFormShow(){
      this.set('addNewReview',true)
    },
    cancel(){
      this.set('description',''),
      this.set('rating',''),
      this.set('addNewReview',false)
    },
    reset(){
      this.set('description',''),
      this.set('rating','')
    },
    saveNewReview(){
      var params = {
        description: this.get('description'),
        rating: this.get('rating'),
        timeCreated: Date(),
        restaurant: this.get('restaurant')
      };
      this.set('description',''),
      this.set('rating',''),
      this.set('addNewReview',false),
      this.sendAction('saveNewReview',params)
    }
  }
});
