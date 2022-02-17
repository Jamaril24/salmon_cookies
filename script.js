'use strict'


var hours = [ '6am', '7am', '8am', '9am', '10am', '11am', '12pm',
'1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm' ];


var Athens = {
 locationName: 'Athens',
 minCustomersPerHour: 2,
 maxCustomersPerHour: 5,
 avgCookiesPerSale: 3,
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


var Bend = { 
locationName: 'Bend',
minCustomersPerHour: 12,
maxCustomersPerHour: 27,
avgCookiesPerSale: 7,
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



var Portland = {
  locationName: 'Portland',
 minCustomersPerHour: 32,
 maxCustomersPerHour: 52,
 avgCookiesPerSale: 10,
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



var NewYork = { 
  locationName: 'NewYork',
 minCustomersPerHour: 21,
 maxCustomersPerHour: 64,
 avgCookiesPerSale: 7.3,
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

 var NewYork = {
  locationName: 'NewYork',
  minCustomersPerHour: 18,
  maxCustomersPerHour: 32,
  avgCookiesPerSale: 5.5,
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
  minCustomersPerHour: 32,
  maxCustomersPerHour: 78,
  avgCookiesPerSale: 8.4,
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


 


var allShops = [ Athens, Bend, Portland, NewYork, MexicoCity];
(function renderAllShops() {
 for (var i = 0; i < allShops.length; i++) {
   allShops[i].render();
 }


})();
renderAllShops();