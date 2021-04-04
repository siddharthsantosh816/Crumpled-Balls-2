class Box{

  constructor(x,y,width,height){
     
    var options={
        restitution:0.3,
        isStatic:true
    }

    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    World.add(world,this.body);

  }
   
 display(){
     
      var pos=this.body.position;
      fill("white");
      rectMode(CENTER);
      rect(pos.x,pos.y,this.width,this.height);

 }
}




// class Dustbin extends BaseClass{
//   constructor(x,y,width,height){
//     super(x,y,width,height);
//     this.image=loadImage('sprites/dustbin.png');
//   }
// };
  



// class Dustbin{

//     constructor(x,y,width,height){
       
//       var options={
//           restitution:0.3,
//           isStatic:true
//       }

//       this.body=Bodies.rectangle(x,y,width,height,options);
//       this.width=width;
//       this.height=height;
//       this.image=loadImage('sprites/dustbin.png')
//       World.add(world,this.body);

//     }
     
//    display(){
       
//         var pos=this.body.position;
//         fill("white");
//         imageMode(CENTER);
//         image(this.image,pos.x,pos.y,this.width,this.height);
 
//    }
// }