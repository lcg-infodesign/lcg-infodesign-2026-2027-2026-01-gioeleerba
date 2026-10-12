let xMax = 600;
let yMax = 600;
let xBarca = 0;
let yMare = 400; // Altezza linea dell'orizzonte

function setup() {
  createCanvas(xMax, yMax);
}

function draw() {
  noStroke();

  // CIELO TRAMONTO (3 rettangoli colorati)
  fill(210, 30, 0);
  rect(0, 0, xMax, 150);
  fill(250, 90, 0);
  rect(0, 150, xMax, 150);
  fill(255, 160, 0);
  rect(0, 300, xMax, 100);

  // Sole 
  fill(255, 220, 0);
  arc(300, yMare, 120, 120, PI, TWO_PI); 

  // GABBIANI
  noFill(); 
  stroke(0); 
  
  // Gabbiano 1 
  strokeWeight(2.5); 
  arc(130, 100, 24, 14, PI, TWO_PI);
  arc(154, 100, 24, 14, PI, TWO_PI);
  
  // Gabbiano 2 
  strokeWeight(1.5); 
  arc(440, 140, 14, 8, PI, TWO_PI);
  arc(454, 140, 14, 8, PI, TWO_PI); 

  noStroke(); 

  // MARE (Sfondo blu)
  fill(0, 0, 180);
  rect(0, yMare, xMax, yMax - yMare);

  // ONDE DEL MARE 
  push();
  randomSeed(99); // Mantiene le onde fisse 
  noStroke();
  for (let i = 0; i < 80; i++) {
    // Calcolo posizione X e Y 
    let wx = (i * 37) % width + i % 3;
    let wy = yMare + (i * 73) % (height - yMare) + i % 7; 
    
    // Disegno onde diverse in base all'indice 'i'
    if (i % 2 == 0) {
      fill(0, 100, 255, random(150, 255)); // Azzurro chiaro
      ellipse(wx, wy, random(10, 20), 3);
    } else if (i % 3 == 0) {
      fill(255, 255, 255, random(100, 200)); // Schiuma bianca
      ellipse(wx, wy, random(5, 15), 2);
    } else {
      fill(0, 50, 220, random(150, 255)); // Blu scuro
      ellipse(wx, wy, random(15, 25), 4);
    }
  }
  pop();

  // Riflesso del sole sull'acqua
  fill(255, 220, 0, 200); 
  rect(260, yMare + 10, 80, 4);
  rect(275, yMare + 25, 50, 4);
  rect(290, yMare + 40, 20, 3);

  // BARCA 
  fill(0); 
  
  // Scafo
  quad(xBarca - 40, yMare - 2, xBarca + 60, yMare - 2, xBarca + 30, yMare + 18, xBarca - 25, yMare + 18);

  // Albero maestro
  rect(xBarca + 13, yMare - 95, 3, 95); 

  // Vela
  triangle(xBarca + 15, yMare - 90, xBarca + 15, yMare - 2, xBarca - 35, yMare - 15);

  // ANIMAZIONE 
  xBarca = (xBarca + 1) % (xMax + 100); 
}