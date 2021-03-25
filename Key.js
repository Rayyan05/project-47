class Key{
    constructor(x,y,width,height){
        var options = {
            isStatic:true,
            restitution:0.3
        }

        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width
        this.height = height
        this.image = loadImage("key.jpg")
        World.add(world,this.body)

    }

    display(){
        var pos = this.body.position
        var angle = this.body.angle

        imageMode(CENTER)
       image(this.image,pos.x,pos.y,this.width,this.height)
    }
}