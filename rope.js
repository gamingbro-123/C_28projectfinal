class Rope
{

    constructor(body1,point2)
    {

    var options = {
        bodyA:body1,
        pointB:point2,
        length:10,
        stiffness:0.03
    }
    
    this.chain = Matter.Constraint.create(options);

    World.add(world,this.chain);

        
}

display()
{

    if(this.chain.bodyA!==null)
    {
    
    var firstPosition = this.chain.bodyA.position
    var secondPosition = this.chain.pointB

    line(firstPosition.x,firstPosition.y,secondPosition.x,secondPosition.y)
    }
}

fly()
{
    this.chain.bodyA=null
}

}