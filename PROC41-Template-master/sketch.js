var umbrella
var rand;
var t1, t2, t3, t4;
var md = 100;
var Drops = []
var thunder;
function preload(){
    t1 = loadImage('images/1.png')
    t2 = loadImage('images/2.png')
    t3 = loadImage('images/3.png')
    t4 = loadImage('images/4.png')
}

function setup(){
createCanvas(400,700);
engine = Engine.create()
world = engine.world;
umbrella = new Umbrella(200,500)

if(frameCount % 150 === 0){
    for(var i = 0; i<md; i++){
    Drops.push(new drop(random(0, 400), random(0, 400)));
    }
}
}

function draw(){
    background('black')
    Engine.update(engine)

    var rand = Math.round(random(1, 4));
    thunder = createSprite(200,10,10,10);
    switch(rand){
        case 1: thunder.addImage(t1);
        break;
        case 2 :thunder.addImage(t2);
        break;
        case 3 : thunder.addImage(t3);
        break;
        case 4 : thunder.addImage(t4);
        break;
    }
    drawSprites();
    umbrella.display()

    for(var i = 0; i<md; i++){
        Drops[i] = display();
        Drops[i] = update();
    }
}   

