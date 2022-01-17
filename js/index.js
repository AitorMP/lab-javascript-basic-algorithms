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

const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare bibendum tempus. In leo nisi, molestie at ligula vitae, pharetra vehicula ex. Ut convallis sapien elit, et commodo diam vulputate nec. Nunc auctor nunc vel nisl vulputate fringilla. Duis at diam eget mi facilisis ullamcorper. Nulla non congue tellus. Praesent fringilla lacus vel odio posuere sollicitudin. Duis eros velit, pulvinar id rutrum vitae, mattis a odio. Vestibulum purus velit, mollis id massa eget, bibendum congue felis. Vivamus cursus nisi eu efficitur dictum. Aliquam blandit ex eu lobortis mattis. Donec vitae felis ut nunc cursus venenatis at quis libero.

Proin eu maximus turpis. Sed sed nunc ut est pulvinar aliquet. Vestibulum semper eget lorem aliquam gravida. Cras laoreet, risus et tristique porta, nisi arcu tincidunt sem, vitae maximus tortor magna et orci. Fusce ac bibendum sem, ac vehicula purus. Pellentesque tempor non sem in faucibus. Sed tortor metus, dignissim dictum odio et, accumsan vestibulum erat. Integer dapibus lacus eget eros ultricies imperdiet. Nulla pretium ac nibh ac auctor. Cras condimentum feugiat est, in faucibus nibh. Praesent ut lorem in leo congue scelerisque non quis erat. Praesent suscipit congue erat nec volutpat. Nulla consectetur sagittis massa, ac facilisis nulla cursus eu. Aenean congue sit amet est vitae fringilla. Nunc lacinia ornare varius. Aenean bibendum, nibh et volutpat scelerisque, ante elit laoreet diam, a cursus sapien ligula id elit.

Morbi vel consectetur magna. Maecenas turpis nibh, aliquet ac sapien quis, euismod feugiat est. Proin dapibus, urna et cursus rutrum, lorem nibh efficitur lectus, quis dignissim diam neque a ante. Nunc at libero dui. Proin quis tincidunt quam, sit amet convallis elit. Suspendisse potenti. Nunc id purus ac sapien lobortis volutpat ac vitae diam. Nam malesuada diam nisi, nec ornare leo hendrerit pharetra. Aenean convallis diam quis ipsum tempor, quis scelerisque tellus auctor. Phasellus a orci tincidunt, pharetra sem in, feugiat libero. Aliquam sit amet nibh a enim ullamcorper dictum vitae sed ligula. Phasellus aliquet, orci sed ornare rhoncus, est nunc convallis mi, non dignissim libero arcu a mi. Ut pulvinar metus vitae arcu laoreet, vel lacinia orci luctus. Sed euismod lacinia facilisis.`

//console.log (loremIpsum)

let countWords = 0;

  for (let i = 0; i <= loremIpsum.length; i++) {
    if (loremIpsum.charAt(i) == " ") {
      countWords ++;
    }
  }
      console.log (countWords)

const timesEtRepeat = 0;
  for (let i = 0; i <= loremIpsum.length; i++) {
    if (loremIpsum[i] === "et" ) {
      timesEtRepeat ++;
    }
  }
  console.log(timesEtRepeat)