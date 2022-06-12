"use strict";

function solveEquation(a, b, c) {
  let arr;
  let discriminant, squareRoot;

  arr = [];

  discriminant = b ** 2 - 4 * a * c;

  if(discriminant === 0) {
    squareRoot = - b / (2 * a);
    arr.push(squareRoot);
   }
   else {
     if (discriminant > 0) {
       console.log(Math.sqrt(discriminant));
       console.log(- b + Math.sqrt(discriminant));
       console.log(2 * a);
      squareRoot = (- b + Math.sqrt(discriminant)) / (2 * a);
      arr.push(squareRoot);
      squareRoot = (- b - Math.sqrt(discriminant)) / (2 * a);
      arr.push(squareRoot);
     }
   }
   // код для задачи №1 писать здесь
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  let dateYear, dateMonth, percent100;
  let dateString, numberYear, numberMonth, numberDay;
  let errorOutput;
 
  function checkDate(numberYear, numberMonth, numberDay) {
    let checkNewDate;
    checkNewDate = new Date(numberYear, numberMonth, numberDay);
    return checkNewDate.getFullYear() === numberYear && checkNewDate.getMonth() === numberMonth && checkNewDate.getDate() === numberDay;
  };
let str = '0';
  console.log(str.charCodeAt(0));
  
  if(percent > 0) {
    if((contribution >= 0) && (contribution.length > 0)) {
      if(amount > 0) {
        if (!isNaN(new Date(date).getTime())) {
          dateString = new Date(date).toISOString().slice(0, 10);
          numberYear = +dateString.slice(0, 4);
          numberMonth = +dateString.slice(5, 7);
          numberDay = +dateString.slice(8, 10);
        
          if((checkDate(numberYear, numberMonth, numberDay) == true) && (Date.parse(dateString) > Date.now())) {
            let dateNew;
            dateNew = new Date();
            dateYear = (date.getFullYear() - dateNew.getFullYear()) - 1;
            dateMonth = ((date.getMonth()) + (12 - dateNew.getMonth())) + dateYear * 12;
            percent100 = +percent / (100 * 12);
            totalAmount = dateMonth * (amount - contribution) * (percent100 + (percent100 / (((1 + percent100) ** dateMonth) - 1)));
            totalAmount = totalAmount.toFixed(2);
            console.log(totalAmount);
            alert(totalAmount);
          }
          else {
            errorOutput = '"дата окончания кредита меньше текущей даты"';
            alert(`Параметр даты окончания кредита содержит неправильное значение ${errorOutput}`); 
          };

        }
        else {
          errorOutput = '"не указали значение даты"';
          alert(`Параметр даты окончания кредита содержит неправильное значение ${errorOutput}`); 
        };

      }
      else {
        if(amount < 0) {
          errorOutput = '"ввели отрицательное значение"';
        }
        else {
          if(amount.charCodeAt(0) == 48) {
            errorOutput = '"ввели ноль "'; 
          }
          else {
            if((amount.length == 0) || (typeof(amount) === 'string')) {
              errorOutput = '"ввели строку или пустое значение"';  
            }
          }
        };

        alert(`Параметр суммы кредита содержит неправильное значение ${errorOutput}`);
      };

    }
    else {
      if(contribution < 0) {
        errorOutput = '"ввели отрицательное значение"';
      }
      else {
        if(typeof(contribution) === 'string') {
          errorOutput = '"ввели строку или пустое значение"'; 
        }
      };
      alert(`Параметр суммы первоначального взноса содержит неправильное значение ${errorOutput}`);
    };

  }
  else {
    if(percent < 0) {
      errorOutput = '"ввели отрицательное значение"';
    }
    else {
      if(percent.charCodeAt(0) == 48) {
        errorOutput = '"ввели ноль"'; 
      } 
      else {
        if((percent.length == 0) || typeof(percent) === 'string') {
          errorOutput = '"ввели строку или пустое значение"';  
        }
      }
    };
    alert(`Параметр процентной ставки содержит неправильное значение ${errorOutput}`);
  };


  return totalAmount;
}
