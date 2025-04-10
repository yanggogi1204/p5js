function setup() {
    createCanvas(500, 500);
  }
  
  
  
  let R = 54;
  let G = 188;
  let B = 155;
  
  let hairR = 40;
  let hairG = 40
  let hairB = 40
  
  let eye1
  let eye2
  let eye3
  
  function draw() {
    
    
    background(R, G, B);
    
    
    
    strokeWeight(1) //머리카락 디테일1
  
    fill(hairR,hairG,hairB)
    strokeWeight(4)
  
    strokeWeight(0)
    
    ellipse(144, 192, 100, 150)
    
      
      ellipse(235, 155, 220, 190)
        ellipse(275, 185, 240, 240)
    
    
      fill(0)
    
    
      arc(110, 230, 20, 70, radians(90),radians(300))
    
    
    
    
    
    strokeWeight(5) //얼굴 귀
    fill(244,205,190)
    ellipse(123,260, 50,66)
    ellipse(377,260, 50,66)
    ellipse(250,250, 250,230)
    
    
    
    
    
    //머리카락
    strokeWeight(4)
      fill(hairR,hairG,hairB)
    arc(137, 210, 60, 100, radians(90),radians(230))
    
        fill(244,205,190)
    arc(147, 215, 30, 100, radians(100),radians(210))
    
    
     strokeWeight(0)
    fill(hairR,hairG,hairB)
    
    ellipse(260,150,200,100)
     strokeWeight(4)
    arc(227, 150, 150, 120, radians(60),radians(184))
      arc(287, 150, 150, 120, radians(60),radians(184))
       arc(347, 150, 150, 120, radians(60),radians(184))
    
      strokeWeight(4)
      
    arc(357, 210, 60, 100, radians(320),radians(80))
      
        fill(244,205,190)
    arc(344, 230, 35, 80, radians(300),radians(60))
    strokeWeight(0)
    fill(190)
    ellipse(300,130, 20,30)
    ellipse(320,130, 10,14)
    ellipse(285,126, 17,25)
  
    fill(244,205,190)
    
  // 눈섭
      strokeWeight(8)
    arc(314, 260, 150, 80, radians(230),radians(310))
    arc(184, 260, 150, 80, radians(230),radians(310))
  
    
    //눈
    
      strokeWeight(0)
    fill(0)
    ellipse(185,269, 63,60)
      fill(250)
    ellipse(188,274, 61,60)
    
      fill(0)
    ellipse(315,269, 63,60)
      fill(250)
    ellipse(313,274, 61,60)
    
    // 눈
    fill(0)
    strokeWeight(2)
    
  let left1 = 188;
  let left2 = 274;
  let x1 = constrain(mouseX - left1, -30, 25);
  let y1 = constrain(mouseY - left2, -25, 25);
  
  // 오른쪽 눈
  let right1 = 313;
  let right2 = 274;
  let x2 = constrain(mouseX - right1, -30, 25);
  let y2 = constrain(mouseY - right2, -25, 25);
  
  
  fill(eye1, eye2,eye3)
  ellipse(left1 + x1 * 0.1, left2 + y1 * 0.1, 45, 50); 
  ellipse(right1 + x2 * 0.1, right2 + y2 * 0.1, 45, 50); 
    
    // 얼굴 디테일 
      strokeWeight(0)
    fill(254, 139, 125 )
    ellipse(326,314, 45,20)
    ellipse(176,314, 45,20)
      ellipse(250,310, 25,20)
   
      fill(0);
    
  
    
    //입
        strokeWeight(3)
    fill(234, 42, 102 )
      ellipse(250,340, 45,20)
    
    fill(0,0,0,0)
    ellipse(188,269, 95,85)
     ellipse(312,269, 95,85)
    line(234,255,266,255)
    
    //마우스
    fill(250,0,0,150)
    strokeWeight(0)
    ellipse(mouseX,mouseY,10,10)
    
    strokeWeight(3)
    
    if (mouseIsPressed) {
      stroke(250,250,0)
      line(left1 + x1 * 0.1, left2 + y1 * 0.1, mouseX,mouseY)
      line(right1 + x2 * 0.1, right2 + y2 * 0.1, mouseX,mouseY)
      stroke(0)
    }
    
    
  
    if (keyIsPressed && key === '2') {
      strokeWeight(0)
      fill(244,205,190)
      ellipse(187,269, 70,70)
      ellipse(313,269, 70,70)
      
      strokeWeight(10)
      line(165,255,210,270)
      line(165,285,210,270)
      
      
      line(335,285,290,270)
      line(335,255,290,270)
      
      fill(234, 42, 102)
      strokeWeight(0)
      ellipse(250,355,30,40)
      
      strokeWeight(3)
      stroke(0)
      line (250,345,250,360)
      stroke(0)
      
    
    }
    
      if (keyIsPressed && key === '3') {
  
      
      hairR=eye1 = random(255)
        hairG=eye2 = random(255)
        hairB=eye3 = random(255)
        
        
    
    }
    
  }
  
  function keyPressed() {
    if (key === '1') {
      
      // 랜덤 색으로 값 갱신
      R = random(255);
      G = random(255);
      B = random(255);
    }
      if (key === 'r') {
      
      // 랜덤 색으로 값 갱신
      R = 54
      G = 188
      B = 155
      hairR = 40
        hairG = 40
        hairB = 40
        eye1=eye2=eye3=0
        
    }
      if (key === 's') {
      saveGif('mySketch', 10);
    }
  }
  
  
  
  