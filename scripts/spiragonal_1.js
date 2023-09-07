let currentX, currentY, displacement, squaresPerSide = 30;
function setup() {
  createCanvas(700, 700);
  frameRate(60)
  currentX = 0;
  currentY = 0;
  displacement = width/squaresPerSide;
  background(190);
  dx = 0
  dy = -displacement;
  yCounterPrev = 0
  yCounter = 0
  xCounterPrev = 0
  xCounter = 0
  diagonalCounter = 0
  rectMode(CENTER);
  stroke(255);
  noFill()
  translate(width / 2, height / 2);
  timeout = 0
  
}

function draw() {
  translate(width / 2, height / 2);
  if (frameCount % 5 == 0) {
    while ((currentX < width/2 && currentY < height/2 && currentX > -width/2 && currentY > -height/2) || timeout < 500) {
      updateSquare(10);
      timeout++
    }
  }
  if (frameCount % 10 == 5) {
    while ((currentX < width/2 && currentY < height/2 && currentX > -width/2 && currentY > -height/2) || timeout < 500) {
      updateSquare(11);
      timeout++
    }
  }
}

function drawDiagonal(mode) {
  stroke(0,100,200)
  
  if (diagonalCounter % mode == 0) {
    line(currentX, currentY - displacement/2, currentX - displacement/2, currentY)
  } else if (diagonalCounter % mode == 1) {
    line(currentX, currentY + displacement/2, currentX - displacement/2, currentY)
  } else if (diagonalCounter % mode == 2) {
    line(currentX, currentY - displacement/2, currentX + displacement/2, currentY)
  } else if (diagonalCounter % mode == 3){
    line(currentX - displacement/2, currentY + displacement/2, currentX + displacement/2, currentY + displacement/2)
  } else if (diagonalCounter % mode == 4){
    line(currentX - displacement/2, currentY - displacement/2, currentX - displacement/2, currentY + displacement/2)
    // yCounter++
  }
  else if (diagonalCounter % mode == 5) {
    line(currentX, currentY - displacement/2, currentX + displacement/2, currentY)
    // dx/=2
  } else if (diagonalCounter % 8 == 6) {
    line(currentX + displacement/2, currentY + displacement/2, currentX + displacement/2, currentY - displacement/2)
  } else if (diagonalCounter % 8 == 7) {
    line(currentX + displacement/2, currentY - displacement/2, currentX - displacement/2, currentY - displacement/2)
  }
  
  // if (mode == 11)
    stroke(250,0,0)
  
  if (diagonalCounter % 8 == 0) {
    line(currentX, currentY, currentX - displacement/2, currentY)
  } else if (diagonalCounter % 8 == 1) {
    line(currentX, currentY, currentX - displacement/2, currentY - displacement/2)
    // dy+=displacement/2
  } else if (diagonalCounter % 8 == 2) {
    line(currentX, currentY, currentX, currentY - displacement/2)
  } else if (diagonalCounter % 8 == 3) {
    line(currentX, currentY, currentX + displacement/2, currentY - displacement/2)
  } else if (diagonalCounter % 8 == 4) {
    line(currentX, currentY, currentX + displacement/2, currentY)
  } else if (diagonalCounter % 8 == 5) {
    line(currentX, currentY, currentX + displacement/2, currentY + displacement/2)
  } else if (diagonalCounter % 8 == 6) {
    line(currentX, currentY, currentX, currentY + displacement/2)
  } else if (diagonalCounter % 8 == 7) {
    line(currentX, currentY, currentX - displacement/2, currentY + displacement/2)
  }
  
  diagonalCounter++;
}

function updateSquare(mode) {
  if ((-width/2 < currentX <= width/2) && 
      (-height/2 < currentY <= height/2)) {
    drawDiagonal(mode)
    // stroke(0)
    // square(currentX,currentY,displacement)
  }
  
  if ((yCounter > yCounterPrev)) {
    temp = -dy;
    dy = dx;
    dx = temp;
    yCounterPrev = yCounter
    yCounter = 0
  }
  
  if ((xCounter > xCounterPrev)) {
    temp = -dy;
    dy = dx;
    dx = temp;
    xCounterPrev = xCounter
    xCounter = 0
  }
  
  if (abs(dy) > 0) {
    yCounter++;
  }
  if (abs(dx) > 0) {
    xCounter++;
  }
  
  currentX = currentX + dx;
  currentY = currentY + dy;
}