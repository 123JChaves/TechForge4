const texto: string = 'Hello World'
const numero: number = 50
const check: boolean = false
const meses: string[] = ['janeiro', 'fevereiro', 'março', 'abril']

function soma(numero1: number, numero2: number): number {
        return numero1 + numero2
}

console.log('A soma de ',numero,'e',numero, 'é igual a: ',soma(numero,numero))

type Endereco = {
    rua: string,
    numero: number,
    cidade: string
}

function getEndereco(endereco: Endereco): string {
    return `Rua ${endereco.rua}, ${endereco.numero} - ${endereco.cidade}`
}

console.log(getEndereco({
    rua: 'São Josafat',
    numero: 55,
    cidade: 'Campo Mourão'
}))

//Funções de Array JS:
//map
//filter
//reduce
//foreach

function filtrarArray(coisas: any[]): number[] {
    return coisas.filter(coisa => typeof coisa === 'number')
}

console.log(`Linhas filtradas: ${filtrarArray(['A', true, 2, 3, 4])}`)