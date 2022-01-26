let carros = ["palio 98", "toro", "uno", 10, true, new Date(), function(){}];

console.log(carros[0]);


let celular = function() {
    this.cor = "prata";

    this.ligar = function () {
        console.log("Uma ligação");
        return "Ligando";
    }
}

let obj = new celular();

console.log(obj.ligar());