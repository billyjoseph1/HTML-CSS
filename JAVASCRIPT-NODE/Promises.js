const myPromise = new Promise((resolve, reject) => {
  console.log("I am running please wait....");

  // Initialize an empty array to simulate skills data.
  const skills = [];

  // Simulate a delay of 3000 milliseconds to mimic an API call or data fetching process.
  setTimeout(() => {
    // Check if the 'skills' array has any elements.
    if (skills.length > 0) {
      // If 'skills' array is not empty, resolve the Promise with the skills data.
      resolve(skills);
    } else {
      // If 'skills' array is empty, reject the Promise with an error message.
      reject("something went wrong");
    }
  }, 3000);
});

// Consume the Promise using .then() for resolved data and .catch() for handling errors.
// Assuming the 'skills' array is empty, the Promise will be rejected.
myPromise
  .then((result) => console.log(result)) // Handle successful operation.
  .catch((error) => console.log(error)); // Handle error.
