function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(255);
  
  
 
  
  stroke(100, 50, 10);
  strokeWeight(10);
  line(70, 500, 70, 0);
  line(0,300,70, 300);
  
  stroke(0);
  strokeWeight(7);
  line(0, 400, 500, 400);
  line(340, 400, 340, 0);
  line(340, 240, 500, 240);
  line(0, 50, 500, 50); 
  line(70,250,500,240);
  line(200,250,200,400);
  
  strokeWeight(10);

  line(0,300,70, 300)
  
  strokeWeight(0);
  fill(0, 0, 255);
  triangle(340, 240, 500, 240, 340, 396);
  fill(255,0,0)
  triangle(340, 396, 500, 240, 500, 396);
  
  
  strokeWeight(0);
  fill(250,250,0);
  rect(0,0,65,45);
  
  
  ellipse(0, 0, 80, 40, 6);
  
  fill(250,0,0);
  ellipse(130, 110, 100, 100);

  fill(250,250,0)
  ellipse(200, 200, 130, 70);
  
  fill(0,0,250);
  ellipse(300, 100, 50, 50);
  
  
  strokeWeight(5);
  
  
  
  fill(250, 250,0, 100)
  stroke(250,0,0);
  ellipse(300, 450, 160, 50);
  fill(0, 0,250, 100)
  stroke(250,250,0);
  ellipse(150, 450, 60, 50);
  fill(250, 0,0, 100)
  stroke(0,0,250);
  ellipse(440, 450, 30, 70);
  
  stroke(0);
  fill(250,250,0)
  arc(140, 350, 80, 50, radians(0), radians(60));
  
    fill(250,0,0)
  arc(140, 350, 80, 50, radians(80), radians(170));
  
  fill(0,0,250)
  arc(140, 350, 60, 100, radians(240), radians(300));
  
  rect(0 ,300, 70, 100)
  
  rect(340,0,180, 50)
  
  strokeWeight(0)
  
       fill(250,250,0, 150);
  ellipse(380, 90, 40, 40);
   fill(250,0,0, 150);
  ellipse(410, 120, 70, 70);
     fill(0,0,250, 150);
  ellipse(450, 170, 100, 100);
  
fill(250,0,0, 200)
  triangle(270,270,220,350,320,350)
  fill(0,0,250, 200)
    triangle(270,380,220,290,320,290)
  
  
}