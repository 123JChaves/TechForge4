var Dog = /** @class */ (function () {
    function Dog(name, idade) {
        this.name = name;
        this.idade = idade;
    }
    Dog.prototype.makeSound = function () {
        console.log(this.name + " faz Woof! Ele tem " + this.idade + " anos.");
        alert(this.name + " faz Woof! Ele tem " + this.idade + " anos.");
        document.writeln(this.name + " faz Woof! Ele tem " + this.idade + " anos.");
    };
    return Dog;
}());
var dog = new Dog("Rex", 32);
dog.makeSound();
