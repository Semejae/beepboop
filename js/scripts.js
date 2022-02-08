
function creditCard(cardNumber) {
  const numbers = "4102080860435620";
  const numbersArray=numbers.split('');
  parseInt(numbersArray.reverse());
  doubledNumbers=[];
  
  for (let i=0; i<numbersArray.length; i +=2){
    doubledNumbers.push(numbersArray[i] * 2);
  }  
  console.log(doubledNumbers);
  for (let j=1; j<numbersArray.length; j +=2){
    doubledNumbers.push(numbersArray[j]*1);
  }
  console.log(doubledNumbers);
}



// Got it, let me try something...we can always split it out, into other peices. plit string first?//
  // ok do your thing, ill watch  ok, that isn't pretty, but gets us from the initial input to an array. But the array elements are all strings, not numbers...hang on one sec. I think we can just make that part of the loop when we get to that part. Hang on, I'll just jump on discord in a sec.