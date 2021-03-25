class Ball{
    constructor(x,y,radius){
        
    var options = {
        'isStatic':false,
        'restitution':0.3
    }

    this.body = Bodies.circle(x,y,radius,options)
    this.radius = radius
    World.add(world,this.body)
    }

    display(){
        var pos = this.body.position
        var angle = this.body.angle

        push();
        ellipseMode(RADIUS)
        ellipse(pos.x,pos.y,this.radius)
        pop();
    }
}