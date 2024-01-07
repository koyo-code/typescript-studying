import "./style.css";

let testString: string = "hello";

let stringOrNumber: string | number;
stringOrNumber = 32;

//array

let names = ["john", "jane", "tom"];

names.push("hhh");

let numbers = [22, 45, 35];

let stringOrNumberArray: (string | number)[] = ["hello", 43, 22];

//object

let user = {
  username: "john",
  age: 22,
  isAdmin: false,
};

user.username = "jane";
user.age = 29;
user.isAdmin = true;

// user.phone = "+12345677";
let userObj: {
  username: string;
  age: number;
  isAdmin: boolean;
};

userObj = {
  username: "john",
  age: 23,
  isAdmin: true,
  // phone: "ngeiru",
};

let userObj2: {
  username: string;
  age: number;
  isAdmin: boolean;
  phone?: string;
};

userObj2 = {
  username: "hello",
  age: 44,
  isAdmin: true,
  phone: "jel",
};

// functions

let sayHi = () => {
  console.log("hello");
};

let functionReturnString = (): string => {
  console.log("hi");
  return "h1";
};

let multiple = (num: number): number => {
  return num * 2;
};

let sum = (num1: number, num2: number, another?: number): number => {
  return num1 + num2;
};

sum(2, 4);

let func = (user: { username: string; age: number; phone?: string }) => {
  console.log(user.username);
};

// TYPE ALIASES
