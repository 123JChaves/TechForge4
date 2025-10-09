var Retangulo = /** @class */ (function () {
    function Retangulo(largura, altura) {
        this.largura = largura;
        this.altura = altura;
    }
    Retangulo.prototype.area = function () {
        console.log(this.altura * this.largura);
    };
    Retangulo.prototype.perimetro = function () {
        console.log((this.altura + this.largura) * 2);
    };
    return Retangulo;
}());
var retangulo = new Retangulo(10, 20);
retangulo.area();
retangulo.perimetro();
