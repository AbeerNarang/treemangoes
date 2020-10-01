class Mango {
    constructor(x, y,radius) {
    var options = {
    isStatic:true,
    restitution:0,
    friction:1
    }
    this.image = loadImage("mango.png");
    this.body = Bodies.circle(x, y,radius, options);
    this.radius = radius;
    this.x = x;
    this.y = y;
    World.add(world, this.body);
    }
    display(){
    var pos =this.body.position;
    push();
    var angle = this.body.angle;
    translate(pos.x,pos.y);
    imageMode(RADIUS);
    fill("blue");
    image(this.image,0,0, this.radius,this.radius);
    pop();
    }
    };  