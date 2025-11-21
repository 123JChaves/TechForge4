interface ProdutoLoja {
    codigo: number;
    nome: string;
}

class Loja {
    private produtos: ProdutoLoja[];

    constructor(produtos: ProdutoLoja[]) {
    this.produtos = produtos;
    }

    adicionarProduto(produto: ProdutoLoja) {
    this.produtos.push(produto);
    console.log(produto);
    }

    getCodigo(codigo: ProdutoLoja["codigo"]) {
    return codigo;
    }

    buscarProdutoPorCodigo(codigo: ProdutoLoja['codigo']): ProdutoLoja | undefined {
    const produto = this.produtos.find(produto => produto.codigo === codigo);
    if (!produto) {
        return undefined;
    } else {
        return produto;
        }
    }
}

const loja = new Loja([]);
loja.adicionarProduto({codigo: 1, nome: "Notebook"});
loja.adicionarProduto({codigo: 2, nome: "Celular"});
loja.adicionarProduto({codigo: 3, nome: "PS5"});
loja.adicionarProduto({codigo: 4, nome: "Xbox One"});
loja.adicionarProduto({codigo: 5, nome: "Nintendo Switch"})

console.log(`A busca pelo código ${loja.getCodigo(3)} resultou em: ${JSON.stringify(loja.buscarProdutoPorCodigo(3))}`);
console.log(`A busca pelo código ${loja.getCodigo(5)} resultou em: ${JSON.stringify(loja.buscarProdutoPorCodigo(5))}`);
console.log(`A busca pelo código ${loja.getCodigo(6)} resultou em: ${JSON.stringify(loja.buscarProdutoPorCodigo(6))}`);
console.log(`A busca pelo código ${loja.getCodigo(11)} resultou em: ${JSON.stringify(loja.buscarProdutoPorCodigo(11))}`);