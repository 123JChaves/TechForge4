var ContaBancaria = /** @class */ (function () {
    function ContaBancaria(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }
    ContaBancaria.prototype.getTitular = function () {
        return this.titular;
    };
    ContaBancaria.prototype.getSaldo = function () {
        return this.saldo;
    };
    ContaBancaria.prototype.Deposito = function (deposito) {
        if (deposito > 0) {
            this.saldo = this.saldo + deposito;
            console.log("Deposito realizado com sucesso! O deposito foi no valor de: R$" + deposito + ". Seu novo saldo é:  R$ " + this.saldo);
        }
        else {
            console.log("O valor deve ser maior do que zero.");
        }
    };
    ContaBancaria.prototype.Saque = function (saque) {
        if (saque > 0 && saque < this.saldo) {
            this.saldo = this.saldo - saque;
            console.log("Saque realizado com sucesso! O valor sacado foi: R$" + saque + ". E o valor atual do seu saldo é: R$" + this.saldo);
        }
        else {
            console.log("Saque inválido! O Valor do saque deve ser maior do que zero e menor que o saldo.");
        }
    };
    return ContaBancaria;
}());
var movimentacaoDeposito = new ContaBancaria('Mario', 2500);
movimentacaoDeposito.Deposito(1300);
var movimentacaoSaque = new ContaBancaria('Mario', 1500);
movimentacaoSaque.Saque(800);
