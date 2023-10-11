import React from 'react';
import './App.css';

// Types
// Ref: https://www.typescriptlang.org/docs/handbook/2/basic-types.html
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
let printNameType: (name: string) => void; // returns undefined

let neverReturn: (name: string) => never; // returns nothing

// any type
// Not prefered as this defeats the purpose of using Typescript.
// better option is to use unknown when the type is unknown
let anyType: any;

let typeUnknown: unknown;

// type are two things: types or alias and interface

interface Data {
  name: string;
  age?: number;
}

// inherit interface use keywords extends

interface Profession extends Data {
  occupation: string;
}

type X = {
  a: string;
  b: number;
};

// inherit from X properties
type Y = X & {
  c: string;
  d: number;
};

let combine: Y = {
  c: 'comb',
  d: 1,
  a: 'Hi',
  b: 2,
};

// to extend from interface in type use &
type Z = Data & {
  t: string;
};

function printName(name: string) {
  console.log(name);
}

function App() {
  return <div className="App">Hello World!</div>;
}

export default App;
