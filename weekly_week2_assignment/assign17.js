function containsProperty(obj, prop) {
    return prop in obj;
  }
  
  console.log(containsProperty({a: 1, b: 2, c: 3}, 'b'));
  