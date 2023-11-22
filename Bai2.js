class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }

    calculatePerimeter() {
        return 2 * ( this.width + this.height);
    }
}

const rectangle = new Rectangle(3 , 4);

const area = rectangle.calculateArea();
const perimeter = rectangle.calculatePerimeter();

console.log(`Rectangle Area: ${area}`);
console.log(`Perimeter Area: ${perimeter}`);