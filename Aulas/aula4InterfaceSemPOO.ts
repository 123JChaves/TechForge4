interface Person {
    name: String;
    age: number;
    greet(): void;
}

const person: Person = {
    name: "João",
    age: 30,
    greet() {
        console.log("Olá, meu nome é "+ this.name +
        " e tenho "+ this.age + " anos.");
        alert("Olá, meu nome é "+ this.name +
        " e tenho "+ this.age + " anos.");
        document.writeln("Olá, meu nome é "+ this.name +
        " e tenho "+ this.age + " anos.<br><br>");
    }
}

person.greet();

type Person2 = {
    name: String;
    age: number;
    greet(): void;
}

const person2: Person2 = {
    name: "Gabi",
    age: 33,
    greet() {
        console.log("Olá, meu nome é "+ this.name +
        " e tenho "+ this.age + " anos.");
        alert("Olá, meu nome é "+ this.name +
        " e tenho "+ this.age + " anos.");
        document.writeln("Olá, meu nome é "+ this.name +
        " e tenho "+ this.age + " anos.");
    }
}

person2.greet();