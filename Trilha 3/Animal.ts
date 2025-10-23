// Classe Animal

class Animal {
    protected nome: string
    protected energia: number;
    private quantidade: number

    constructor(nome: string, energia: number, quantidade: number) {
        this.nome = nome
        this.energia = energia;
        this.quantidade = quantidade;
    }

    comer(): void {
        this.energia += this.quantidade;
        console.log(`O ${this.nome} comeu e recuperou ${this.quantidade} de energia.`);
    }

    statusEnergia(): void {
        console.log(`Nível de energia: ${this.energia}`);
    }

    realizarAcao(): void {

    };
}

// Subclasse Leao
class Leao extends Animal {
    private energiaGastaCacada: number = 20;

    constructor(nome: string, energia: number, quantidade: number, energiaGastaCada: number) {
        super(nome, energia, quantidade);
        this.energiaGastaCacada = energiaGastaCada;
    }

    realizarAcao(): void {
        if (this.energia >= this.energiaGastaCacada) {
            this.energia -= this.energiaGastaCacada;
            console.log("Leão caçou e gastou energia.");
            this.comer(); // Leão come após caçar
        } else {
            console.log("Leão não tem energia suficiente para caçar.");
        }
    }
}

// Subclasse Passaro
class Passaro extends Animal {

    constructor(nome: string, energia: number, quantidade: number) {
        super(nome, energia, quantidade);
    }

    realizarAcao(): void {
        this.comer(); // Passaro come para se alimentar
    }
}

// Função que usa polimorfismo para chamar métodos de diferentes animais
function realizarAcaoAnimal(animal: Animal): void {
    animal.realizarAcao();
    animal.statusEnergia();
}

// Exemplo de uso
const leao = new Leao("Leão", 100, 3, 3);
const passaro = new Passaro("Passaro", 50, 5);

console.log("Leão:");
realizarAcaoAnimal(leao);

console.log("\nPassaro:");
realizarAcaoAnimal(passaro);