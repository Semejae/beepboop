const goodNumbers="4102080860435620";
const badNumbers="4102080880435620";


function creditCard(numbers) {
  const numbersArray=numbers.split('');
  parseInt(numbersArray.reverse());
  const doubledNumbers=[];
  const bigDoubledNumbers=[];
  const finalNumbers=[];
  let sum=0;

  // adds numbers to be doubled to doubledNumbers array
  for (let i=0; i<numbersArray.length; i +=2){
    doubledNumbers.push(numbersArray[i] * 2);
  }  
  console.log(doubledNumbers);
  // move numbers that were not doubled but need to be part of the final sum to finalNumbers
  for (let j=1; j<numbersArray.length; j +=2){
    finalNumbers.push(numbersArray[j]*1);
  }

  // after numbers multiplied, sorted- anything under 10 moves to finalNumbers Array, >10, to a new Array.
  doubledNumbers.forEach(function(k) {
    if(k>9){
      bigDoubledNumbers.push(k);
    } else{
      finalNumbers.push(k);
    }
  });
  //converts numbers over 10 into a string, splits the string into two variables(one for each digit), converts those to numbers, and then adds them. Finally, they get pushed into the finalNumbers Array.
  bigDoubledNumbers.forEach(function(l){
    const biggieNumber=l.toString();
    const firstDigit=biggieNumber[0];
    const secondDigit=biggieNumber[1];
    smallsNumber=parseInt(firstDigit)+parseInt(secondDigit);
    finalNumbers.push(smallsNumber);
  });
//adding up all numbers in finalNumbers array- if ends in a zero, it's valid, invalid if anything else.
  finalNumbers.forEach(function(m){
    sum +=m;
  });
  console.log(bigDoubledNumbers);
  console.log(finalNumbers);
  console.log(sum);
};
