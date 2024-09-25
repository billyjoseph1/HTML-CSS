"use strict";
// it("Should handle a form submit", () => {
//     const form = document.createElement("form");
//     form.innerHTML = `
//   <input name="name" value="John Doe"></Exercise>
//   `;
//     form.onsubmit = (e) => {
//       const value = handleFormData(e);
//       expect(value).toEqual({ name: "John Doe" });
//     };
//     form.requestSubmit();
//     expect.assertions(1);
//   });
const handleFormData = (e) => {
    e.preventDefault();
    const data = new FormData(e.terget); // e.terget! Whoops!
    const value = Object.fromEntries(data.entries());
    return value;
};
