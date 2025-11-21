interface Bibliotecas {
    titulo: string;
    autor: string;
    genero: string;
    disponivel: boolean;
}

class BibliotecaGestao {
    private livros: Bibliotecas[];

    constructor() {
    this.livros = [];
    }

    adicionarLivros(livros: Bibliotecas[]) {
        livros.forEach(livro => {
            if (!this.livros.includes(livro)) {
            this.livros.push(livro);
            }
        });
    }

    filtrarPorGenero(genero: Bibliotecas['genero']) {
    return this.livros.filter(livro => livro.genero === genero);
    }

    buscarPorAutor(autor: Bibliotecas['autor']) {
    return this.livros.find(livro => livro.autor === autor);
    }

    obterLivrosDisponiveisOrdenados() {
    return this.livros.filter(livro => livro.disponivel).sort((a, b) => a.titulo.localeCompare(b.titulo));
    }
}


let livros = new BibliotecaGestao();

const lib = [
    { titulo: 'Livro 1', autor: 'Autor 1', genero: 'Gênero 1', disponivel: true },
    { titulo: 'Livro 2', autor: 'Autor 2', genero: 'Gênero 2', disponivel: false },
    { titulo: 'Livro 3', autor: 'Autor 3', genero: 'Gênero 1', disponivel: true },
];

livros.adicionarLivros(lib);

console.log('Livros filtrados por gênero');
console.log(livros.filtrarPorGenero('Gênero 1'));
console.log('Livros filtrados por autor');
console.log(livros.buscarPorAutor('Autor 2'));
console.log('Livros disponíveis ordenados por título');
console.log(livros.obterLivrosDisponiveisOrdenados());
