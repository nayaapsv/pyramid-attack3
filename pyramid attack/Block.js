class Block{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
        this.Visibility=255;
      }
      display(){
        
        
       
        
        if(this.body.speed<8)
        {
          var pos =this.body.position;
          rect(pos.x, pos.y, this.width, this.height);
        }
         else
         {
          push();
          World.remove(world,this.body);
          this.Visibility=this.Visibility-5;
          tint(255,this.Visibility);
         
         pop();
         }
        }
        
        score(){
          if (this.Visibility<0 && this.Visibility>-1005 ){
      score++;
          }
          }  
    
}