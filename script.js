const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let dots = [];
let lines = [];

class Dot {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 1;
    this.color = '#fff';
  }
  
  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
  }
}

class Line {
  constructor(dot1, dot2) {
    this.dot1 = dot1;
    this.dot2 = dot2;
    this.color = '#fff';
  }
  
  draw() {
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.moveTo(this.dot1.x, this.dot1.y);
    ctx.lineTo(this.dot2.x, this.dot2.y);
    ctx.stroke();
    ctx.closePath();
  }
}

function init() {
  // Set canvas dimensions
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  // Create dots
  for (let i = 0; i < 50; i++) {
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let dot = new Dot(x, y);
    dots.push(dot);
  }
  
  // Create lines between dots
  for (let i = 0; i < dots.length; i++) {
    for (let j = i + 1; j < dots.length; j++) {
      let distance = Math.sqrt(Math.pow(dots[i].x - dots[j].x, 2) + Math.pow(dots[i].y - dots[j].y, 2));
      if (distance < 200) {
        let line = new Line(dots[i], dots[j]);
        lines.push(line);
      }
    }
  }
}

function animate() {
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Update dot positions
  for (let i = 0; i < dots.length; i++) {
    dots[i].draw();
    dots[i].x += Math.random() * 2 - 1;
    dots[i].y += Math.random() * 2 - 1;
  }
  
  // Draw lines between dots
  for (let i = 0; i < lines.length; i++) {
    lines[i].draw();
  }
  
  // Request animation frame
  requestAnimationFrame(animate);
}

// Initialize canvas
init();

// Start animation
animate();
