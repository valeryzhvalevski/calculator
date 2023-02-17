// Находим все кнопки и поле ввода
const buttons = document.querySelectorAll(".button");
const display = document.querySelector(".display");

// Функция для добавления значения на экран
function addToDisplay(value) {
  display.value += value;
}

// Функция для выполнения математических операций
function calculate() {
  const expression = display.value;
  // заменим символ "x" на знак умножения "*"
  const fixedExpression = expression.replace(/x/g, "*");
  display.value = eval(fixedExpression);
}

// Обработчики кликов на кнопки
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonValue = button.innerHTML;

    // Очистка экрана
    if (buttonValue === "C") {
      display.value = "";
    }

    // Вычисление процентов
    else if (buttonValue === "%") {
      display.value = display.value / 100;
    }

    // Добавление чисел и знаков на экран
    else if (buttonValue === "." && display.value.includes(".")) {
      return;
    } else if (buttonValue !== "=") {
      addToDisplay(buttonValue);
    }

    // Выполнение вычислений
    else if (buttonValue === "=") {
      calculate();
    }
  });
});



// Add animation to buttons
buttons.forEach(button => {
  button.addEventListener('mousedown', () => {
    button.style.transform = 'scale(0.95)';
  });
  button.addEventListener('mouseup', () => {
    button.style.transform = 'scale(1)';
  });
});
