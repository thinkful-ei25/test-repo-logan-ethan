'use strict';

const turtleSteps = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];
turtleSteps.filter(numbers => numbers[0] >= 0 && numbers[1] >= 0);
turtleSteps.map(numbers => Math.abs(numbers[0]) + Math.abs(numbers[1]));
turtleSteps.forEach(numbers => console.log((Math.abs(numbers[0])) + Math.abs(numbers[1])));


console.log(turtleSteps.filter(numbers => numbers[0] >= 0 && numbers[1] >= 0));