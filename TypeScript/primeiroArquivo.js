function Hello(nome) {
    return "Hello " + nome;
}
var nome = "World";
document.body.innerHTML = Hello(nome);
console.log(Hello(nome));
alert(Hello(nome));