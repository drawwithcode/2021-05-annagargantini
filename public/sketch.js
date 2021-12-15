let clientSocket = io();
let stockArray = [];

clientSocket.on("connect", newConnection);
clientSocket.on("mouseBroadcast", newBroadcast);

function preload() {

let stock1 = loadImage("./assets/stock1.jpg"); 
let stock2 = loadImage("./assets/stock2.jpg");
let stock3 = loadImage("./assets/stock3.jpg");
let stock4 = loadImage("./assets/stock4.jpg");
let stock5 = loadImage("./assets/stock5.jpg");
let stock6 = loadImage("./assets/stock6.jpg");
let stock7 = loadImage("./assets/stock7.jpg");
let stock8 = loadImage("./assets/stock8.jpg");

stockArray = [stock1, stock2, stock3, stock4, stock5, stock6, stock7, stock8];
  
} 

function newConnection() {
  console.log(clientSocket.id);
}

function newBroadcast(data) {
  console.log(data);
  stroke('black');
  strokeWeight(3);
  line(data.x, data.y, data.x2, data.y2);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  frameRate(100);
  textFont('IBM Plex Mono');
  textSize(20);
  textAlign(CENTER);
  text("POV: you're attending the English lecture and you share the book with your classmate", width / 2, height / 9);
  text("You already know what to do: draw something funny", width / 2, height * 8/9);

  let randomStock = random(stockArray);
  imageMode(CENTER);
  image(randomStock, (windowWidth/2), (windowHeight/2), 800, 500);
}

function draw() {  
}

function mouseDragged() {

push();
  stroke('blue');
  strokeWeight(3);
  line(pmouseX, pmouseY, mouseX, mouseY);
pop();

 let message ={
   x:mouseX,
   y:mouseY,
   x2: pmouseX,
   y2: pmouseY
   
 }; 

 clientSocket.emit("mouse", message);
}