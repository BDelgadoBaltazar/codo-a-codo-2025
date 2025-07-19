let actualInput = '';
let operacion = '';
let previoInput = '';

function sumador(value) {
    actualInput += value;
    document.getElementById('resultado').value = actualInput;
}

function limpiarResultado(){
    actualInput = '';
    previoInput = '';
    operacion = '';
    document.getElementById('resultado').value = actualInput;
}

function establecerOp (op) {
    if (actualInput === '') return;
    if (previoInput !== '') calcularResultado();
    operacion = op;
    previoInput = actualInput;
    actualInput = '';
}

function calcularResultado() {
    let resultado;
    const previo = parseFloat(previoInput);
    const actual = parseFloat(actualInput);

    if (isNaN(previo) || isNaN(actual)) return;

    switch(operacion) {
        case '+':
            resultado = previo + actual;
            break;
        case '-':
            resultado = previo - actual;
            break;
        case '*':
            resultado = previo * actual;
            break;
        case '/':
            if (actual === 0) {
                alert('Error: Division por cero');
                limpiarResultado();
                return;
            }
            resultado = previo / actual;
            break;
        default:
            return;
    }

    actualInput = resultado;
    operacion = '';
    previoInput = '';
    document.getElementById('resultado').value = actualInput;
}
