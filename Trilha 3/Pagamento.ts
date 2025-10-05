class Pagamento {
    
    processar() {

    }
}

class PagamentoCartao extends Pagamento {
    private numeroCartao: number

    constructor(numeroCartao: number) {
        super()
        this.numeroCartao = numeroCartao
    }

    processar(): void {
        
    }
}

class PagamentoBoleto extends Pagamento {
    private numeroBoleto: number

    constructor(numeroBoleto: number) {
        super()
        this.numeroBoleto = numeroBoleto
    }

    processar(): void {
        
    }
}