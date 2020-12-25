// 
// object destructuring 
// 

// const person = {
//     name: 'Mike',
//     age: 59,
//     location: {
//         city: 'Avondale',
//         temp: 37,
//         weather: 'sunny'
//     }
// };

// // destructuring is an ES6 feature that allows us to pull values from (flatten)
// // an object to make code more readable. So, instead of using person.location.city
// // everywhere, you can just use 'city'
// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age} and is in ${city}.`);

// // you can also rename variables or provide default values like this
// const {temp: tempurature, weather = 'raining', city} = person.location;
// if (city && tempurature) {
//     console.log(`It's ${tempurature} degrees and ${weather} in ${city}.`);
// }


// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(publisherName)


// 
// array destructuring 
// 

//const address = ['12724 W Cambridge', 'Avondale', 'Arizona', '85392'];

// this assigns ordinal values to local variables
//const[ street, city, state, zip ] = address;

// if you don't need all of them you can skip, but it still is ordered
//const [ , city, state ] = address;

//console.log(`You are in ${city}, ${state}.`);


const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']

const [itemName, , costMedium] = item;

console.log(`A medium ${itemName} will cost you ${costMedium}.`);