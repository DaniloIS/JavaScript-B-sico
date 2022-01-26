class celular {
    
    constructor() {
        this.cor = "prata";
    }
    
    ligar() {
        console.log("Uma ligação");
        return "Ligando";
    }
    
}

let obj = new celular();

console.log(obj.ligar());