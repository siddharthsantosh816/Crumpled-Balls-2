class PaperBall{

  constructor(x,y,width,height){
     
    var options={
        restitution:0.8,
        isStatic:false,
        friction:0.9,
        density:1.1
    }

    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    this.image=loadImage('sprites/paper.png')
    World.add(world,this.body);
  }
   
 display() {
     
      var pos=this.body.position;
      
      imageMode(CENTER);
      image(this.image,pos.x,pos.y,this.width,this.height);
 }
}

// class PaperBall{

//     constructor(x,y,width,height){
       
//       var options={
//         restitution:0.8,
//         isStatic:false,
//         friction:0.9,
//         density:1.25
//       }

//       this.body=Bodies.rectangle(x,y,width,height,options);
//       this.width=width;
//       this.height=height;
//       this.image=loadImage('sprites/paper.png')
//       World.add(world,this.body);
//     }
     
//    display() {
       
//         var pos=this.body.position;
//         fill("white");
//         imageMode(CENTER);
//         image(this.image,pos.x,pos.y,this.width,this.height);
//    }
// }