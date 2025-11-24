var person = {
    name: "João",
    age: 30,
    greet: function () {
        console.log("Olá, meu nome é " + this.name +
            " e tenho " + this.age + " anos.");
        alert("Olá, meu nome é " + this.name +
            " e tenho " + this.age + " anos.");
        document.writeln("Olá, meu nome é " + this.name +
            " e tenho " + this.age + " anos.<br><br>");
    }
};
person.greet();
var person2 = {
    name: "Gabi",
    age: 33,
    greet: function () {
        console.log("Olá, meu nome é " + this.name +
            " e tenho " + this.age + " anos.");
        alert("Olá, meu nome é " + this.name +
            " e tenho " + this.age + " anos.");
        document.writeln("Olá, meu nome é " + this.name +
            " e tenho " + this.age + " anos.");
    }
};
person2.greet();
