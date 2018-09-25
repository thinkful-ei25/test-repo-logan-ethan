'use strict';

function hazardWarningCreator(typeOfWarning){
  let warningCounter = 0;
  return function(location){
    warningCounter++;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    if(warningCounter === 1){
      console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time today!`);
    } else {
      console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
    }
  };
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const earthquake = hazardWarningCreator('Fissures on the Road');
const tsunami = hazardWarningCreator('Water on the road');

rocksWarning('Main St and Pacific Ave');
earthquake('Fake St');
tsunami('Water St');
rocksWarning('Mountain St');