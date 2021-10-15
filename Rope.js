class Rope{
    constructor(body1,body2){
        var options = {
            bodyA:body1,
            bodyB:body2,
            length:50
        }
        this.chain= Constraint.create(options);
        World.add(world, chain);
    }
    display(){
    line(this.Rope.bodyA.position.x, this.rope.bodyA.position.y, this.rope.bodyB.position.x, this.rope.bodyB.position.y);
    }
}