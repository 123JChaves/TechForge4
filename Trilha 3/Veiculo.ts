class Veiculo {

    private nome: string;
    
    constructor(nome: string) {
        this.nome = nome;
    }

    mover() {
        console.log("O Veículo está se movendo");
    }
}

class Carro extends Veiculo {
    constructor(nome: string) {
        super(nome);
    }

    mover(nome = "Race") {
        console.log("O Carro "+nome+" está se movendo");
    }
}

class Bicicleta extends Veiculo {
    constructor(nome: string) {
        super(nome);
    }
    mover(nome = "Bibike") {
        console.log("A Bicicleta "+nome+" está se movendo");
    }

}

function fazerCarroAcelerarInsanamente(veiculo: Veiculo, nome: string) {
    console.log("Acelerando o veículo "+nome+" barbaramente.")
}

const vrum = new Carro("Vraum");
const bike = new Bicicleta("Bibike");

vrum.mover();
bike.mover();

fazerCarroAcelerarInsanamente(vrum, "Vraum");
fazerCarroAcelerarInsanamente(bike, "Bibike")
