class Funcionario {
    private nome: string
    private salario: number

    constructor(nome: string, salario: number) {
        this.nome = nome
        this.salario = salario
    }

    calcularBonus() {

    }
}

class Gerente extends Funcionario {

}

class Operario extends Funcionario {

}
