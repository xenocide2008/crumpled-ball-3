class Paper
{
    constructor(x,y)
    {
        var option={
            restitution:0,
            friction:1,density:1
        }
        this.body=Bodies.rectangle(x,y,50,50,option)
        World.add(world,this.body)
        this.image=loadImage("paper.png")
    }

    display()
    {
      imageMode(CENTER)
      push()
      translate(this.body.position.x,this.body.position.y)
      rotate(this.body.angle)
      image(this.image,0,0,50,50)
      pop()
    }
}
