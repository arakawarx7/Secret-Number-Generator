'use strict';
module.exports = function() {

 var sng = Math.floor((Math.random()*1000000)+1);
 function secretNumber(){
    return sng;
  }

  return secretNumber;

};
