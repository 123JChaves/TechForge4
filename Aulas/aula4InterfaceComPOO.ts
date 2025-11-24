interface Mamifero {
    idade: number;
    makeSound(): void;
}

class Dog implements Mamifero {
    name: String;
    idade: number;

    constructor(name: String, idade: number) {
        this.name = name;
        this.idade = idade;
    }

    makeSound(): void {
        console.log(this.name+" faz Woof! Ele tem "+this.idade+" anos.");
        alert(this.name+" faz Woof! Ele tem "+this.idade+" anos.");
        document.writeln(this.name+" faz Woof! Ele tem "+this.idade+" anos.");
    }
}

const dog = new Dog("Rex", 32);

dog.makeSound();
