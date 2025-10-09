class Cidade {

    private nome: string
    private populacao: number
    private area: number
    private anoFundacao: number

    constructor(nome: string, populacao: number, area: number, anoFundacao: number) {

        this.nome = nome
        this.populacao = populacao
        this.area = area
        this.anoFundacao = anoFundacao

    }

    densidadePopulacional() {
        console.log("A densindade populacional da cidade de "+this.nome+" é de "+(this.populacao / this.area)+".")
        }

    idadeCidade(anoAtual: number = 2025) {
        console.log("A idade da cidade de "+this.nome+" é de "+(anoAtual - this.anoFundacao)+" anos.")
    }

}

let cidade = new Cidade('Dourados', 230000, 45000000, 1965)
cidade.densidadePopulacional()
cidade.idadeCidade()