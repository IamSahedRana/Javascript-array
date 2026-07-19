/*  iteration forms of loop */


let people = ['Rashed', 'Rahik', 'Ashik', 'Nayeem', 'Hasan'];


for (let i of people){
     console.log('The People are:',i);
}

/*  Using For loop to get same output */

const people = ['Rashed', 'Rahik', 'Ashik', 'Nayeem', 'Hasan'];

const length = people.length;

for (let i = 0; i < length; i++) {
    console.log('index value:', i);
    console.log('The Value is:', people[i]);
}

const people = ['Rashed', 'Rahik', 'Ashik', 'Nayeem', 'Hasan'];

for (const [index, person] of people.entries()) {
    console.log('index value:', index);
    console.log('The Value is:', person);
}