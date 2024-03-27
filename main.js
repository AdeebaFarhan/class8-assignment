function fruit(name) {
    if (name === void 0) { name = "fruit"; }
    console.log("my favourite fruit is ".concat(name));
}
fruit();
fruit("Mango");
function greet(name) {
    if (name === void 0) { name = "Guest"; }
    console.log("Hello, ".concat(name, "!"));
}
//calling the function with default parameter
greet();
// Calling the function with value
greet("Friends");
function student(name, age, rollNumber) {
    if (name === void 0) { name = "name"; }
    if (age === void 0) { age = 19; }
    if (rollNumber === void 0) { rollNumber = 123; }
    console.log("I'm ".concat(name, ",My age is ").concat(age, ",and my rollnumber is ").concat(rollNumber));
}
student();
student("Adeeba", 19, 804);
function add(value1, value2) {
    if (value1 === void 0) { value1 = 1; }
    if (value2 === void 0) { value2 = 3; }
    return value1 + value2;
}
console.log(add(1));
console.log(add(undefined, 5));
