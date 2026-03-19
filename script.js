function calculate(a, b, operation) {
    console.log("Выполняется операция: " + operation);
    
    if (operation === "add") {
        return a + b;
    } else if (operation === "subtract") {
        return a - b;
    } else if (operation === "divide") {
        if (b !== 0) {
            return a / b;
        } else {
            return "Ошибка: деление на ноль";
        }
    } else {
        return "Неизвестная операция";
    }
}

console.log(calculate(10, 5, "add"));
console.log(calculate(10, 5, "subtract"));
console.log(calculate(10, 5, "divide"));