// Classe abstrata Funcionario
class Funcionario {
    private nome: string;
    private salario: number;

    constructor(nome: string, salario: number) {
        this.nome = nome;
        this.salario = salario;
    }

    public getNome(): string {
        return this.nome;
    }

    public getSalario() {
        return this.salario;
    }

    public mostrarNomeESalario() {
        console.log(`O funcionário ${this.nome} recebe R$ ${this.salario} sem o bônus.`)
    }

    calcularBonus(): any {

    };

    calcularSalarioComBonus(): number {
        return this.salario + this.calcularBonus();
    }
}

// Subclasse Gerente
class Gerente extends Funcionario {
    calcularBonus(): number {
        return this.getSalario() * 0.1;
    }
}

// Subclasse Operario
class Operario extends Funcionario {
    calcularBonus(): number {
        return this.getSalario() * 0.05;
    }
}

// Função que calcula o salário com bônus para um array de funcionários
function calcularSalarioComBonusFuncionarios(funcionarios: Funcionario[]): void {
    funcionarios.forEach(funcionario => {
        const salarioComBonus = funcionario.calcularSalarioComBonus();
        console.log(`Funcionário: ${funcionario.getNome()}. Salário com bônus: R$ ${salarioComBonus.toFixed(2)}`);
    });
}

// Exemplo de uso
const gerente = new Gerente("João", 10000);
const operario = new Operario("Maria", 5000);

const funcionarios: Funcionario[] = [gerente, operario];

gerente.mostrarNomeESalario();
operario.mostrarNomeESalario();

calcularSalarioComBonusFuncionarios(funcionarios);