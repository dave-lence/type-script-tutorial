"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var messege = "Hello world";
var secondMessege = "I love the world";
//console.log(messege, secondMessege);
var name = "David";
var hobbie = "Mobile developer";
var age = 24;
var isCodingAllDay = true;
// TYPES:
// the main types in typescript are boolean, string and number
// typescript also have sub types which are null and undefind. so we can assign a string, a number or boolean to a null type.
var isCoding = undefined; // this is a multi type variable decleration
var n = null;
var u = undefined;
var newUser = null; // you can set a boolean to a null value like this in typescript. You can also do this for a number value in typescript
var sentence = "Hello everyone my name is , i am a ".concat(hobbie, " and i am ").concat(age, " years old");
console.log(sentence);
// in typescript you can declare an array of values using the array type which have two syntaxes
var numberList = [1, 2, 3, 4, 5];
var secondNumberList = [1, 2, 3, 4, 5];
// for string its same thing
var firstNameList = ["John", "moses", "joseph", "iseac"];
var secondNameList = ["John", "moses", "joseph", "iseac"];
//in cases where we have an array of mixed type, typescript provides the tuple type which allows us add string and numbers in an array
// the postion of the type must match the values type in the array and also the tuple is a fixed lenght of the the type assigned to it.
var person = ["David", "Nwudo", 24, true]; // i cant add anpother value or change the arrangement of the values in the array.
var comapany = ["Yoris", 100, "Lagos", true];
// another type in type is the enum type: This is used to declare a friendly name to a set of numeric values
// this is used with the enum key word not let this time.
var colors;
(function (colors) {
    colors[colors["red"] = 0] = "red";
    colors[colors["white"] = 1] = "white";
    colors[colors["green"] = 2] = "green";
    colors[colors["purple"] = 3] = "purple";
    colors[colors["gold"] = 4] = "gold";
})(colors || (colors = {}));
// you can get the values from  the enum type by delcaring a variable and assigning it to the enum values
var w = colors.gold;
console.log(w);
//another type which is the most capable type is the any type. This allows us to declare values which
//are unsure so it can accept dynamic values. any type can be a function, a string, a boolean any type you can think of
var myValue = "David";
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
var newValue = age;
//console.log((newValue as string).toUpperCase());
// Unknown can also have user defined type guard
function hasName(obj) {
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
function addNumbers(num1, num2, num3, num4) {
    if (num4 === void 0) { num4 = 10; }
    var newNum;
    if (num3) {
        return newNum = num1 + num2 - num3 + num4;
    }
    else {
        return newNum = num1 + num2 + num4;
    }
    return newNum;
}
addNumbers(10, 10);
// TOPIC: INTERFACE
//Interface can be used to maintain clean codes
// in our exaample below we use interface Person as an oject and asigned it as a type to our person object passed in the function
// this way the file would not be maintained properly
function personDetails(person) {
    // console.log(`${person.firstName} ${person.lastName}`);
}
;
var p = {
    firstName: "Bruce",
    lastName: "Wayne",
};
personDetails(p);
;
function newNames(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
;
newNames(p);
// TOPIC: Classes.
//typescript supports classes with object oriented approach
//In TypeScript, as in most object-oriented programming languages, classes are used as a fundamental building block for organizing and encapsulating code.
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employessName = name;
    }
    Employee.prototype.greet = function () {
        console.log("good morning ".concat(this.employessName, " and welcome on board"));
    };
    return Employee;
}());
;
var employeeOne = new Employee("godwin");
console.log(employeeOne.employessName);
employeeOne.greet();
//TypeScript supports class inheritance, allowing you to create new classes that inherit properties and methods from existing ones. This enables you to create hierarchies and share code between related classes.
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    ;
    Manager.prototype.delegateWork = function () {
        console.log("delegating worl");
    };
    ;
    return Manager;
}(Employee));
;
var managerOne = new Manager("David");
