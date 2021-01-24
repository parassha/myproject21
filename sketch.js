var canvas;
var music;
var block1, block2, block3, block4;
var box,edges;

function preload(){
    music = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
block1=createSprite(90,580,200,25);
block1.shapeColor = "red";

block2=createSprite(295,580,190,25);
block2.shapeColor = "green";

block3=createSprite(500,580,190,25);
block3.shapeColor = "blue";

block4=createSprite(710,580,200,25);
block4.shapeColor = "yellow";

    //create box sprite and give velocity
box=createSprite(random(20,750),200,25,25);
box.shapeColor="white";
box.velocityX = -5;
box.velocityY = 5;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

edges = createEdgeSprites();
box.bounceOff(edges); 

    //add condition to check if box touching surface and make it box
    if(block1.isTouching(box) && box.bounceOff(block1)){
        box.shapeColor="red";
        music.play();
    }
    if(block2.isTouching(box) && box.bounceOff(block2)){
        box.shapeColor="green";
        box.velocityY = 0;
        box.velocityX = 0;
        music.stop();
    }
    if(block3.isTouching(box) && box.bounceOff(block3)){
        box.shapeColor="blue";
        music.play();
    }
    if(block4.isTouching(box) && box.bounceOff(block4)){
        box.shapeColor="yellow";
        box.velocityY = 0;
        box.velocityX = 0;
        music.stop();
    }
    drawSprites();
}
