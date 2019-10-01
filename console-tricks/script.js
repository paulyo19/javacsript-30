const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];


function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}


// Regular
// console.log('hello')

// Interpolated
// console.log('hello i am a %s string!', '@')
// console.log(`hello i am ${var}`)

// Styled
// console.log('%c I am some great text', 'font-size: 50px')

// warning!
// console.warn('oh noo!')

// Error :|
// console.error('shit')


// Info
// console.info('crocodiles eat 3-4 people a year')

// Testing
const p = document.querySelector('p')
console.assert(p.classList.contains('ouch'), 'that is wrong!')

// console.assert(1 ===1, 'thats is wrong')
// console.assert(1 ===2, 'thats is wrong')

// clearing
// console.clear();

// Viewing DOM Elements
console.log(p)
console.dir(p)

// Grouping together
dogs.forEach(dog => {
    console.group(`${dog.name}`)
    console.log(`this is ${dog.name}`);
    console.log(`this is ${dog.name} is ${dog.age} years old`);
    console.log(`this is ${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(`${dog.name}`)
});

// counting
console.count('wes')
console.count('wes')
console.count('wes')
console.count('wes')
console.count('wes')

// timing
console.time('fetching data')
fetch('https://api.github.com/users/wesbos')
    .then(data => data.json())
    .then(data => {
        console.timeEnd(data)
    })

    console.table(dogs)