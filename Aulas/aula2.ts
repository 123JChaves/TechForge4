class Pessoa {

    private nome: string;
    private idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }


    public apresentar(): void {
    console.log(
        `Olá, meu nome é ${this.nome}, 
        e tenho ${this.idade} anos.`);
    }

}

const pessoa = new Pessoa("Ana", 28);
pessoa.apresentar();
