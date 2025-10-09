class Item {
    private nome: string
    private quantidadeItem: number
    private preco: number

    constructor(nome: string, quantidadeItem: number, preco: number) {
        this.nome = nome;
        this.quantidadeItem = quantidadeItem;
        this.preco = preco;
    }

    getNome(): string {
    return this.nome;
    }

    getQuantidade(): number {
        return this.quantidadeItem
    }

    getPreco(): number {
        return this.preco
    }
}

class Pedido {
    private numeroPedido: number;
    private itens: Item[];
    private total: number

    constructor(numeroPedido: number, itens: Item, valor: number) {
        this.numeroPedido = numeroPedido
        this.itens = []
        this.total = 0
    }

    public adicionarItem(item: Item): void {
        this.itens.push(item)
        this.total += (item.getQuantidade() * item.getPreco())
    }

    public removerItem(indice: number): void {
        this.itens.slice(indice,1)
    }

    public exibirDetalhes(): void {
        const detalhesItens = this.itens.map((item) => {
            return `${item.getNome()} x${item.getQuantidade()} = R$${(item.getQuantidade() * item.getPreco()).toFixed(2)}`;
        }).join("\n");

        console.log(`Pedido #${this.numeroPedido}`);
        console.log("Itens:");
        console.log(detalhesItens);
        console.log(`Total: R$${this.total.toFixed(2)}`);
        }

        //Mostrar na tela os itens, quantidade, valores e o total da compra
        //Dica: console.log, map e join
    }

    const item1 = new Item("Produto A", 2, 10.99);
    const item2 = new Item("Produto B", 1, 5.99);

    const pedido = new Pedido(1, item1 && item2, 350);
    pedido.adicionarItem(item1);
    pedido.adicionarItem(item2);
    pedido.exibirDetalhes();
