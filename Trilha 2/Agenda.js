var Agenda = /** @class */ (function () {
    function Agenda(compromissos) {
        this.compromissos = compromissos;
    }
    Agenda.prototype.agendarCompromisso = function (compromisso) {
        this.compromissos.push(compromisso);
        console.log("Compromisso agendado: " + compromisso);
    };
    Agenda.prototype.listarCompromissos = function () {
        if (this.compromissos.length === 0) {
            console.log("Não há compromisso agendado.");
        }
        else {
            console.log("Compromissos agendados: ");
            this.compromissos.forEach(function (compromisso, index) {
                console.log(index + 1, compromisso);
            });
        }
    };
    return Agenda;
}());
var agenda = new Agenda([]);
agenda.agendarCompromisso("Reunião às 10h");
agenda.agendarCompromisso("Encontro com amigos às 19h");
agenda.agendarCompromisso("Estudar das 13h às 15h");
agenda.listarCompromissos();
