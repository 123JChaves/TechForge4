var Produto = /** @class */ (function () {
    function Produto(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    Produto.prototype.getNome = function () {
        return this.nome;
    };
    Produto.prototype.getPreco = function () {
        return this.preco;
    };
    Produto.prototype.getQuantidade = function () {
        return this.quantidade;
    };
    Produto.prototype.valorEstoque = function () {
        return this.preco * this.quantidade;
    };
    return Produto;
}());
var estoqueProduto = new Produto("Pneu XTW120", 1200, 80);
console.log("O produto " + estoqueProduto.getNome() + " custa R$" + estoqueProduto.getPreco() + " e tem " + estoqueProduto.getQuantidade() + " unidades no estoque.");
console.log("O valor total do estoque é de: R$" + estoqueProduto.valorEstoque());
