"use strict";

function solveEquation(a, b, c) {
  let arr;
  let discriminant, squareRoot;

  arr = [];

  discriminant = b ** 2 - 4 * a * c;

  if (discriminant === 0) {
    squareRoot = -b / (2 * a);
    arr.push(squareRoot);
  } else {
    if (discriminant > 0) {
      console.log(Math.sqrt(discriminant));
      console.log(-b + Math.sqrt(discriminant));
      console.log(2 * a);
      squareRoot = (-b + Math.sqrt(discriminant)) / (2 * a);
      arr.push(squareRoot);
      squareRoot = (-b - Math.sqrt(discriminant)) / (2 * a);
      arr.push(squareRoot);
    }
  }
  // код для задачи №1 писать здесь
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  let errorOutput;
  let res = "";

  function checkValue(value, txt, need = true) {
    //if (need) {
    if (value === "" && need) {
      res = `Поле "${txt}" не заполнено`;
    } else if (value < 0) {
      res = `В поле "${txt}" ввели значение меньше 0`;
    } else if (value == 0 && need) {
      res = `В поле "${txt}" ввели 0`;
    } else if (isNaN(value)) {
      res = `В поле "${txt}" ввели текст`;
    }
    return res;
    //}
  }

  checkValue(percent, "Процентная ставка"); // проверка поля "Процентная ставка"
  if (res) return res;
  checkValue(contribution, "Начальный взнос", false); // проверка поля "Начальная взнос"
  if (res) return res;
  checkValue(amount, "Сумма ипотеки"); // проверка поля "Сумма ипотеки"
  if (res) return res;

  // проверка поля "Дата"
  let now = new Date();
  now = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  let today = new Date(date);

  if (today == "Invalid Date") {
    res = 'Поле "Срок ипотеки" не заполнено';
  } else if (today < now) {
    res = "Срок ипотеки меньше текущей даты";
  } else if (
    today.getDate() === now.getDate() &&
    today.getMonth() === now.getMonth() &&
    today.getFullYear() === now.getFullYear()
  ) {
    res = "Срок ипотеки равна текущей дате";
  }
  if (res) return res;

  let S = amount - contribution; // тело кредита loanBody
  let P = percent / 12 / 100;
  let dateNow = new Date();
  let n =
    (date.getFullYear() - dateNow.getFullYear()) * 12 +
    (date.getMonth() - dateNow.getMonth());

  if (n > 0) {
    let payment = S * (P + P / ((1 + P) ** n - 1)); // ежемесячный платеж
    totalAmount = parseFloat((payment * n).toFixed(2));
  } else {
    return "Срок ипотеки меньше месяца";
  }

  //console.log(totalAmount);
  return totalAmount;
}
