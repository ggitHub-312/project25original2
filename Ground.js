class Ground{

    constructor(x,y,width,height,){
        var options = {
            isStatic:true
        }

        this.body = Bodies.rectangle(x,y,width,height,options)
        this.x = x
        this.y = y
        this.width = width;
        this.height =height;
        World.add(world,this.body);
    }

    display(){

        var groundpos = this.body.position;

        fill("grey");
        rect(groundpos.x,groundpos.y,this.width,this.height)
    }
}