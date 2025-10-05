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
        if (this.lido === false) {
            console.log("O livro " + this.titulo + " não foi lido.");
        }
        else {
            console.log("O livro " + this.titulo + " foi lido.");
        }
    };
    Livro.prototype.statusLivro = function () {
        console.log("Título: " + this.titulo);
        console.log("Autor: " + this.autor);
        console.log("Páginas: " + this.paginas);
        console.log("Lido: " + (this.lido ? "Sim" : "Não"));
    };
    return Livro;
}());
var livro = new Livro("Crime e Castigo", "Dostoievski", 535, false);
console.log("O livro " + livro.getTitulo() + " do autor " + livro.getAutor() + ", que contém " + livro.getPaginas() + " páginas, foi lido?");
livro.statusLivro();
livro.livroLido();
