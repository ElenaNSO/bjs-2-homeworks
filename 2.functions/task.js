// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  min = max = arr[0];
  sum = 0;
  
  for(let i = 0; i < arr.length; i++){
    if(arr[i] < min) {
      min = arr[i];
      sum = sum + arr[i];
    }
    else {
      if(arr[i] > max) {
        max = arr[i];
        sum = sum + arr[i];
      }
      else {
        sum = sum + arr[i];
      }
    }
  };

  avg = sum / arr.length;
  avg = +avg.toFixed(2);
    
  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum;
  sum = 0;
  
  for(let i=0; i< arr.length; i++){
    sum = sum + arr[i];
  }
  
  return sum;
}

function makeWork(arrOfArr, func) {
  let max;
  max = 0;

  for(let i = 0; i < arrOfArr.length; i++){
    
    if(func(arrOfArr[i]) > max) {
      max = func(arrOfArr[i]);
    }
  };
 
  return max;
}

// Задание 3
function worker2(arr) {
  
    let min, max, difference;
    min = max = arr[0];
    difference = 0;
    
    for(let i = 0; i < arr.length; i++){
      if(arr[i] < min) {
        min = arr[i];
     }
      else {
        if(arr[i] > max) {
          max = arr[i];
        }
      }
    };
  
    difference = Math.abs(max - min);
      
    return difference;
   // Ваш код
}
