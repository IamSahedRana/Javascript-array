let people = ['Rashed', 'Rahik', 'Ashik', 'Nayeem', 'Hasan'];
let num_1 = [23,45,66,78,56,35]
let num_2 = [34,56,67,89,8,67]

/* 
1. concat()
What it does : Combines two or more arrays into one new array.
*/

let allNumbers = num_1.concat(num_2);
console.log(allNumbers);

let all_people = people.concat(['Rima', 'Rifa']);
console.log(all_people);

/* 
2. slice()
What it does : Copies part of an array. It does NOT change the original array.
*/

console.log(people.slice(1,4));

console.log(people.slice());

/* 
3. join()
What it does: Turns an array into one string.

*/

console.log(people.join(' --> '));
console.log(people.join("-"));

/* 
4. includes()
What it does: hecks whether an element exists.

# Returns
* true
* false

*/

console.log(num_1.includes(14));
console.log(people.includes('Rahik'));


/* 
5. indexOf()

What it does: Returns the index (position) of an element.

If not found --> Returns: -1

*/

console.log(people.indexOf('Rima'));

console.log(num_2.indexOf(8));

/* 
6. Array.isArray()
What it does: Checks whether something is actually an array.

# Returns

*true
*false

*/

 console.log(Array.isArray(people));

let name = "Rashed";

console.log(Array.isArray(name));