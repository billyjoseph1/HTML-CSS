//The reduce method is used to apply a function to each element of an array, reducing the array to a single value.

/*array.reduce((accumulator, currentValue, currentIndex, array) => {
    // Function body
  }, initialValue);
*/

const reducedVals = [1, 2, 3, 4, 5, 6].reduce((prev, next) => {
  console.log(`prev: ${prev} next: ${next}`);
  return prev + next;
});

console.log(reducedVals); // 21


//Calculating Total Prices Using map and reduce
//foodobject
const myDinner = [
    { image: "🍕", name: "pizza", price: 1000 },
    { image: "🍔", name: "burger", price: 800 },
    { image: "🥪", name: "sandwich", price: 600 },
];

// Extract prices using map
const totalArray = myDinner.map(foodObj => foodObj.price);
console.log(totalArray);  // [1000, 800, 600]

// Calculate total bill using reduce
const totalBil = totalArray.reduce((prev, next) => prev + next);
console.log(totalBil);  // 2400


//Combining map and reduce a shorter version
//map returns a new array and does not modify the original array.
const totalBill2 = myDinner
                    .map(foodObj => foodObj.price)
                    .reduce((prev, next) => prev + next);

console.log(`My total bill is: ${totalBill2}`);  // My total bill is: 2400