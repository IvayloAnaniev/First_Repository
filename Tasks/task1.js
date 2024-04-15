function SolveTask(firstName, secondName, del) {
    let result = 'Student is ' + firstName + del + secondName;
    let result2 = `Student is ${firstName}${del}${secondName}`;
    console.log(result);
    console.log(result2);
}

SolveTask('Ivaylo', 'Ananiev', '<-->' );