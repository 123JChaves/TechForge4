interface Documento {
    titulo: string;
    conteudo: string
}

class Texto implements Documento {
    titulo: string;
    conteudo: string

    constructor(titulo: string, conteudo: string) {
        this.titulo = titulo;
        this.conteudo = conteudo;
    }

    exibir() {
        console.log(`Título: ${this.titulo}\nConteúdo: ${this.conteudo}`);
    }
}

const texto = new Texto('Bondade', "A bondade é o ato de ser daquele a quem chamamos de bom.");
texto.exibir();