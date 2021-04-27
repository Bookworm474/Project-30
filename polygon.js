class Polygon{
    constructor(x,y){
        var options = {
            restitution: 0.8,
            density: 1.5,
            friction: 0.4
        }

        this.body = Bodies.circle(x,y,20,options);
        this.radius = 20;
        this.image = loadImage("polygon.png");

        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        //pos.x = this.body.position.x;
        //pos.y = this.body.position.y;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        imageMode(CENTER);
        image(this.image,0,0,this.radius*2+10,this.radius*2+10);
        pop();
    }
}