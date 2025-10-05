var Livro = /** @class */ (function () {
    function Livro(titulo, autor, paginas, lido) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.lido = lido;
    }
    Livro.prototype.getTitulo = function () {
        return this.titulo;
    };
    Livro.prototype.getAutor = function () {
        return this.autor;
    };
    Livro.prototype.getPaginas = function () {
        return this.paginas;
    };
    Livro.prototype.getLido = function () {
        return this.lido;
    };
    Livro.prototype.livroLido = function () {
        if (!this.lido === false) {
            console.log("O livro " + this.titulo + " foi lido.");
        }
        else {
            console.log("O livro ", this.titulo, " não foi lido.");
        }
    };
    Livro.prototype.statusLivro = function () {
        console.log("Título: " + this.titulo);
        console.log("Autor: " + this.autor);
        console.log("Páginas: " + this.paginas);
        console.log("Lido: " + this.lido);
        if (this.lido === true) {
            console.log("Sim");
        }
        else {
            console.log("Não");
        }
    };
    return Livro;
}());
var livro = new Livro("Crime e Castigo", "Dostoievski", 535, false);
console.log("O livro " + livro.getAutor() + " do autor " + livro.getAutor() + ", que contém " + livro.getPaginas() + " paginas, foi lido?");
livro.livroLido();
livro.statusLivro();
