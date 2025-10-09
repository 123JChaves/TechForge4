var Item = /** @class */ (function () {
    function Item(nome, quantidadeItem, preco) {
        this.nome = nome;
        this.quantidadeItem = quantidadeItem;
        this.preco = preco;
    }
    Item.prototype.getNome = function () {
        return this.nome;
    };
    Item.prototype.getQuantidade = function () {
        return this.quantidadeItem;
    };
    Item.prototype.getPreco = function () {
        return this.preco;
    };
    return Item;
}());
var Pedido = /** @class */ (function () {
    function Pedido(numeroPedido, itens, valor) {
        this.numeroPedido = numeroPedido;
        this.itens = [];
        this.total = 0;
    }
    Pedido.prototype.adicionarItem = function (item) {
        this.itens.push(item);
        this.total += (item.getQuantidade() * item.getPreco());
    };
    Pedido.prototype.removerItem = function (indice) {
        this.itens.slice(indice, 1);
    };
    Pedido.prototype.exibirDetalhes = function () {
        var detalhesItens = this.itens.map(function (item) {
            return "".concat(item.getNome(), " x").concat(item.getQuantidade(), " = R$").concat((item.getQuantidade() * item.getPreco()).toFixed(2));
        }).join("\n");
        console.log("Pedido #".concat(this.numeroPedido));
        console.log("Itens:");
        console.log(detalhesItens);
        console.log("Total: R$".concat(this.total.toFixed(2)));
    };
    return Pedido;
}());
var item1 = new Item("Produto A", 2, 10.99);
var item2 = new Item("Produto B", 1, 5.99);
var pedido = new Pedido(1, item1 && item2, 350);
pedido.adicionarItem(item1);
pedido.adicionarItem(item2);
pedido.exibirDetalhes();
