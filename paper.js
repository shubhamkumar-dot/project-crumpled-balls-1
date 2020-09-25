class Paper{
    constructor(x,y,radius){
        var ball_options = {
           'isStatic':false,
           'restitution':0.3,
           'friction':0.5,
           'density':1.2 
        }
        this.body = Bodies.circle(x,y,radius,ball_options);
        this.radius = radius;

        World.add(world,this.body);

    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
         push();
         translate(pos.x,pos.y);
         rotate(angle);
         fill("red");
         ellipseMode(RADIUS);
         ellipse(0,0,this.radius);
         pop();
 
    }
}