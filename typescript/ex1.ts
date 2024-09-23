// const result = add(1, 2);
// Argument of type 'number' is not assignable to parameter of type 'boolean'.

// type test = Expect<Equal<typeof result, number>>;
// Type 'false' does not satisfy the constraint 'true'.

function add(a: number, b: number) {
    return a + b;
  }