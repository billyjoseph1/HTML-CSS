function getAllPropertyNames(obj) {
    let properties = new Set();
    let currentObj = obj;
    do {
      Object.getOwnPropertyNames(currentObj).map(item => properties.add(item));
    } while ((currentObj = Object.getPrototypeOf(currentObj)));
    return [...properties];
  }
  
  console.log(getAllPropertyNames(new Date())); // Example using Date object
  