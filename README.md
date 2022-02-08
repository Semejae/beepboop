Describe: creditCard()

Test: "split input into an array
Code: 
Const number = "4102080860435620";
creditCard();
Expected Output: ['4', '1', '0', '2', '0', '8', '0', '8', '6', '0', '4', '3', '5', '6', '2', '0']

Test: "reverse array"
Code:
const numberArray = ['4', '1', '0', '2', '0', '8', '0', '8', '6', '0', '4', '3', '5', '6', '2', '0']
creditCard();
Expected Output: numbersArray.reverse: ['0', '2', '6', '5', '3', '4', '0', '6', '8', '0', '8', '0', '2', '0', '1', '4']

test: double value of every other array element.
Code:
numbers array:['0', '2', '6', '5', '3', '4', '0', '6', '8', '0', '8', '0', '2', '0', '1', '4']
Expected outcome[0, 12, 6, 0, 16, 16, 4, 2]

test: get the remaining values in the reversed array (not to be doubled) and add them to the new array.
code:
numbers array: ['0', '2', '6', '5', '3', '4', '0', '6', '8', '0', '8', '0', '2', '0', '1', '4']
Expected output:[2, 5, 4, 6, 0, 0, 0, 4]

test: isolate doubled values greater than 10.
code:
doubledNumbers array:[0, 12, 6, 0, 16, 16, 4, 2]
expected output:[12, 16, 16]

test: convert 2-digit values to a string.

test: split string into two variables.

test: convert string variables into numbers.

test: Add the two numbers.

test: figure out how to new digits into array (map?)

test: sum array.