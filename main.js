(function(){
  'use strict';

  //question 1: in order to get the average price of all items the .reduce iterator
  //should be used. in order to pull the price out of the list use .price on any
  //of the things that you pull from the items array. Also, an object needs to be
  //returned for totalPrice as if it is not forced to be an object, previusPrice.price
  //will return a number when it is looking for an object and will be broken.


  var averagePrice = items.reduce(function(previousPrice, currentPrice, index, array){
    //console.log(previousPrice.price, currentPrice.price);
     var totalPrice = {'price': previousPrice.price + currentPrice.price};
     //console.log(totalPrice);
     return totalPrice;

   });
  console.log((averagePrice.price / items.length).toFixed(2));


  //question 2: in order to solve this problem we need to use a .filter iterator to
  //create a new array containing all items that are between $14 and $18.

  var definedPrice = items.filter(function(productPrice, index, array){
    if(productPrice.price>14.00 && productPrice.price<18.00){
      return true;
    }
  });
  console.log("Items that cost between $14.00 USD and $18.00 USD:\n", definedPrice);


  //question 3: in order to solve this problem we need to use a .filter iterator to
  //create a new array containing all items that have the currency_code GBP.


  var itemsInPounds = items.filter(function(productCurrency, index, array){
    if(productCurrency.currency_code === 'GBP'){
      return true;
    }
  });
  console.log(itemsInPounds[0].title, '£' + itemsInPounds[0].price);
  console.log(itemsInPounds);


  //question 4: in order to solve this problem we need to use a .filter iterator to
  //create a new array containing all items that are made of wood. We have to use
  //.indexOf to find the arrays within the item materials that contain the string
  //'wood'. If 'wood' exists at an index of 0 or more within the array true will be
  //returned.


  var itemsMadeOfWood = items.filter(function(productMaterials, index, array){
    var materials = productMaterials.materials;
    if(materials.indexOf('wood') >= 0){
      return true;
    }

  });

  var woodenItems = itemsMadeOfWood.forEach(function(woodMaterials){
      console.log(woodMaterials.title + ' is made of wood');

  });

  //question 5: in order to solve this problem we need to use a .filter iterator to
  //create a new array containing all items that have more than 8 materials.

  var numberOfMaterials = items.filter(function(productMaterials, index, array){
    var materials = productMaterials.materials;
    if(materials.length >= 8){
      return true;
    }

  });

  var typeOfMaterials = numberOfMaterials.forEach(function(materials, index, array){
    console.log(materials.title + ' has ' + materials.materials.length + ' materials:\n' + materials.materials);
  });

  //question 6: we need to use a filter to return each item that was made by
  //their seller by looking at the made_by item within the object and checking to
  //to see which one eaquals 'i_did'.

  var itemsMadeBySeller = items.filter(function(whoMade, index, array){
    if(whoMade.who_made === 'i_did'){
      return true;
    }

  });
    console.log(itemsMadeBySeller.length + ' items were made by their seller');

}());
