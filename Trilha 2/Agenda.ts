class Agenda {

    private compromissos: string []

    constructor(compromissos: string []) {

        this.compromissos = compromissos

    }

    agendarCompromisso(compromisso: string): void {

        this.compromissos.push(compromisso)
        console.log("Compromisso agendado: "+compromisso)

    }

    listarCompromissos(): void {
        if (this.compromissos.length === 0) {
            console.log("Não há compromisso agendado.")
        } else {
            console.log("Compromissos agendados: ")
            this.compromissos.forEach((compromisso, index) => {
                console.log(index + 1, compromisso)
            })
        }
    }
}

let agenda = new Agenda([])
agenda.agendarCompromisso("Reunião às 10h")
agenda.agendarCompromisso("Encontro com amigos às 19h")
agenda.agendarCompromisso("Estudar das 13h às 15h")
agenda.listarCompromissos()
