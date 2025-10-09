var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade) {
        '';
        this.nome = nome;
        this.idade = idade;
    }
    Pessoa.prototype.apresentar = function () {
        console.log("Ol\u00E1, meu nome \u00E9".concat(this.nome, " \n        e tenho ").concat(this.idade, " anos."));
    };
    return Pessoa;
}());
var pessoa = new Pessoa("Ana", 28);
pessoa.apresentar();
