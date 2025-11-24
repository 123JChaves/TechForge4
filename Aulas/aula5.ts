abstract class Animal {
    private name: string

    constructor(name: string) {
        this.name = name
    }

    abstract makeSound(): void

    move(): void {
        console.log(`${this.name} is moving.`)
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name)
    }

    makeSound(): void {
        console.log('Wolf! Wolf!')
    }
}

class Cat extends Animal {
    constructor(name: string) {
        super(name)
    }

    makeSound(): void {
        console.log('Meow!')
    }
}

const dog = new Dog('Buddy');
dog.move();
dog.makeSound();

const cat = new Cat('\nWhyskers');
cat.move();
cat.makeSound();