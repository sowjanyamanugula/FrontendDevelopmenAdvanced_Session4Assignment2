class Animal{
    
    constructor(public name:string){
        console.log("This is " + this.name);
    }
    move(dist:number):void{
         console.log(this.name +` moves `+ dist +`m`);
    }
    makeSound(sound:string):void{
        console.log(this.name + ` ` + sound);
    }
}

class Tiger extends Animal{
        constructor(name:string){
       super(name);
    }
    move(dist:number):void{
        
    }
    makeSound(sound:string):void{
       
    }
    
}

class Dog extends Animal{
        constructor(name:string){
       super(name);
    }
    move(dist:number):void{
       
    }
    makeSound(sound:string):void{
        
    }
    
}

class Cat extends Animal{
        constructor(name:string){
       super(name);
    }
    move(dist:number):void{
       
    }
    makeSound(sound:string):void{
        
    }
    
}

class Horse extends Animal{
        constructor(name:string){
       super(name);
    }
    move(dist:number):void{
       
    }
    makeSound(sound:string):void{
        
    }
    
}
let tiger=new Animal("sheru");
tiger.move(500);
tiger.makeSound("roars");

let dog=new Animal("Snoopy");
dog.move(80);
dog.makeSound("barks");

let cat=new Animal("lucy");
dog.move(50);
dog.makeSound("meows");

let horse=new Animal("Jaguar");
dog.move(50);
dog.makeSound("neigh");