class FiguraGeometrica {
    calcularArea() {

    }
}

class Circulo extends FiguraGeometrica {
    private raio: number;

    constructor(raio: number) {
        super();
        this.raio = raio;
    }

    calcularArea(): number {
        return Math.PI * Math.pow(this.raio, 2)
    }
}

class Quadrado extends FiguraGeometrica {
    private lado: number;

    constructor(lado: number) {
        super();
        this.lado = lado;
    }

    calcularArea(): number {
        return Math.pow(this.lado, 2);
    }

}

class Triangulo extends FiguraGeometrica {
    private base: number;
    private altura: number;

    constructor(base: number, altura: number) {
        super();
        this.base = base;
        this.altura = altura;
    }

    calcularArea(): number {
        return (this.base * this.altura) / 2;
    }

}

function imprimirAreas(figuras: FiguraGeometrica[]) {
    figuras.forEach((figura, indice) => {
        console.log(`Área da figura ${indice + 1}: ${figura.calcularArea()}`);
    });
}

const circulo = new Circulo(15);
const quadrado = new Quadrado(4);
const triangulo = new Triangulo(3, 6);

imprimirAreas([circulo, quadrado, triangulo]);

