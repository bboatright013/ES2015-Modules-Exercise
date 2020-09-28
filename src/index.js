// import fruits from './foods';
// import {choice, remove} from "./helpers";



//     let theseFruits = fruits.map();
//     let ourchoice = choice(theseFruits);
//     let randomfruit = theseFruits[ourchoice];
//     console.log(`I\'d like one ${randomfruit} please`);
//     console.log(`Here you go: ${randomfruit}`);
//     let remaining = remove(theseFruits);
//     console.log(`Delicious! Mat I has another ${randomfruit}?`);
//     console.log(`I\'m sorry but were all out. we have  ${remaining} left`);


import fruits from './foods';
import {choice, remove} from './helpers';

let fruit = choice(fruits);

console.log(`I'd like one ${fruit}, please`);
console.log(`Here you go: ${fruit}`);
console.log(`Delicious! May I have another?`);

let remaining = remove(fruit, fruits);
console.log(remaining);

console.log(`I'm sorry, we're all out. We have ${remaining.length} left.`);

