export { };

let messege = "Hello world";
let secondMessege = "I love the world";

//console.log(messege, secondMessege);

let name: string = "David";
let hobbie: string = "Mobile developer";
let age: number = 24;
let isCodingAllDay: boolean = true;


// TYPES:
// the main types in typescript are boolean, string and number
// typescript also have sub types which are null and undefind. so we can assign a string, a number or boolean to a null type.
let isCoding: string | undefined = undefined; // this is a multi type variable decleration
let n: null = null;
let u: undefined = undefined;

let newUser: boolean | null = null; // you can set a boolean to a null value like this in typescript. You can also do this for a number value in typescript

let sentence = `Hello everyone my name is , i am a ${hobbie} and i am ${age} years old`;
console.log(sentence);

// in typescript you can declare an array of values using the array type which have two syntaxes
let numberList: number[] = [1, 2, 3, 4, 5];
let secondNumberList: Array<number> = [1, 2, 3, 4, 5];

// for string its same thing
let firstNameList: string[] = ["John", "moses", "joseph", "iseac"];
let secondNameList: Array<string> = ["John", "moses", "joseph", "iseac"];

//in cases where we have an array of mixed type, typescript provides the tuple type which allows us add string and numbers in an array
// the postion of the type must match the values type in the array and also the tuple is a fixed lenght of the the type assigned to it.
let person: [string, string, number, boolean] = ["David", "Nwudo", 24, true]; // i cant add anpother value or change the arrangement of the values in the array.
let comapany: [string, number, string, boolean] = ["Yoris", 100, "Lagos", true];

// another type in type is the enum type: This is used to declare a friendly name to a set of numeric values
// this is used with the enum key word not let this time.
enum colors { red, white, green, purple, gold }
// you can get the values from  the enum type by delcaring a variable and assigning it to the enum values
let w: colors = colors.gold;
console.log(w);

//another type which is the most capable type is the any type. This allows us to declare values which
//are unsure so it can accept dynamic values. any type can be a function, a string, a boolean any type you can think of

let myValue: any = "David";
myValue = true;
myValue = 24;
// you can also assign any value to declared variable with a string or a number or any type


// here we are setting the any type variable name to a function and also trying to access the value of of a variable. Typescript wont warn us but an error would occur while running the code.
// to by pass this, typescript brought a new type unkown this is just like any type, it can take any type

//comment this line out and run the code. You should see an error.
// let newValue: any = age;

// // newValue();
// // console.log(newValue.name);
// //  newValue.toUpperCase();




// of data but you cant access any property of type unknown or construct them. To solve this you use the assertion type
//to access the property.

let newValue: unknown = age;
//console.log((newValue as string).toUpperCase());


// Unknown can also have user defined type guard
function hasName(obj: any): obj is { name: String } {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}

if (hasName(newValue)) {
    console.log(newValue.name);
}


//FUNCTIONS:
//Argumetnts in a function cannot be assingned to a type, whereas in typescript an argumaent can be
//asssigned a type. You can also set a parameter or an argument to b an optional value. but we would
//to run a check function.
// you can also make a parameter of  a function nullable by setting the parameter or undefined
// to set it to null you can add "?" at the end of the variable name, this would make the parameter 
// nullable. Or declare the parameter

function addNumbers(num1: number, num2: number, num3?: number, num4: number = 10): number {
    let newNum: number;
    if (num3) {
        return newNum = num1 + num2 - num3 + num4;

    } else {
        return newNum = num1 + num2 + num4;
    }
    return newNum
}

addNumbers(10, 10);


// TOPIC: INTERFACE
//Interface can be used to maintain clean codes
// in our exaample below we use interface Person as an oject and asigned it as a type to our person object passed in the function

// this way the file would not be maintained properly
function personDetails(person: { firstName: string, lastName: string }) {
    // console.log(`${person.firstName} ${person.lastName}`);
};

let p = {
    firstName: "Bruce",
    lastName: "Wayne",
};

personDetails(p);

// we would declare a interface Person as an object and assign it to the person argument passed to the function as a type
interface Person {
    firstName: string,
    lastName: string,
};

function newNames(person: Person) {
    console.log(`${person.firstName} ${person.lastName}`);
};
newNames(p);




// TOPIC: Classes.
//typescript supports classes with object oriented approach
//In TypeScript, as in most object-oriented programming languages, classes are used as a fundamental building block for organizing and encapsulating code.
class Employee {
    employessName: string;

    constructor(name: string) {
        this.employessName = name;
    }

    greet() {
        console.log(`good morning ${this.employessName} and welcome on board`)
    }
};

let employeeOne = new Employee("godwin");
console.log(employeeOne.employessName)
employeeOne.greet();

//TypeScript supports class inheritance, allowing you to create new classes that inherit properties and methods from existing ones. This enables you to create hierarchies and share code between related classes.
class Manager extends Employee {
    constructor(managerName: string) {
        super(managerName);
    }
}
