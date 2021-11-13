const config = {
    module: 'HeartBeat',
    counter: 0,
    testType: 'apiTests',
};

function checkHeartBeat(configObj = {}) {
    return configObj.module;
}
checkHeartBeat();


function extendConfig(key, value, obj = {}) {
    obj[key] = value;
    return obj;
}

function printTestResult(testConfig) {

    extendConfig('passed', true, testConfig);
    extendConfig('test', 'done', testConfig);
    extendConfig('success', true, testConfig);  

    return testConfig;
}

const result = printTestResult(config);

// console.info('Config final version: ', config);

const testArray = [42];

// value1, value2, array
const extendArray = (value1, value2, arr = []) => {
    arr.push(value1, value2);
    return arr;
}

// console.log(extendArray(21, 55, testArray));

let arr = ['Oksana'];
function extendArr(value1, value2, arr){
 arr.push(value1, value2);
  return arr;
}
// console.log(extendArr(1996, 'Lviv', arr));
function calculateFigureArea(figureType, a, b) {
    switch (figureType) {
      case "square":
          return a * a;
      case "circle":
          return a * a * Math.PI;
      case "rectangle":
          return a * b;
      default: {
        return "I can not calculate this figure";
      }
    }
}

console.log(calculateFigureArea('circle', 5));

