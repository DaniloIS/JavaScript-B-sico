function calc(x1, x2, operator) {
    return eval(`${x1} ${operator} ${x2}`);
}

let resultado = calc(2, 1, "-");

console.log(resultado);

/*
    *Função anonima*
    (function(x1, x2, operator) {
        return eval(`${x1} ${operator} ${x2}`);
    })(2, 1, "-");
 */

/*
        *Arrow Function*
    let calc = (x1, x2, operator) =>  {
        return eval(`${x1} ${operator} ${x2}`);
    }
*/