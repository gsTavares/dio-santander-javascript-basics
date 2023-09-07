function calculator() {
    const operation = Number(prompt('Choose an option:\n 1 - sum (+)\n 2 - subtraction (-)\n 3 - product (*)\n 4 - division (/)\n 5 - remainder (%)\n 6 - power of (**)'));
    if (!operation || operation >= 7) {
        alert('error - invalid operation');
        calculator();
    } else {
        let n1 = Number(prompt('Insert first value:'));
        let n2 = Number(prompt('Insert second value:'));
        let result;
        if (!n1 || !n2) {
            alert('error - invalid parameters');
            calculator();
        } else {
            function sum() {
                result = n1 + n2;
                alert(`${n1} + ${n2} = ${result}`);
                newOperation();
            }

            function subtraction() {
                result = n1 - n2;
                alert(`${n1} - ${n2} = ${result}`);
                newOperation();
            }

            function product() {
                result = n1 * n2;
                alert(`${n1} * ${n2} = ${result}`);
                newOperation();
            }

            function division() {
                result = n1 / n2;
                alert(`${n1} / ${n2} = ${result}`);
                newOperation();
            }

            function remainder() {
                result = n1 % n2;
                alert(`The division remainder of ${n1} and ${n2} is equal to ${result}`);
                newOperation();
            }

            function power() {
                result = n1 ** n2;
                alert(`${n1} power of ${n2} is equal to ${result}`);
                newOperation();
            }
            function newOperation() {
                let opcao = prompt('Do you want to do a new operation?\n 1 - Yes\n 2 - No');

                if (opcao == 1) {
                    calculator();
                } else if (opcao == 2) {
                    alert('See ya!');
                } else {
                    alert('Type a valid operation!');
                    newOperation();
                }
            }
        }
    }
    switch (operation) {
        case 1:
            sum();
            break;
        case 2:
            subtraction();
            break;
        case 3:
            product();
            break;
        case 4:
            division();
            break;
        case 5:
            remainder();
            break;
        case 6:
            power();
            break;
    }
}
calculator();
