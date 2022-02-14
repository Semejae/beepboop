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
    // console.log(arrayNumber)
    }
    
    if (number === 3 ) {
    arrayNumber.push('beep')

  console.log(arrayNumber)
  //   } else if (number === 2 ) {
  // return "boop"

  //   } else (number === 3 ); {
  // return 'Wont you be my neighbor?'
  //   }
  
  
  
  }
  

  });
});