describe("Домашнее задание к занятию 1. «Основные понятия»", () => {
  describe("Задача №1", () => {
    it("должна возвращать 2 корня уравнения", () => {
      expect(solveEquation(1, 5, 4)).toEqual([-1, -4]);
    });

    it("должна возвращать 1 корень уравнения", () => {
      expect(solveEquation(1, 2, 1)).toEqual([-1]);
    });

    it("должна вернуть пустой массив", () => {
      expect(solveEquation(1, 2, 10)).toEqual([]);
    });
  });

  describe("Задача №2. Функция должна:", () => {
    it("возвращать строку c названием ошибки, если неверно передали первый параметр", () => {
      const nextYearDate = new Date(
        new Date().setFullYear(new Date().getFullYear() + 3)
      );
      const percent = "";
      expect(calculateTotalMortgage(percent, 0, 10000, nextYearDate)).toEqual(
        `Поле "Процентная ставка" не заполнено`
      );
    });
    it("возвращать строку c названием ошибки, если неверно передали первый параметр", () => {
      const nextYearDate = new Date(
        new Date().setFullYear(new Date().getFullYear() + 3)
      );
      const percent = -10;
      expect(calculateTotalMortgage(percent, 0, 10000, nextYearDate)).toEqual(
        `В поле "Процентная ставка" ввели значение меньше 0`
      );
    });
    it("возвращать строку c названием ошибки, если неверно передали первый параметр", () => {
      const nextYearDate = new Date(
        new Date().setFullYear(new Date().getFullYear() + 3)
      );
      const percent = 0;
      expect(calculateTotalMortgage(percent, 0, 10000, nextYearDate)).toEqual(
        `В поле "Процентная ставка" ввели 0`
      );
    });
    it("возвращать строку c названием ошибки, если неверно передали первый параметр", () => {
      const nextYearDate = new Date(
        new Date().setFullYear(new Date().getFullYear() + 3)
      );
      const percent = "test";
      expect(calculateTotalMortgage(percent, 0, 10000, nextYearDate)).toEqual(
        `В поле "Процентная ставка" ввели текст`
      );
    });

    //////////////////

    it("возвращать строку c названием ошибки, если неверно передали второй параметр", () => {
      const nextYearDate = new Date(
        new Date().setFullYear(new Date().getFullYear() + 3)
      );
      const contribution = -10;
      expect(
        calculateTotalMortgage(15, contribution, 10000, nextYearDate)
      ).toEqual(`В поле "Начальный взнос" ввели значение меньше 0`);
    });
    it("возвращать строку c названием ошибки, если неверно передали второй параметр", () => {
      const nextYearDate = new Date(
        new Date().setFullYear(new Date().getFullYear() + 3)
      );
      const contribution = "test";
      expect(
        calculateTotalMortgage(15, contribution, 10000, nextYearDate)
      ).toEqual(`В поле "Начальный взнос" ввели текст`);
    });

    //////////////////

    it("возвращать строку c названием ошибки, если неверно передали третий параметр", () => {
      const nextYearDate = new Date(
        new Date().setFullYear(new Date().getFullYear() + 3)
      );
      const amount = "test";
      expect(calculateTotalMortgage(15, 0, amount, nextYearDate)).toEqual(
        `В поле "Сумма ипотеки" ввели текст`
      );
    });

    //////////////////

    it("возвращать строку c названием ошибки, если неверно передали четвёртый параметр", () => {
      //const nextYearDate = new Date(new Date().setFullYear(new Date().getFullYear() + 3));
      //let today = document.getElementById('date').value; //"Invalid Date";
      const today = ""; //new Date(date);
      expect(calculateTotalMortgage(15, 0, 20000, today)).toEqual(
        `Поле "Срок ипотеки" не заполнено`
      );
    });
    it("возвращать строку c названием ошибки, если неверно передали четвёртый параметр", () => {
      //const today = document.getElementById('date');
      const nextYearDate = new Date(
        new Date().setFullYear(new Date().getFullYear() - 1)
      );
      expect(calculateTotalMortgage(15, 0, 20000, nextYearDate)).toEqual(
        `Срок ипотеки меньше текущей даты`
      );
    });
    it("возвращать строку c названием ошибки, если неверно передали четвёртый параметр", () => {
      const now = new Date();
      const nextYearDate = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate()
      );
      expect(calculateTotalMortgage(15, 0, 20000, nextYearDate)).toEqual(
        `Срок ипотеки равна текущей дате`
      );
    });
    it("возвращать строку c названием ошибки, если неверно передали четвёртый параметр", () => {
      const nextYearDate = new Date(
        new Date().setDate(new Date().getDate() + 5)
      );
      expect(calculateTotalMortgage(15, 0, 20000, nextYearDate)).toEqual(
        `Срок ипотеки меньше месяца`
      );
    });

    //////////////////

    it("верно считать кредит: кейс #1", () => {
      const nextYearDate = new Date(
        new Date().setFullYear(new Date().getFullYear() + 1)
      );
      expect(calculateTotalMortgage(10, 0, 50000, nextYearDate)).toEqual(
        52749.53
      );
    });

    it("верно считать кредит: кейс #2", () => {
      const nextYearDate = new Date(
        new Date().setFullYear(new Date().getFullYear() + 1)
      );
      expect(calculateTotalMortgage(10, 1000, 50000, nextYearDate)).toEqual(
        51694.54
      );
    });

    it("верно считать кредит: кейс #3", () => {
      const nextYearDate = new Date(
        new Date().setFullYear(new Date().getFullYear() + 4)
      );
      expect(calculateTotalMortgage(10, 20000, 20000, nextYearDate)).toEqual(0);
    });

    it("верно считать кредит: кейс #4", () => {
      const nextYearDate = new Date(
        new Date().setFullYear(new Date().getFullYear() + 3)
      );
      expect(calculateTotalMortgage(10, 0, 10000, nextYearDate)).toEqual(
        11616.19
      );
    });

    it("верно считать кредит: кейс #5", () => {
      const nextYearDate = new Date(
        new Date().setFullYear(new Date().getFullYear() + 3)
      );
      expect(calculateTotalMortgage(15, 0, 10000, nextYearDate)).toEqual(
        12479.52
      );
    });
  });
});
