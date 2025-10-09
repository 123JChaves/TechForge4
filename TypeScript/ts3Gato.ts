 class Animal {
    movimentar(distancia: number = 0) {
        console.log(`O animal se moveu ${distancia}m.`);
    }
 }
 class Gato extends Animal {
    miar() {
        console.log('Miau! Miau!');
    }
 }
 let gatoMiau = new Gato();
 gatoMiau.miar();
 gatoMiau.movimentar(30);