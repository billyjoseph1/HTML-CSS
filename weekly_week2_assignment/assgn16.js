function swapKeyValue(obj) {
    let swapped = {};
    Object.keys(obj).forEach(key => {
      swapped[obj[key]] = key;
    });
    return swapped;
  }
  
  console.log(swapKeyValue({a: 1, b: 2, c: 3}));
  