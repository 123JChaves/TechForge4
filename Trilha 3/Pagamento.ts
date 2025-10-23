// Classe Pagamento
class Pagamento {
    processar(): void {

    };
}

// Subclasse PagamentoCartao
class PagamentoCartao extends Pagamento {
    private numeroCartao: string;
    private valor: number;

    constructor(numeroCartao: string, valor: number) {
        super();
        this.numeroCartao = numeroCartao;
        this.valor = valor;
    }

    processar(): void {
        if (this.validarNumeroCartao()) {
            console.log(`Pagamento de R$ ${this.valor} 
            processado com sucesso usando cartão 
            ${this.numeroCartao.substring(0, 4)}
            ...${this.numeroCartao.substring(12, 16)}`);
        } else {
            console.log("Número de cartão inválido");
        }
    }

    private validarNumeroCartao(): boolean {
        // Implementação básica de validação de número de cartão
        return this.numeroCartao.length === 16 && 
        !isNaN(Number(this.numeroCartao));
    }
}

// Subclasse PagamentoBoleto
class PagamentoBoleto extends Pagamento {
    private valor: number;
    private codigoBoleto: string;

    constructor(valor: number) {
        super();
        this.valor = valor;
        this.codigoBoleto = this.gerarCodigoBoleto();
    }

    processar(): void {
        console.log(`Pagamento de R$ ${this.valor} 
            processado com sucesso. Código de boleto: 
            ${this.codigoBoleto}`);
    }

    private gerarCodigoBoleto(): string {
        // Implementação básica de geração de código de boleto
        return Math.floor(Math.random() * 1000000000).toString();
    }
}

// Função que aceita diferentes tipos de pagamento e processa-os
function processarPagamento(pagamento: Pagamento): void {
    pagamento.processar();
}

// Exemplo de uso
const cartao = new PagamentoCartao("1234567890123456", 100);
const boleto = new PagamentoBoleto(100);

processarPagamento(cartao);
processarPagamento(boleto);