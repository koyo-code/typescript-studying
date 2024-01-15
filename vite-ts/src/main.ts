import "./style.css";

enum Info {
  NAME,
}

const person = {
  name: Info.NAME,
};

const obj1 = {
  hello: "hello",
  name: "koyo",
};

const obj2 = {
  ...obj1,
  id: 3,
};

console.log(obj2);
