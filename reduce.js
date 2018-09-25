'use strict';

function decode(sentence){
  let arraySentence = sentence.split(' ');

  return arraySentence.reduce((words, word) => (word.length===3) ? words + ' ' : words + word[word.length - 1]
    .toUpperCase(),'');
  // {
  //   if(word.length === 3){
  //     return words + ' ';
  //   }
  //   return words + word[word.length - 1].toUpperCase();
  // }, '');
}

console.log(decode('noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest'));