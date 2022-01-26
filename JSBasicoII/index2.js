window.addEventListener('focus', event => {
    console.log("focus");
});

document.addEventListener('click', event => {
    console.log("click");
});

let agora = new Date();

console.log(agora.toLocaleDateString("pt-BR"))