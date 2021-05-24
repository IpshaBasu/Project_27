class Rope{
    constructor(bodyA, bodyB, offsetX, offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB:{x:this.offsetX, y:this.offsetY}
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    
    display(){
            var pointA = this.rope.bodyA.position;
            var pointB = this.rope.bodyB.position;
            
            stroke(48,22,8);
                strokeWeight(3);
                var anchorX = pointA.x;
                var anchorY = pointA.y;
                var anchor2X = pointB.x+this.offsetX;
                var anchor2Y = pointB.y+this.offsetY;
                line(anchorX, anchorY, anchor2X, anchor2Y);
            }
        }
