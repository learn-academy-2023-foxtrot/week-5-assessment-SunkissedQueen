// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

// Developer Ilene

describe("codedMessage", () => {
  it("Returns a string with a coded message. Some letters/characters turn into numbers", () => {
      expect(codedMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
      expect(codedMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k")
      expect(codedMessage(secretCodeWord3)).toEqual("3cc3ntr1c")
  })
})
//GOOD FAILURE! ReferenceError: CodedMessage is not defined

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

// b) Create the function that makes the test pass.

// Pseudo code:
//Function Name: codedMessage
//Input: String
//Output: String
//Process: Create your function, your function will take in a parameter of a string. Turn your string into an array use .split("") with quotes to separate each letter. Iterate through the array using the for loop. Use conditional statement to determine if string includes a,e,i,o to turn them into numbers. Add a Logical OR to also check if the letter is uppercase to change it.

const codedMessage = (string) => {
  const arr = string.split("") //Makes the string into an array.
  for (let i = 0; i < arr.length; i++) { //Loops through the array
      if(arr[i].includes("a") || arr[i].includes("A")){ //If the arr includes lowercase or capital string 'A' then it will change the value of the index where the letter is found at to number four. 
          arr[i] = 4
      }else if(arr[i].includes("e") || arr[i].includes("E")){ //If the arr includes lowercase or capital string 'E' then it will change the value of the index where the letter is found at to number three. 
          arr[i] = 3
      }else if(arr[i].includes("i") || arr[i].includes("I")){ //If the arr includes lowercase or capital string 'I' then it will change the value of the index where the letter is found at to number one. 
          arr[i] = 1
      }else if(arr[i].includes("o") || arr[i].includes("O")){ //If the arr includes lowercase or capital string 'O' then it will change the value of the index where the letter is found at to zero. 
          arr[i] = 0
      }
  }
  return arr.join("") //Returns the array, but .join("") converts it back into a string. 
}
// console.log(codedMessage(secretCodeWord1))
// console.log(codedMessage(secretCodeWord2))
// console.log(codedMessage(secretCodeWord3))

// Recommendation
// place test variables inside the jest test
// Refactor: try a different method like ternary operator or regex

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

// Developer Roniel

// describe('onlyContains',() => {
//   const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

//   const filterLetterA = "a"
//   // Expected output: ["Mango", "Apricot", "Peach"]
//   const filterLetterE = "e"
//   // Expected output: ["Cherry", "Blueberry", "Peach"]

//   it('returns an array of all the words containing that particular letter', () =>{

//       expect(onlyContains(filterLetterA)).toEqual(["Mango", "Apricot", "Peach"])

//       expect(onlyContains(filterLetterE)).toEqual(["Cherry", "Blueberry", "Peach"])
//   })
// })

// Since the prompt stating that a function that takes in an array of words and a single letter, function call should have two arguments
describe('onlyContains',() => {
  const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

  const filterLetterA = "a"
  // Expected output: ["Mango", "Apricot", "Peach"]
  const filterLetterE = "e"
  // Expected output: ["Cherry", "Blueberry", "Peach"]

  it('returns an array of all the words containing that particular letter', () =>{

      expect(onlyContains(fruitArray, filterLetterA)).toEqual(["Mango", "Apricot", "Peach"])
      expect(onlyContains(fruitArray, filterLetterE)).toEqual(["Cherry", "Blueberry", "Peach"])
  })
})


//  Output: ReferenceError: onlyContains is not defined


// b) Create the function that makes the test pass.

// Pseudo code:
// Name: onlyContains
// Input: array
// Output: array
// Process: create a function that takes in an array and returns an array with words that only contain particular letter using .includes() and if array contains words with .filter().

// const onlyContains = (letterToCheck) => {
//     const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
//     const newArr = fruitArray.filter((fruit) => fruit.toLowerCase().includes(letterToCheck))
//     // if(fruitArray.includes(arr) === true){
//     // }
//     return newArr

// }
// Output: Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.193 s, estimated 1 s

// Since the prompt stating that a function that takes in an array of words and a single letter, function expression should have two parameters
const onlyContains = (arrayToCheck, letterToCheck) => {
    const newArr = arrayToCheck.filter((fruit) => fruit.toLowerCase().includes(letterToCheck))
    return newArr
}

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.
// Developer Shaun
// a) Create a test with expect statements using the variable provided.

describe("fullHouse", () => {
  it("returns true if the array is a full house", () => {
const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true
      expect(fullHouse(hand1)).toEqual(true)
      expect(fullHouse(hand2)).toEqual(false)
      expect(fullHouse(hand3)).toEqual(false)
      expect(fullHouse(hand4)).toEqual(true)
  })
})

// b) Create the function that makes the test pass.

// Pseudo code:
// create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house"
// use sort method to sort the array in ascending order 
// use filter method to filter through the array and return the numbers that are the same
// use length method to check if the length of the filtered array is 2
// if the length is 2, return true
// else return false


const fullHouse = (hand) => {
  const counts = {}
  for (let i = 0; i < hand.length; i++) {
    const card = hand[i]
    counts[card] = counts[card] ? counts[card] + 1 : 1
  }
  const values = Object.values(counts)
  return values.includes(2) && values.includes(3)
}
// console.log(fullHouse([5, 5, 5, 3, 3]))
// //true
// console.log(fullHouse([5, 5, 3, 3, 4]))
// //false
// console.log(fullHouse([5, 5, 5, 5, 4]))
// //false
// console.log(fullHouse([7, 2, 7, 2, 7]))
// //true    

