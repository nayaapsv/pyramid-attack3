class hexagon{
    constructor(x, y, radius) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.image = loadImage("images/hexagon.png");
        this.radius = radius;
        this.body = Bodies.circle(x, y,radius, options);
       
        
        World.add(world, this.body);
      }
      display(){
        
        translate(this.body.position.x, this.body.position.y);
       
        var pos =this.body.position;
        imageMode(CENTER);
        image(this.image, 0,0,this.radius, this.radius)
       
      }
}