var texto = 'Hello World';
var numero = 50;
var check = false;
var meses = ['janeiro', 'fevereiro', 'março', 'abril'];
function soma(numero1, numero2) {
    return numero1 + numero2;
}
console.log('A soma de ', numero, 'e', numero, 'é igual a: ', soma(numero, numero));
function getEndereco(endereco) {
    return "".concat(endereco.rua, ", ").concat(endereco.numero, " - ").concat(endereco.cidade);
}
console.log(getEndereco({
    rua: 'São Josafat',
    numero: 55,
    cidade: 'Campo Mourão'
}));
//Funções de Array JS:
//map
//filter
//reduce
//foreach
function filtrarArray(coisas) {
    return coisas.filter(function (coisa) { return typeof coisa === 'number'; });
}
console.log("Linhas filtradas: ".concat(filtrarArray(['A', true, 2, 3, 4])));
