//Iteration 1: Names and Input//

const hacker1 = 'Alonso';
  console.log(`The driver's name is ${hacker1}`);

const hacker2 = 'Drake';
  console.log (`The navigator's name is ${hacker2}`);


//Iteration 2: Conditionals//

if ((hacker1.length) > (hacker2.length)) {
    console.log(`The Driver has the longest name, it has ${hacker1.length} characters.`);
} else if ((hacker1.length) < (hacker2.length)) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!.`)
}

//Iteration 3//

console.log (hacker1.toUpperCase())

console.log (hacker2.split("").reverse().join(""));

if (hacker1.localeCompare(hacker2) === -1) {
    console.log(`The driver's name goes first.`)

} else if (hacker1.localeCompare(hacker2) === 0) {
    console.log(`What?! You both have the same name?`);

} else {
    console.log(`Yo, the navigator goes first definitely.`);
}

// Bonus 1:

