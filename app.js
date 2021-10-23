var canvas = document.querySelector("#myCanvas");
var context = canvas.getContext("2d");

// Quote      
context.beginPath();
context.font = "16px serif";
context.fillText("A sailor's joys are as simple as a child's.", 5, 20);
context.fill();

// Water
var lGradient = context.createLinearGradient(0, 0, 400, 0);

lGradient.addColorStop(0, "#0000FF");
lGradient.addColorStop(1, "#5F9AD1");

context.beginPath();
context.moveTo(0, 300);
context.bezierCurveTo(50, 270, 350, 350, 400, 290);
context.lineTo(400, 400);
context.lineTo(0, 400);
context.closePath();
context.fillStyle = lGradient;
context.fill();

// Sail

// Curvey left sail
context.beginPath();
context.moveTo(145, 145);
context.quadraticCurveTo(95, 180, 85, 260);
context.quadraticCurveTo(105, 250, 145, 260);
context.quadraticCurveTo(135, 200, 145, 145);
context.fillStyle = "#FFFFFF";
context.strokeStyle = "#FFFFFF";
context.fill();
context.stroke();

// Triangle right sail
context.moveTo(165, 145);
context.lineTo(165, 260);
context.lineTo(225, 260);
context.closePath();
context.fill();
context.stroke();

// Sail Text - INDIA
context.beginPath();
context.font = "700 15px sans-serif";
context.strokeStyle = "blue";
context.strokeText("INDIA", 167, 250);
context.stroke();

// Sail Text - 1
context.beginPath();
context.font = "100 12px serif";
context.fillStyle = "red";
context.strokeStyle = "black";
context.fillText("1", 208, 250);
context.strokeText("1", 208, 250);
context.fill();
context.stroke();

// Burgee
context.beginPath();
context.moveTo(145, 110);
context.lineTo(145, 140);
context.lineTo(110, 125);
context.closePath();
context.fillStyle = "#15960A";
context.strokeStyle = "#15960A";
context.fill();
context.stroke();  

// Burgee Text
context.beginPath();
context.font = "100 10px Arial";
context.textAlign = "center";      
context.textBaseline = "middle";
context.fillStyle = "white";
context.fillText("HTML", 130, 125);
context.fill();

// Boat Bottom
context.beginPath();
context.rect(70, 280, 170, 40);
context.fillStyle = "rgba(165, 42, 42, 1)";
context.strokeStyle = "rgba(165, 42, 42, 1)";
context.fill();
context.stroke();   

// Mast
context.beginPath();
context.rect(150, 100, 10, 180);
context.fillStyle = "black";
context.fill();
context.stroke();  

// Sun
var rGradient = context.createRadialGradient(330, 70, 10, 330, 70, 45);

rGradient.addColorStop(0, "#FF8C00");
rGradient.addColorStop(1, "#FFFF00");

context.beginPath();
context.arc(330, 70, 45, 0, 2 * Math.PI, true);
context.fillStyle = rGradient;
context.strokeStyle = "yellow";
context.fill();
context.stroke();

// Birds

// Bird 1
context.beginPath();
context.moveTo(50, 50);
context.quadraticCurveTo(70, 70, 80, 50);
context.quadraticCurveTo(90, 70, 110, 50);

// Bird 2      
context.moveTo(80, 80);
context.quadraticCurveTo(100, 100, 110, 80);
context.quadraticCurveTo(120, 100, 140, 80);
context.strokeStyle = "black";
context.stroke();       

// Mouse Interaction
var mouseX = 0;   // Set up and initialize variable for x-position of mouse
var mouseY = 0;   // Set up and initialize variable for y-position of mouse

// Function to clear a rectangular area of the canvas
function clearRect(event) {
  getPosition(event);
  context.clearRect(mouseX - 50, mouseY - 50, 100, 100);
}

// Function to get the mouse position, every time the mouse moves
// This will be the coordinates of the middle of the rectangle we want to clear
function getPosition(event) {
  mouseX = event.clientX - canvas.offsetLeft;
  mouseY = event.clientY - canvas.offsetTop;
}

// Execute the getPosition function whenever the mouse moves within the canvas element
canvas.addEventListener("mousemove", getPosition, false);

// Execute the clearRect function whenever the canvas is clicked
canvas.addEventListener("click", clearRect, false);
