class Cachorro2 {
    private nome: string
    private idade: number

    constructor(nome: string, idade: number) {
        this.nome = nome
        this.idade = idade
    }

    getNome() {
        return this.nome
    }

    getIdade() {
        return this.idade*7
    }

}

const cachorro2 = new Cachorro2('Bob', 3)
console.log('Nosso amigo ',cachorro2.getNome(),'tem ',cachorro2.getIdade(),' anos')
