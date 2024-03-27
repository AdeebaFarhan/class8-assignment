function fruit(name: string = "fruit"): void {
  console.log(`my favourite fruit is ${name}`);
}
fruit();
fruit("Mango");

function greet(name: string = "Guest"): void {
  console.log(`Hello, ${name}!`);
}
//calling the function with default parameter
greet();
// Calling the function with value
greet("Friends");

function student(
  name: string = "name",
  age: number = 19,
  rollNumber: number = 123
): void {
  console.log(
    `I'm ${name},My age is ${age},and my rollnumber is ${rollNumber}`
  );
}
student();
student("Adeeba", 19, 804);

function add(value1: number = 1, value2: number = 3): number {
  return value1 + value2;
}

console.log(add(undefined, 5));
