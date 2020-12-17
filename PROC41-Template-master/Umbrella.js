class Umbrella {
constructor(x, y, r){
    var options = {
    isStactic = true
    }
this.x = x
this.y = y
this.r = 50;
this.Image = loadImage('images/walking_1.png')
this.body = Bodies.circle(this.x, this.y, this.r, options)



}

display(){
var pos = this.body.position
imageMode(CENTER)
image(this.Image, pos.x, pos.y + 70, 300, 300);
}

}