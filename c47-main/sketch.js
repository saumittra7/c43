var backgroundImage
var goalpost1,goalpost1Img,goalpost2;







function preload(){
 backgroundImage=loadImage("football stadium.jpg")   
goalpost1Img = loadImage("goalpost no bg.png")

}


function setup(){
    createCanvas(1000,800)
    goalpost1 = createSprite(280,400,50,100)
    goalpost1.addImage(goalpost1Img)
    goalpost1.scale =0.5
}




function draw(){
background(backgroundImage)
drawSprites()
}