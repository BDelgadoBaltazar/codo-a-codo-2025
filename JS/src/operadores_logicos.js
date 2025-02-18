/* 
Conjuncion (AND &&)
La operación A && B dará por resultado verdadero únicamente cuando ambos operandos sean verdaderos. Cualquier otro caso, el resultado es falso.

A tengo titulo
B Soy mayor

A | B | A && B
0 | 0 | 0
0 | 1 | 0
1 | 0 | 0
1 | 1 | 1

Disyunción (OR ||)
La operación A || B dará por resultado verdadero cuando al menos uno de sus operandos sea verdadero.
El único caso donde da falso es cuando ambos operandos son falsos.

A | B | A || B
0 | 0 | 0
0 | 1 | 1
1 | 0 | 1
1 | 1 | 1

Negación (NOT !) (Operador Unario)
Invierte el valor de A.

A | !A
0 | 1
1 | 0

*/

/*
    Martin, un joven programador que se dirige a la cocina.
    Al pasar Martin se pregunta dos cosas, si tiene hambre y si tiene ganas de comer.

    Si tiene hambre y ganas de comer: se arma un sandwich.
    Si no tiene hambre y no tiene ganas de comer: se va a dormir.
    Si tiene hambre y no tiene ganas de comer: se hace un té
    Si no tiene hambre y si tiene ganas de comer: se come una mandarina.
*/

let a = true;
let b = true;

console.log(a, b);
console.log(a && b);
console.log(a || b);