class drop {
    constructor(x, y, r){
        var options = {
            'restitution':0.1,
            'friction':0.001
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.height = height
        this.rain = Bodies.circle(this.x, this.y, this.r/2, options);
        World.add(world, this.rain)
    }

   
update(){
if(this.rain.position.y > this.height){
Matter.rain.setPosition(this.rain, {x : random(0, 400), y : random(0, 400)})
}
}
 
display(){
var rainpos = this.rain.position
        push()
        translate(rainpos.x, rainpos.y);
        rectMode(CENTER)
        strokeWeight(3);
        fill(255,0,255)
        ellipse(0,0,this.r, this.r);
            pop()
}

}