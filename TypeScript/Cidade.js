var Cidade = /** @class */ (function () {
    function Cidade(nome, populacao, area, anoFundacao) {
        this.nome = nome;
        this.populacao = populacao;
        this.area = area;
        this.anoFundacao = anoFundacao;
    }
    Cidade.prototype.densidadePopulacional = function () {
        console.log("A densindade populacional da cidade de " + this.nome + " é de " + (this.populacao / this.area) + ".");
    };
    Cidade.prototype.idadeCidade = function (anoAtual) {
        if (anoAtual === void 0) { anoAtual = 2025; }
        console.log("A idade da cidade de " + this.nome + " é de " + (anoAtual - this.anoFundacao) + " anos.");
    };
    return Cidade;
}());
var cidade = new Cidade('Dourados', 230000, 45000000, 1965);
cidade.densidadePopulacional();
cidade.idadeCidade();
