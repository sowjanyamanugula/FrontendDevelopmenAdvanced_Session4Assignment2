var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Animal = (function () {
    function Animal(name) {
        this.name = name;
        console.log("This is " + this.name);
    }
    Animal.prototype.move = function (dist) {
        console.log(this.name + " moves " + dist + "m");
    };
    Animal.prototype.makeSound = function (sound) {
        console.log(this.name + " " + sound);
    };
    return Animal;
}());
var Tiger = (function (_super) {
    __extends(Tiger, _super);
    function Tiger(name) {
        return _super.call(this, name) || this;
    }
    Tiger.prototype.move = function (dist) {
    };
    Tiger.prototype.makeSound = function (sound) {
    };
    return Tiger;
}(Animal));
var Dog = (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.move = function (dist) {
    };
    Dog.prototype.makeSound = function (sound) {
    };
    return Dog;
}(Animal));
var Cat = (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.move = function (dist) {
    };
    Cat.prototype.makeSound = function (sound) {
    };
    return Cat;
}(Animal));
var Horse = (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (dist) {
    };
    Horse.prototype.makeSound = function (sound) {
    };
    return Horse;
}(Animal));
var tiger = new Animal("sheru");
tiger.move(500);
tiger.makeSound("roars");
var dog = new Animal("Snoopy");
dog.move(80);
dog.makeSound("barks");
var cat = new Animal("lucy");
dog.move(50);
dog.makeSound("meows");
var horse = new Animal("Jaguar");
dog.move(50);
dog.makeSound("neigh");
//# sourceMappingURL=app.js.map