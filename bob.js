class bob {
    constructor(x, y, radius) {
      
	 var options ={
		restitution: 0.5,
		isStatic : false,
		friction : 0.3,
		density : 20
    }

      this.body = Bodies.circle(x, y, radius, options);
      World.add(world, this.body);
    
    }
    display(){
      var pos =this.body.position;
      fill(255,0,254);
      ellipseMode(RADIUS);
      ellipse(pos.x,pos.y,20,20);
      pop();
    }
};
