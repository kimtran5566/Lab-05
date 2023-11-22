class Calculator {
    constructor() {
        this.a = 0;
        this.b = 0;
    }

    promptValues() {
        this.a = parseFloat(prompt("Nhập giá trị a:", 0));
        this.b = parseFloat(prompt("Nhập giá trị b:", 0));
    }

    add() {
        return this.a + this.b;
    }

    subtract() {
        return this.a - this.b;
    }

    multiply() {
        return this.a * this.b;
    }

    divide() {
        if (this.b !== 0) {
            return this.a / this.b;
        } else {
            return "Không thể chia cho 0.";
        }
    }

    displayResult(operation) {
        const result = this[operation](); // Gọi phương thức dựa trên tên của phương thức
        console.log(`Kết quả ${operation}: ${result}`);
    }
}

// Sử dụng class Calculator
const calculator = new Calculator();
calculator.promptValues();

calculator.displayResult("add");
calculator.displayResult("subtract");
calculator.displayResult("multiply");
calculator.displayResult("divide");
