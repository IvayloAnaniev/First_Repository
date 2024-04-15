function solve(str, symbol, result) {
    let symb = '_';
    'Str_ng';
    let stringToArray = str.split('');
    for(let i = 0; i < stringToArray.lenght; i++) {
        if(stringToArray[i] == symb) {
            stringToArray[i] = symbol;
        }
    }
    let stringFromArray = stringToArray.join('');
    if (stringFromArray == result) {
        console.log('Matched');
    }   else {
        console.log('Not Matched!');
    }
}

solve('str_ng', 'i', 'String');


function solve2(str, symbol, result) {
    let res = str.replace('_', symbol);
    let output = res === result ? 'Matched' : 'Not Matched!';
    console.log(output);
}