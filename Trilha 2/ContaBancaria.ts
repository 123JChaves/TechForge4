class ContaBancaria {

    private titular: string
    private saldo: number

    constructor(titular: string, saldo: number) {
        this.titular = titular
        this.saldo = saldo
    }

    getTitular(): string {
        return this.titular
    }

    getSaldo(): number {
        return this.saldo
    }

    Deposito(deposito: number): void {
        if (deposito > 0) {
            this.saldo = this.saldo + deposito
            console.log("Deposito realizado com sucesso! O deposito foi no valor de: R$"+deposito+". Seu novo saldo é:  R$ "+this.saldo)
        } else {
            console.log("O valor deve ser maior do que zero.")
        }
    }

    Saque(saque: number): void {

        if (saque > 0 && saque < this.saldo) {
            this.saldo = this.saldo - saque
            console.log("Saque realizado com sucesso! O valor sacado foi: R$"+saque+". E o valor atual do seu saldo é: R$"+this.saldo)
        } else {
            console.log("Saque inválido! O Valor do saque deve ser maior do que zero e menor que o saldo.")
        }
    }
}
let movimentacaoDeposito = new ContaBancaria('Mario', 2500);
movimentacaoDeposito.Deposito(1300)
let movimentacaoSaque = new ContaBancaria('Mario', 1500);
movimentacaoSaque.Saque(800)