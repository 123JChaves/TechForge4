class Retangulo {

    private largura: number
    private altura: number

    constructor(largura: number, altura: number) {
       
        this.largura = largura
        this.altura = altura

    }

    public area() {
        console.log(this.altura * this.largura)
    }

    public perimetro() {
        console.log((this.altura + this.largura) * 2)
    }

}

let retangulo = new Retangulo(10, 20)
retangulo.area()
retangulo.perimetro()


