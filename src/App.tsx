import React from 'react';
import './App.css';

// Types
let name: string; // string ONLY type
let age: number; // number ONLY type

// Union
// let's make age both number or string

let newAge: number | string;

let isStudent: boolean; // boolean type
let hobbies: string[]; // array type
let role: [number, string]; // tuple type

type Person = {
  name: string;
  age?: number; // make it optional
};

let person: Person = {
  name: 'Ray',
  age: 21, // age is optional here
};
// person has Person type which is an object with two fields name required and age optional

let people: Person[]; // array of person object

// Function type
// declare input type and outupt type
// void signifies it returns nothing.
let printNameType: (name: string) => void;

function printName(name: string) {
  console.log(name);
}

function App() {
  return <div className="App">Hello World!</div>;
}

export default App;
