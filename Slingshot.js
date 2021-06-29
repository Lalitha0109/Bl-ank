class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.S1=loadImage("sprites/sling1.png");
        this.S2=loadImage("sprites/sling2.png");
        this.S3=loadImage("sprites/sling3.png");

    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.S1,190,20);
        image(this.S2,160,20);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke(48,22,8);
            if(pointA.x<230){

                line(pointA.x-20, pointA.y+10, pointB.x, pointB.y);
                line(pointA.x-20, pointA.y+10, pointB.x-40, pointB.y);
            
                image(this.S3,pointA.x-20, pointA.y-5,15,30);
            }else{
                line(pointA.x+20, pointA.y+10, pointB.x, pointB.y);
                line(pointA.x+20, pointA.y+10, pointB.x-40, pointB.y);
            
                image(this.S3,pointA.x+20, pointA.y-5,15,30);

            }
        }
    }

    
}