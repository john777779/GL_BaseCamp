function Shape() {
  this.type = 'triangle';
  this.getType = function() {
      console.log(this.type)
    };
};

function Triangle(a, b, c) {
  Shape.apply(this, arguments);
  this.side1 = a;
  this.side2 = b;
  this.side3 = c;
};

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

Triangle.prototype.getPerimeter = function() {
  console.log(this.side1 + this.side2 + this.side3);
}



var t = new Triangle(1, 2, 3);
console.log(t.constructor);                 // Triangle(a, b, c)
console.log(t instanceof Shape);                // true
t.getPerimeter();              // 6
t.getType();                   // "triangle"
