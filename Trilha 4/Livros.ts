interface Livro {
    titulo: string;
    autor: string;
    disponível: boolean;
}

class Biblioteca {
    private livros: Livro[];

    constructor() {
    this.livros = [];
    }

    adicionarLivro(livro: Livro) {
    this.livros.push(livro);
    }

    buscarLivrosDisponíveis(): Livro[] {
    return this.livros.filter(livro => livro.disponível);
    }

    exibirLivros() {
    console.log(JSON.stringify(this.livros, null, 2));
    }
}

const biblioteca = new Biblioteca();
biblioteca.adicionarLivro({titulo: 'O Senhor dos Anéis', autor: 'Tolkien', disponível: true});
biblioteca.adicionarLivro({titulo: 'As Crônicas de Nárnia', autor: 'C. S. Lewis', disponível: false});
biblioteca.adicionarLivro({titulo: '1984', autor: 'Jorge Orwell', disponível: true});
biblioteca.adicionarLivro({titulo: 'A República', autor: 'Platão', disponível: true});
biblioteca.adicionarLivro({titulo: 'Irmãos Karámazov', autor: 'F. M. Dostoiévski', disponível: true});
biblioteca.adicionarLivro({titulo: 'Noites Brancas', autor: 'F. M. Dostoiévski', disponível: false});
biblioteca.adicionarLivro({titulo: 'Apologia de Sócrates', autor: 'Platão', disponível: false});
biblioteca.adicionarLivro({titulo: 'A Revolução dos Bichos', autor: 'George Orwell', disponível: false});
biblioteca.adicionarLivro({titulo: 'A Cidade de Deus', autor: 'Santo Agostinho', disponível: true});

console.log('Livros disponíveis:');
console.log(JSON.stringify(biblioteca.buscarLivrosDisponíveis(), null, 2));

console.log('Todos os livros:');
biblioteca.exibirLivros();