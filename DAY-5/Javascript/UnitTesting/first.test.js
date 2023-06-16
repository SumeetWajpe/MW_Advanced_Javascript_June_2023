function Add(x, y) {
  return x + y;
}

// describe("A suite is just a function", function () {
//   let a;

//   it("and so is a spec", function () {
//     a = true;

//     expect(a).toBe(false);
//   });
// });

describe("A suite for addition", function () {
  it("adds two numbers", function () {
    let result;

    result = Add(30, 40);
    expect(result).toBe(70);
  });
});
