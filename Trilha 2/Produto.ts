class Produto {

    private nome: string
    private preco: number
    private quantidade: number

    constructor(nome: string, preco: number, quantidade: number) {
        this.nome = nome
        this.preco = preco
        this.quantidade = quantidade
    }

    getNome(): string {
        return this.nome
    }

    getPreco(): number {
        return this.preco
    }

    getQuantidade(): number {
        return this.quantidade
    }

    valorEstoque() {
        return this.preco * this.quantidade
    }
    
}

const estoqueProduto = new Produto("Pneu XTW120", 1200, 80)
console.log("O produto "+estoqueProduto.getNome()+" custa R$"+estoqueProduto.getPreco()+" e tem "+estoqueProduto.getQuantidade()+" unidades no estoque.")
console.log("O valor total do estoque é de: R$"+ estoqueProduto.valorEstoque())
