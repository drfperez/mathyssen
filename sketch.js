//CREAT PER IZAN LECINA con la tecla 'N' si esta presionada+x-y+q-t, canvia la vision del cuadro 
let mic
 
function setup(){
  mic = new p5.AudioIn();
  mic.start();
  createCanvas(600,640)
  azul='#0363a6'
  rojo='#e92424'
  amarillo='#e9c61e'
  fondo='#dfd8ce'
  blanco='#ffffff'
  negro='#000000'
 
} 
function draw(){
  k=sin (frameCount*0.1)*10
  t=sin (frameCount*0.1)*40
  e=cos (frameCount*0.1)*40
  q=cos (frameCount*0.1)*15
  y=random(1,100)
   strokeWeight(1/2)
   let vol = mic .getLevel();
let x = map(vol,0,1,-7,750)
  if (keyIsPressed){
  if((key == 'n') || (key == 'N')){
 azul='#fb9250'
  rojo='#1cb8db'
  amarillo='#143cc5'
  fondo='#242c37'
  blanco='#000'
  negro='#fff'
    
  }
}else{
   azul='#0363a6'
  rojo='#e92424'
  amarillo='#e9c61e'
  fondo='#dfd8ce'
  blanco='#ffffff'
  negro='#000000'
  }
  
  background(fondo)
  fill(azul)
  beginShape();
  vertex(600+x-y+q-t+x-y+q-t,470-x-y+k-e)
  vertex(600+x-y+q-t+x-y+q-t,365-x-y+k-e)
  vertex(563+x-y+q-t,365-x-y+k-e)
  vertex(563+x-y+q-t,470-x-y+k-e)
  endShape(CLOSE);
  
  beginShape();
  vertex(40+x-y+q-t,0-x-y+k-e)
  vertex(53+x-y+q-t,0-x-y+k-e)
  vertex(53+x-y+q-t,640-x-y+k-e)
  vertex(40+x-y+q-t,640-x-y+k-e)
  endShape(CLOSE); 
  
   beginShape();
  vertex(600+x-y+q-t+x-y+q-t,165-x-y+k-e)
  vertex(600+x-y+q-t+x-y+q-t,180-x-y+k-e)
  vertex(0+x-y+q-t,180-x-y+k-e)
  vertex(0+x-y+q-t,165-x-y+k-e)
  endShape(CLOSE);
  //no hay más azul
  fill(negro)
  beginShape();
  vertex(555+x-y+q-t,0-x-y+k-e)
  vertex(569+x-y+q-t,0-x-y+k-e)
  vertex(569+x-y+q-t,640-x-y+k-e)
  vertex(555+x-y+q-t,640-x-y+k-e)
  endShape(CLOSE);
  
 beginShape();
  vertex(600+x-y+q-t+x-y+q-t,605-x-y+k-e)
  vertex(600+x-y+q-t+x-y+q-t,615-x-y+k-e)
  vertex(0+x-y+q-t,615-x-y+k-e)
  vertex(0+x-y+q-t,605-x-y+k-e)
  endShape(CLOSE);
  //no hay más negro
  fill(blanco)
  beginShape();
  vertex(26+x-y+q-t,0-x-y+k-e)
  vertex(13+x-y+q-t,0-x-y+k-e)
  vertex(13+x-y+q-t,640-x-y+k-e)
  vertex(26+x-y+q-t,640-x-y+k-e)
  endShape(CLOSE);
  
  beginShape();
  vertex(282+x-y+q-t,0-x-y+k-e)
  vertex(300+x-y+q-t,0-x-y+k-e)
  vertex(300+x-y+q-t,640-x-y+k-e)
  vertex(282+x-y+q-t,640-x-y+k-e)
  endShape(CLOSE);
  
  fill(amarillo)
   beginShape();
  vertex(282+x-y+q-t,27-x-y+k-e)
  vertex(282+x-y+q-t,165-x-y+k-e)
  vertex(80+x-y+q-t,165-x-y+k-e)
  vertex(80+x-y+q-t,27-x-y+k-e)
  endShape(CLOSE);
  
  
  
  beginShape();
  vertex(575+x-y+q-t,0-x-y+k-e)
  vertex(587+x-y+q-t,0-x-y+k-e)
  vertex(587+x-y+q-t,640-x-y+k-e)
  vertex(575+x-y+q-t,640-x-y+k-e)
  endShape(CLOSE);
  
  beginShape();
  vertex(0+x-y+q-t,470-x-y+k-e)
  vertex(0+x-y+q-t,485-x-y+k-e)
  vertex(600+x-y+q-t,485-x-y+k-e)
  vertex(600+x-y+q-t,470-x-y+k-e)
  endShape(CLOSE);
  
  fill('#e9c61e');
 
  textFont('hecho en el instituto')
  textFont('Pompeu Fabra Martorell');
  textSize(20)
  text('INSTITUTO  ',108+x-y+q-t,66-x-y+k-e)
  text('POMPEU FABRA', 97+x-y+q-t, 96-x-y+k-e);
  textSize(35)
  text( 'Martorell', 98+x-y+q-t,  146-x-y+k-e);
  
 fill('#dfd8ce');
 
  textFont('22/23');
  textSize(25)
  text('22/23', 121+x-y+q-t, 550-x-y+k-e);

  
  
  fill(rojo)
    beginShape();
  vertex(0+x-y+q-t,345-x-y+k-e)
  vertex(0+x-y+q-t,360-x-y+k-e)
  vertex(600+x-y+q-t+x-y+q-t,360-x-y+k-e)
  vertex(600+x-y+q-t+x-y+q-t,346-x-y+k-e)
  endShape(CLOSE);
  
  fill(blanco)
    beginShape();
  vertex(0+x-y+q-t,583-x-y+k-e)
  vertex(0+x-y+q-t,597-x-y+k-e)
  vertex(600+x-y+q-t+x-y+q-t,597-x-y+k-e)
  vertex(600+x-y+q-t+x-y+q-t,583-x-y+k-e)
  endShape(CLOSE);
  
    beginShape();
  vertex(457+x-y+q-t,0-x-y+k-e)
  vertex(457+x-y+q-t,640-x-y+k-e)
  vertex(442+x-y+q-t,640-x-y+k-e)
  vertex(442+x-y+q-t,0-x-y+k-e)
  endShape(CLOSE);

    beginShape();
  vertex(0+x-y+q-t,287-x-y+k-e)
  vertex(0+x-y+q-t,300-x-y+k-e)
  vertex(600+x-y+q-t,300-x-y+k-e)
  vertex(600+x-y+q-t,287-x-y+k-e)
  endShape(CLOSE);
  
  fill(rojo)
  beginShape();
  vertex(89+x-y+q-t,0-x-y+k-e)
  vertex(89+x-y+q-t,640-x-y+k-e)
  vertex(77+x-y+q-t,640-x-y+k-e)
  vertex(77+x-y+q-t,0-x-y+k-e)
  endShape(CLOSE);
  
  beginShape();
  vertex(263+x-y+q-t,0-x-y+k-e)
  vertex(263+x-y+q-t,640-x-y+k-e)
  vertex(248+x-y+q-t,640-x-y+k-e)
  vertex(248+x-y+q-t,0-x-y+k-e)
  endShape(CLOSE);
  
  beginShape();
  vertex(381+x-y+q-t,0-x-y+k-e)
  vertex(381+x-y+q-t,640-x-y+k-e)
  vertex(368+x-y+q-t,640-x-y+k-e)
  vertex(368+x-y+q-t,0-x-y+k-e)
  endShape(CLOSE);
  
  beginShape();
  vertex(535+x-y+q-t,0-x-y+k-e)
  vertex(535+x-y+q-t,640-x-y+k-e)
  vertex(524+x-y+q-t,640-x-y+k-e)
  vertex(524+x-y+q-t,0-x-y+k-e)
  endShape(CLOSE);
}
