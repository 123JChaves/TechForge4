class Livro {
    private titulo: string
    private autor: string
    private paginas: number
    private lido: boolean

    constructor(titulo: string, autor: string, paginas: number, lido: boolean) {
        this.titulo = titulo
        this.autor = autor
        this.paginas = paginas
        this.lido = lido
    }

    getTitulo(): string {
        return this.titulo
    }

    getAutor(): string {
        return this.autor
    }

    getPaginas(): number {
        return this.paginas
    }

    getLido(): boolean {
        return this.lido
    }

    livroLido(): void {
        if (!this.lido === false) {
            console.log("O livro "+this.titulo+" foi lido.")
        } else {
            console.log("O livro ",this.titulo," não foi lido.")
        }
    }

    statusLivro(): void {

        console.log("Título: "+this.titulo)
        console.log("Autor: "+this.autor)
        console.log("Páginas: "+this.paginas)
        console.log("Lido: "+this.lido)
        if (this.lido === true) {
            console.log("Sim")
        } else {
            console.log("Não")
        }
    }

}

const livro = new Livro("Crime e Castigo", "Dostoievski", 535, false)
console.log("O livro "+livro.getAutor()+" do autor "+livro.getAutor()+", que contém "+livro.getPaginas()+" paginas, foi lido?")
livro.livroLido()
livro.statusLivro()