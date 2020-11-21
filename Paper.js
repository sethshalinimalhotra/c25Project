class Paper{
    constructor(x,y,radius){
        var options = { 
            isStatic: false,
            restitution: 0.3,
            friction: 1,
            density: .5
        };
        this.body = Bodies.circle(x,y,radius/2,options);
        this.radius = radius/2;
        this.image = loadImage("paper1.png");
        World.add(world,this.body);

    }
    display(){
        var pos = this.body.position;
        var angle = this.angle
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,50,80);
        pop();
    }
};