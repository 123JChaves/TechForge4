class Temepratura {

    private temperaturaCelsius: number

    constructor(temperaturaCelsius: number) {
        this.temperaturaCelsius = temperaturaCelsius
    }

    getCelsius() {
        return this.temperaturaCelsius
    }

    celsiusParaKelvin() {
        console.log("A temperatura de "+this.temperaturaCelsius+"ºC equivale a "+(this.temperaturaCelsius * 274.15)+"ºK")
    }

    celsiusParaFarenhait() {
        console.log("A temperatura de "+this.temperaturaCelsius+"ºC equivale a "+(this.temperaturaCelsius * 33.8)+"ºF")
    }

}

let graus = new Temepratura(30)
graus.celsiusParaFarenhait()
graus.celsiusParaKelvin()
