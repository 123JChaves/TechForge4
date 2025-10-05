var Temepratura = /** @class */ (function () {
    function Temepratura(temperaturaCelsius) {
        this.temperaturaCelsius = temperaturaCelsius;
    }
    Temepratura.prototype.getCelsius = function () {
        return this.temperaturaCelsius;
    };
    Temepratura.prototype.celsiusParaKelvin = function () {
        console.log("A temperatura de " + this.temperaturaCelsius + "ºC equivale a " + (this.temperaturaCelsius * 274.15) + "ºK");
    };
    Temepratura.prototype.celsiusParaFarenhait = function () {
        console.log("A temperatura de " + this.temperaturaCelsius + "ºC equivale a " + (this.temperaturaCelsius * 33.8) + "ºF");
    };
    return Temepratura;
}());
var graus = new Temepratura(30);
graus.celsiusParaFarenhait();
graus.celsiusParaKelvin();
