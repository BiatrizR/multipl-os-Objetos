class Ground {
  //Defini atributos do objetos 
  constructor(x, y, w, h){
    let options = {
      isStatic:true
    };
    
    //this = qualquer objeto/esse objeto
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }

  show(){
    var pos = this.body.position;
    Matter.Body.rotate(this.body, angle);
    
    push();
    translate(pos.x, pos.y)
    rotate(angle);
    fill("green")
    rect(0, 0, this.w, this.h);
    angle += 0.03;
    pop();

  }

   
}
