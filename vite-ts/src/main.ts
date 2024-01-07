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

type UserType = {
  username: string;
  age: number;
  phone?: string;
};

let betterFunc = (user: UserType) => {
  console.log(user.username);
};

type myFunc = (a: number, b: string) => void;

let write: myFunc = (num, str) => {
  console.log(num + "times" + str);
};

type UserType2 = {
  username: string;
  age: number;
  phone?: string;
  theme: "dark" | "light";
};

// INTERFACE

interface IUser {
  username: string;
  email: string;
  age: number;
}

interface IEmployee extends IUser {
  employeeId: number;
}

const emp: IEmployee = {
  employeeId: 3,
  username: "hello",
  email: "https",
  age: 2,
};

// GENERICS

interface IAuthor {
  id: number;
  username: string;
}

interface ICategory {
  id: number;
  title: string;
}

interface IPost {
  id: number;
  title: string;
  desc: string;
  extra: IAuthor[] | ICategory[];
}

interface IPostBetter<T> {
  id: number;
  title: string;
  desc: string;
  extra: T[];
}

const testMe: IPostBetter<string> = {
  id: 1,
  title: "post title",
  desc: "desc",
  extra: ["str", "hllo"],
};

interface IPostEvenBetter<T extends object> {
  id: number;
  title: string;
  desc: string;
  extra: T[];
}

const testMe2: IPostEvenBetter<IAuthor> = {
  id: 1,
  title: "post title",
  desc: "desc",
  extra: [
    { username: "hello", id: 32 },
    { username: "hello", id: 32 },
  ],
};
const testMe3: IPostEvenBetter<ICategory> = {
  id: 1,
  title: "post title",
  desc: "desc",
  extra: [
    { title: "hello", id: 32 },
    { title: "hello", id: 32 },
  ],
};
