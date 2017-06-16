import Ember from 'ember';

export default Ember.Component.extend({
  addNewRestaurant: false,
  actions:{
    restaurantFormShow(){
      this.set('addNewRestaurant',true)
    },
    cancel(){
      this.set('name',''),
      this.set('category',''),
      this.set('shortDescription',''),
      this.set('description',''),
      this.set('dateOpened',''),
      this.set('website',''),
      this.set('phone',''),
      this.set('locationName',''),
      this.set('locationLongitude',''),
      this.set('locationLongitude',''),
      this.set('image',''),
      this.set('addNewRestaurant',false)
    },
    reset(){
      this.set('name',''),
      this.set('category',''),
      this.set('shortDescription',''),
      this.set('description',''),
      this.set('dateOpened',''),
      this.set('website',''),
      this.set('phone',''),
      this.set('locationName',''),
      this.set('locationLongitude',''),
      this.set('locationLongitude',''),
      this.set('image','')
    },
    saveNewRestaurant(){
      var params = {
        name: this.get('name'),
        category: this.get('category'),
        shortDescription: this.get('shortDescription'),
        description: this.get('description'),
        dateOpened: this.get('dateOpened'),
        website: this.get('website'),
        phone: this.get('phone'),
        locationName: this.get('locationName'),
        locationLongitude: this.get('locationLongitude'),
        locationLatitude: this.get('locationLatitude'),
        image: this.get('image')
      };
      this.set('name',''),
      this.set('category',''),
      this.set('shortDescription',''),
      this.set('description',''),
      this.set('dateOpened',''),
      this.set('website',''),
      this.set('phone',''),
      this.set('locationName',''),
      this.set('locationLongitude',''),
      this.set('locationLongitude',''),
      this.set('addNewRestaurant',false),
      this.set('image'),
      this.sendAction('saveNewRestaurant',params)
    }
  }
});
