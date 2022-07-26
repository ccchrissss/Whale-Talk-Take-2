let input = 'Arrakis, Dune, desert planet.';

const vowels = ['a', 'e', 'i', 'o', 'u'];

let resultArray = [];

input = input.toLowerCase();

for (let i = 0; i < input.length; i++) {
    // console.log(i);
    // console.log(input[i]);
    if (input[i] === 'e') {
        resultArray.push(input[i]);
    };

    if (input[i] === 'u') {
        resultArray.push(input[i]);
    };

    for (let j = 0; j < vowels.length; j++) {
        // console.log(j);
        if (input[i] === vowels[j]) {
            console.log(input[i]);
            console.log(i);
            resultArray.push(input[i]);
        };
    };
};

console.log(resultArray);

let resultString = resultArray.join('').toUpperCase();

console.log(resultString);
