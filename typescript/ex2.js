"use strict";
// Your job is to add some function paramater annotations to the concatTwoStrings function to make the errors go away.
// const concatTwoStrings = (a, b) => {
//     Parameter 'b' implicitly has an 'any' type.
//     Parameter 'a' implicitly has an 'any' type.
//       return [a, b].join(" ");
//     };
// const result = concatTwoStrings("Hello", "World");
// type test = Expect<Equal<typeof result, string>>;
const concatTwoStrings = (a, b) => {
    return [a, b].join(" ");
};
