'use strict';
function max(numbers) {
  // your code here
  let maxNumber = 0;
  let i = 0;
  while (i < numbers.length){
    if (numbers[i] > maxNumber){
      maxNumber = numbers[i];
    }
    i++;
  }
  console.log(maxNumber);
}

function min(numbers) {
  // your code here
  let minNumber = 0;
  let i = 0;
  while (i < numbers.length){
    if (numbers[i] < minNumber){
      minNumber = numbers[i];
    }
    i++;
  }
  console.log(minNumber);
}

/* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/

// tests

max([-5, 28, 98, -20013, 0.7878, 22, 115]);
min([-5, 28, 98, -20013, 0.7878, 22, 115]);
