interface Produtos {
    id: number;
    nome: string;
    preco: number;
}

class ItemLoja implements Produtos {
    id: number;
    nome: string;
    preco: number

    constructor(id: number, nome: string, preco: number) {
        this.id = 3;
        this.nome = 'PS5';
        this.preco = 4.560;
    }
}