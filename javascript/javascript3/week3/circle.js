const canvas = document.getElementById("mycanvas");
const context = canvas.getContext("2d");
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = 80;

context.beginPath();
context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
context.fillStyle = "lightblue";
context.fill();
context.lineWidth = 1;
context.strokeStyle = " #000000";
context.stroke();

class Circle {
  constructor(x, y, r, startAngle, endAngle, fillColor) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.fillColor = fillColor;
  }

  draw() {
    context.beginPath();
    context.arc(
      this.x,
      this.y,
      this.r,
      this.startAngle,
      this.endAngle,
      this.fillColor
    );
    context.fillStyle = this.fillColor;
    context.fill();
  }
}

const circle1 = new Circle(30, 100, 30, 0, 2 * Math.PI, "red");
const circle2 = new Circle(170, 100, 30, 0, 2 * Math.PI, "yellow");
const circle3 = new Circle(100, 100, 30, 0, 2 * Math.PI, "green");

circle1.draw();
circle2.draw();
circle3.draw();

setInterval(() => {
  const purple = Math.floor(Math.random() * 256) + 1;
  const blue = Math.floor(Math.random() * 256) + 1;
  const pink = Math.floor(Math.random() * 256) + 1;
  const maxR = 20;
  const minR = 3;

  x = Math.random() * canvas.width;
  y = Math.random() * canvas.height;
  r = minR + Math.random() * (maxR - minR);
  startAngle = 0;
  endAngle = 2 * Math.PI;
  fillColor = `rgb ${purple}. ${blue}, ${pink}`;
  const circle4 = new Circle(x, y, r, startAngle, endAngle, fillColor);
  circle4.draw();
}, 500);
