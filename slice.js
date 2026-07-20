let num_1 = [23,45,66,78,56,35];

const slice_cut = num_1.slice(0,2);
console.log(slice_cut);

// Sort , text have no issue , but single num okey, multi digit unique technique.

let people = ['Rashed', 'Rahik', 'Ashik', 'Nayeem', 'Hasan'];

people.sort();

console.log(people);

// array.splice(start, deleteCount, item1, item2, ...)

people.splice(2, 0, 'Rima', 'Ayesha');
console.log(people); //add 


people.splice(1, 1, 'Karim');
console.log(people); // replace 

people.splice(1, 2);
console.log(people); // remove