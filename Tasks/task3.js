function solve(num1, num2, num3) {
    let sum = num1 + num2 + num3;
    let output = sum % 1 === 0 ? `${sum} - Integer` : `${sum} - float`;
    console.log(output);
}

solve(9, 100, 10);