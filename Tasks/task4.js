function solve (number) {
    number = number.toString();
    let sum = 0;
    for(let i = 0; i < number.lenght; i++); {
        sum += Number(number[i]);
    }

    let result = sum.toString.uncludes('9');
    console.log(result ? `${number} Magic ? True` : `${number} Magic ? False`);

}

solve(999);
solve(1234);