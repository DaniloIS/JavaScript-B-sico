// Escrevendo Olá Mundo
console.log('Olá Mundo');

let a = 10;
const b = "20";

console.log(a !== b && typeof b == "string");

let cor = "amarelo";

if (cor === "verde") {
    console.log("Siga");
} else if (cor === "amarelo") {
    console.log("Atenção");
} else {
    console.log("Pare");
}

let n = 5;

for(let i=0; i<= 10; i++) {
    console.log(`${i} X ${n} = ${i*n}`);
}