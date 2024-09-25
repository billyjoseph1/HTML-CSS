// union types
const message = Date.now() % 2 === 0 ? "Hello Tuesdays!" : null;

// const message: "Hello Tuesdays!" | null

// declaring unions types

const logId = (id: string | number) => {
  console.log(id);
};
//   Union types can contain many different types
type AllSortsOfStuff =
  | string
  | number
  | boolean
  | object
  | null
  | {
      name: string;
      age: number;
    };

// LITERAL TYPES
// create types which represent a specific primitive value
type YesOrNo = "yes" | "no";
type StatusCode = 200 | 404 | 500;
type TrueOrFalse = true | false;

