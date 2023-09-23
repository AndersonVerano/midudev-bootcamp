const list = [1, 2, 3, 4];
const anotherList = [5, 6, 7, 8];

const secondList = list.concat(anotherList);

console.log(secondList);

const persona = {
  name: "Miguel",
  twitter: "@midudev",
  age: 18,
  isDeveloper: true,
  referencies: ["ref1", "ref2", "ref3"],
};

const field = "twitter";

console.log(persona.name);
console.log(persona.referencies[1]);
console.log(persona[field]);
const sumar = (a, b) => {
  console.log(a);
  console.log(b);

  return a + b;
};
sumar(20 + 40);
const multiplicar = (a, b) => {
  console.log(a);
  console.log(b);
  return a * b;
};
console.log(multiplicar(10 * 10));
multiplicar(50 * 50);
