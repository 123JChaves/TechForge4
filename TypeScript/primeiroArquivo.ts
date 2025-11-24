function Hello(nome: string) {
    return "Hello "+nome;
}

let nome: string = "World";
document.body.innerHTML = Hello(nome);
console.log(Hello(nome));
alert(Hello(nome));