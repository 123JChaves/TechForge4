var animais = ["Gato", "Cachorro", "Boi"];
var especie = "Mamíferos";
for (var animal in animais) {
    console.log(animal); // Retorna índices: 0, 1, 2
}
for (var _i = 0, animais_1 = animais; _i < animais_1.length; _i++) {
    var animal = animais_1[_i];
    console.log(animal); // Retorna 'Gato', 'Cachorro', 'Boi', os valores do vetor.
}
console.log("especie:", especie); // Retorna 'Mamíferos'
