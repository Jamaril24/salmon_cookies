'use strict'


var hours = [ '6am', '7am', '8am', '9am', '10am', '11am', '12pm',
'1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm' ]


var Bend = {
 locationName: 'Bend',
 minCustomersPerHour: 23,
 maxCustomersPerHour: 65,
 avgCookiesPerSale: 6.3,
 customersEachHour: [],
 cookiesEachHour: [],
 totalDailyCookies: 0,
 calcCustomersEachHour: function () {
   for (var i = 0; i < hours.length; i++) {
     this.customersEachHour.push(random(this.minCustomersPerHour, this.maxCustomersPerHour));
   }
 },


 calcCookiesEachHour: function () {

   this.calcCustomersEachHour();
   for (var i = 0; i < hours.length; i++) {
     var oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale);
     this.cookiesEachHour.push(oneHour);
     this.totalDailyCookies += oneHour;
   }
 },

 render() {
   this.calcCookiesEachHour();
   var unorderedList = document.getElementById('Bend')

   for (var i = 0; i < hours.length; i++) {
     var listItem = document.createElement('li');
     listItem.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
     unorderedList.appendChild(listItem);
   }

   listItem = document.createElement('li');
   listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
   unorderedList.appendChild(listItem);
 }
};

// the minCustomersPerHour, maxCustomersPerHour, avgCookiesPerSale should all have different sales counts


// you may make these counts up and will also need to update where you "select" or "access" your HTML for each store

var Athens = { 
locationName: 'Athens',
minCustomersPerHour: 12,
maxCustomersPerHour: 43,
avgCookiesPerSale: 9,
customersEachHour: [],
cookiesEachHour: [],
totalDailyCookies: 0,
calcCustomersEachHour: function () {
  for (var i = 0; i < hours.length; i++) {
    this.customersEachHour.push(random(this.minCustomersPerHour, this.maxCustomersPerHour));
  }
},


calcCookiesEachHour: function () {

  this.calcCustomersEachHour();
  for (var i = 0; i < hours.length; i++) {
    var oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale);
    this.cookiesEachHour.push(oneHour);
    this.totalDailyCookies += oneHour;
  }


},


render() {
  this.calcCookiesEachHour();

  

  var unorderedList = document.getElementById('Athens')


  for (var i = 0; i < hours.length; i++) {
    var listItem = document.createElement('li');
    listItem.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
    unorderedList.appendChild(listItem);
  }


  listItem = document.createElement('li');
  listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
  unorderedList.appendChild(listItem);
}


};







var Paris = {
  locationName: 'paris',
 minCustomersPerHour: 17,
 maxCustomersPerHour: 52,
 avgCookiesPerSale: 11,
 customersEachHour: [],
 cookiesEachHour: [],
 totalDailyCookies: 0,
 calcCustomersEachHour: function () {
   for (var i = 0; i < hours.length; i++) {
     this.customersEachHour.push(random(this.minCustomersPerHour, this.maxCustomersPerHour));
   }
 },


 calcCookiesEachHour: function () {

   this.calcCustomersEachHour();
   for (var i = 0; i < hours.length; i++) {
     var oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale);
     this.cookiesEachHour.push(oneHour);
     this.totalDailyCookies += oneHour;
   }


 },


 render() {
   this.calcCookiesEachHour();

   

   var unorderedList = document.getElementById('Portland')


   for (var i = 0; i < hours.length; i++) {
     var listItem = document.createElement('li');
     listItem.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
     unorderedList.appendChild(listItem);
   }


   listItem = document.createElement('li');
   listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
   unorderedList.appendChild(listItem);
 }


};

 







var Portland = { 
  locationName: 'Portland',
 minCustomersPerHour: 18,
 maxCustomersPerHour: 79,
 avgCookiesPerSale: 4.1,
 customersEachHour: [],
 cookiesEachHour: [],
 totalDailyCookies: 0,
 calcCustomersEachHour: function () {
   for (var i = 0; i < hours.length; i++) {
     this.customersEachHour.push(random(this.minCustomersPerHour, this.maxCustomersPerHour));
   }
 },


 calcCookiesEachHour: function () {

   this.calcCustomersEachHour();
   for (var i = 0; i < hours.length; i++) {
     var oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale);
     this.cookiesEachHour.push(oneHour);
     this.totalDailyCookies += oneHour;
   }


 },


 render() {
   this.calcCookiesEachHour();

   

   var unorderedList = document.getElementById('Portland')


   for (var i = 0; i < hours.length; i++) {
     var listItem = document.createElement('li');
     listItem.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
     unorderedList.appendChild(listItem);
   }


   listItem = document.createElement('li');
   listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
   unorderedList.appendChild(listItem);
 }


};

var NewYork= {
  locationName: 'NewYork',
 minCustomersPerHour: 33,
 maxCustomersPerHour: 74,
 avgCookiesPerSale: 5.2,
 customersEachHour: [],
 cookiesEachHour: [],
 totalDailyCookies: 0,

 calcCustomersEachHour: function () {
   for (var i = 0; i < hours.length; i++) {
     this.customersEachHour.push(random(this.minCustomersPerHour, this.maxCustomersPerHour));
   }
 },


 calcCookiesEachHour: function () {

   this.calcCustomersEachHour();
   for (var i = 0; i < hours.length; i++) {
     var oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale);
     this.cookiesEachHour.push(oneHour);
     this.totalDailyCookies += oneHour;
   }


 },

 
 render() {
   this.calcCookiesEachHour();

   

   var unorderedList = document.getElementById('NewYork')


   for (var i = 0; i < hours.length; i++) {
     var listItem = document.createElement('li');
     listItem.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
     unorderedList.appendChild(listItem);
   }


   listItem = document.createElement('li');
   listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
   unorderedList.appendChild(listItem);
 }


};

var MexicoCity = { 
  locationName: 'MexicoCity',
 minCustomersPerHour: 13,
 maxCustomersPerHour: 18,
 avgCookiesPerSale: 4.6,
 customersEachHour: [],
 cookiesEachHour: [],
 totalDailyCookies: 0,
 calcCustomersEachHour: function () {
   for (var i = 0; i < hours.length; i++) {
     this.customersEachHour.push(random(this.minCustomersPerHour, this.maxCustomersPerHour));
   }
 },


 calcCookiesEachHour: function () {

   this.calcCustomersEachHour();
   for (var i = 0; i < hours.length; i++) {
     var oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale);
     this.cookiesEachHour.push(oneHour);
     this.totalDailyCookies += oneHour;
   }


 },


 render() {
   this.calcCookiesEachHour();

   

   var unorderedList = document.getElementById('MexicoCity')


   for (var i = 0; i < hours.length; i++) {
     var listItem = document.createElement('li');
     listItem.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
     unorderedList.appendChild(listItem);
   }


   listItem = document.createElement('li');
   listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
   unorderedList.appendChild(listItem);
 }


};


function random(min, max) {


 // TODO: "floor" this random number generator


 return Math.random() * (max - min + 1) + min;


}









var allShops = [ Athens, Bend, Portland, NewYork, MexicoCity];
(function renderAllShops() {
 for (var i = 0; i < allShops.length; i++) {
   allShops[i].render();
 }


})();
renderAllShops();

