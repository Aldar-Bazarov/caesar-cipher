"use strict";

var ALPHABET = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

document.getElementById("btn").onclick = function () {
  var text = document.getElementById('controlInput1').value;
  var mask = document.getElementById('controlInput2').value;
  var result = encode(text, mask);
  debugger;
  document.getElementById('result').innerHTML = result;
};

var encode = function encode(originalString, mask) {
  var result = '';
  var maskCounter = 0;
  var lowerMask = mask.toLowerCase().replace(/ /g, '');

  for (var i = 0; i < originalString.length; i++) {
    var isUpper = originalString[i] == originalString[i].toUpperCase() ? true : false;
    var stringLetter = originalString[i].toLowerCase();
    var maskLetter = lowerMask[maskCounter];

    if (!ALPHABET.includes(stringLetter) || !ALPHABET.includes(maskLetter)) {
      result += stringLetter;
      maskCounter--;
    } else if (ALPHABET.indexOf(stringLetter) + ALPHABET.indexOf(maskLetter) < ALPHABET.length - 1) {
      result += isUpper ? ALPHABET[ALPHABET.indexOf(stringLetter) + ALPHABET.indexOf(maskLetter) + 1].toUpperCase() : ALPHABET[ALPHABET.indexOf(stringLetter) + ALPHABET.indexOf(maskLetter) + 1];
    } else {
      result += isUpper ? ALPHABET[ALPHABET.indexOf(stringLetter) + ALPHABET.indexOf(maskLetter) - ALPHABET.length + 1].toUpperCase() : ALPHABET[ALPHABET.indexOf(stringLetter) + ALPHABET.indexOf(maskLetter) - ALPHABET.length + 1];
    }

    maskCounter = maskCounter === lowerMask.length - 1 ? 0 : maskCounter + 1;
  }

  return result;
};