# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Types

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
