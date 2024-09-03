function calcular() {
    // Obtenemos los valores de los inputs
    const num1 = parseFloat($('#num1').val());
    const num2 = parseFloat($('#num2').val());
    const operation = $('#operacion').val();

    // Validamos los números ingresados
    if (isNaN(num1) || isNaN(num2)) {
        alert('Por favor, ingrese números válidos.');
        return;
    }

    let result;
    // Validamos qué operación seleccionó el usuario 
    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                alert('No se puede dividir por cero.');
                return;
            }
            result = num1 / num2;
            break;
        default:
            alert('Operación no válida.');
            return;
    }

    // Muestra el resultado de la operación
    $('#resultado').val(result);

    console.log("ejecucion con exito")
}
