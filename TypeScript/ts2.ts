let animais = ["Gato", "Cachorro", "Boi"];
let especie = "Mamíferos";

for (let indices in animais) {
   console.log(indices); // Retorna índices: 0, 1, 2
}
for (let animal of animais) {
    console.log(animal); // Retorna 'Gato', 'Cachorro', 'Boi', os valores do vetor.
}
console.log("especie:", especie); // Retorna 'Mamíferos'