var Cachorro = /** @class */ (function () {
    function Cachorro(nome, raca, idade) {
        this.nome = nome;
        this.raca = raca;
        this.idade = idade;
    }
    Cachorro.prototype.getIdade = function () {
        return this.idade;
    };
    Cachorro.prototype.idadeCachorro = function (idade) {
        return idade * 7;
    };
    return Cachorro;
}());
var MeuCachorro = new Cachorro('Pablo', 'Pastro Alemão', 3);
console.log(MeuCachorro.idadeCachorro(MeuCachorro.getIdade()));
