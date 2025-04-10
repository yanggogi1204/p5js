function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0,180,240);
  
  fill(250)
  stroke(250)
  ellipse(52,73,60,60)
  ellipse(82,53,60,60)
  ellipse(82,73,60,60)
  ellipse(122,73,60,60)
  
    ellipse(352,123,60,60)
  ellipse(282,103,60,60)
  ellipse(282,123,60,60)
  ellipse(322,123,60,60)
  
  
  
  
  
  
  rotate(0)
  stroke(0)
  strokeWeight(1)
  fill(0)

 
  
  
  fill(0)
  ellipse(190,450,350,300)
  
  fill(50, 110, 50)
  ellipse(190,450,350,300)
  fill(250)
  arc(80,400, 120, 130, radians(90), radians(270))
  
  arc(270,430, 180, 220, radians(270), radians(70))
  noFill(0)
  stroke(250)
  strokeWeight(13)
  arc(236,365, 20,20, radians(90),radians(310))
  arc(236,385, 20,20, radians(270),radians(140))
  
  
  strokeWeight(1)
  stroke(0)
  fill(250, 200, 190)
  beginShape();
  vertex(85,140); // 첫 번째 꼭짓점
  
  vertex(95, 200); // 두 번째 꼭짓점
  
  vertex(88, 252); // 세 번째 꼭짓점
  
  vertex(135,309); // 네 번째 꼭짓점
  
  vertex(195,310);  // 다섯 번째 꼭짓점
  
  vertex(250,275);
  
  vertex(270,226);
  
  vertex(266,142);
  
  endShape(CLOSE);  // 다각형 닫기
  
  
  
  fill(0)
  arc(91, 173, 40, 100, radians(90),radians(300))
  arc(110, 148, 60, 100, radians(90),radians(300))
  arc(130, 148, 50, 100, radians(90),radians(300))
    arc(150, 148, 50, 100, radians(90),radians(300))
    arc(180, 148, 40, 100, radians(200),radians(100))
  arc(198, 158, 50, 90, radians(200),radians(95))
  arc(236, 188, 40, 100, radians(200),radians(80))
  arc(264, 173, 60, 130, radians(-210),radians(100))
  ellipse(260,170, 20,90)
  
  ellipse(180, 120, 180, 100)
  noFill(0)
  strokeWeight(10)
  stroke(0)
  arc (160, 90, 150, 50, radians(0), radians(160))
  stroke(0)
  strokeWeight(3)
  noFill()
  quad(90, 229, 90, 197,133,203,127,227)
  quad(155,204, 158,229,191,231,202,203)
  line(133,203,160,204)
  arc(150,237, 30, 40, radians(140), radians(220))
  fill(250,0,0)
  
  line(123,271, 173,271)
  arc(148,273, 50,20, radians(0), radians(180))
  strokeWeight(1)
  fill(250)
  triangle(163,331,113,316,134,307)
  triangle(163,331,231,305,209,301)
  strokeWeight(0)
  
  fill(100)
  triangle(139,310,193,310, 163,330)
  strokeWeight(1)
line(163,331,163,400)
  
  fill(250)
  
  ellipse(171,347, 8,8)
  ellipse(171,367, 8,8)
  ellipse(171,387, 8,8)
  
  
  ellipse(111,212, 20,10)
    ellipse(171,212, 20,10)
  fill(0)
  ellipse(110,212, 10,10)
  ellipse(170,212, 10,10)
  
  
}