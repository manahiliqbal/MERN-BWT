console.log("hello");

//variables 
let age = 22
console.log(age)
const salary = 2000
//salary += 100  //const reassignment not allowed
console.log(salary)

//data types
const language = "javascript" //string
const total = 100 //number
const isEven = true //boolean
let result //undefined
const res = undefined
const data = null 

//objects
const person = {
    name: "John",
    age: 22
}
console.log(person.name)

//arrays
const oddNumbers = [1,3,5,7,9]
console.log(oddNumbers[0])

//operators
let x = 10
let y = 5
console.log(x + y)
console.log(x - y)
console.log(x * y)
console.log(x / y)
console.log(x % y)
console.log(++x)
console.log(--y)
console.log(x===y)

const isValid = y<8 && x<5
console.log('hello' + 'world')
const even = 10%2 ? true: false

//type conversions
console.log(1+'3')
console.log('9'-'3')
console.log('hello'-'world') //not a number
console.log(5 + undefined)

console.log(Number('5'))
console.log(parseInt('5'))
console.log(String(6))
console.log((600).toString())
console.log(Boolean(' '))

//equality
const var1 = 10
const var2 = '10'
console.log(var1 == var2)
console.log(var1 === var2)

//conditional statements
const num = 5
if (num>0) {
    console.log("Number is positive")
}
else if (num==0) {
    console.log("Number is zero")
}
else {
    console.log("Number is negative")
}

const color = 'red'
switch(color) {
    case 'red': {
        console.log('color is red')
        break
    }
    case 'blue': {
        console.log('color is blue')
        break
    }
    default: {
        console.log('color is not red or blue')
    }
}

//loops 
for (let i = 1; i <= 5; i++) {
    console.log('iteration number ' + i)
}

let j = 1
while (j<=5) {
    console.log('iteration number ' + j)
    j++
}

let k = 1
do {
    console.log('iteration number ' + k)
    k++
} while (k<=5)

const numArray = [1, 2, 3, 4, 5]
for (const num of numArray) {
    console.log('iteration number ' + num)
}

//functions
function greet(name) {
    console.log('hello ' + name)
}
greet("John")

const arrowSum = (a, b) => a + b 
console.log(arrowSum(7, 8))

