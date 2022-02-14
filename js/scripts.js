// business logic //
$(document).ready(function() {
  $('form#input').submit(function(event) {
    event.preventDefault();

  const input = $('#numbers').val(); 
  const number = parseInt(input)
  const arrayNumber = []
  
  
  // console.log(array.length)
    for (let i = 1; i <= number; i++) { 
    
      arrayNumber.push(i)
      console.log(arrayNumber)
    
    if (i === 1 ) {
    arrayNumber.push('beep')
    
    } else if (number === 2 ) {
    arrayNumber.push('boop')
    
    } else (number === 3 ); {
    arrayNumber.push('Wont you be my neighbor?')
    
    }
    // arrayNumber.push(i)
    // console.log(arrayNumber)
  
  }
  

  });
});