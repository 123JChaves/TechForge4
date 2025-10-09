class Cachorro {
    private nome: string
    private raca: string
    private idade: number
    
    constructor(nome: string, raca: string, idade: number) {

    this.nome = nome
    this.raca = raca
    this.idade = idade

    }

    public getIdade(): number {
        return this.idade
    }

    public idadeCachorro(idade: number) {
        return idade*7

    }

}

let MeuCachorro = new Cachorro('Pablo', 'Pastro Alemão', 3)
console.log(MeuCachorro.idadeCachorro(MeuCachorro.getIdade()))