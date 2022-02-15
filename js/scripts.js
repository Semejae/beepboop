// business logic //
$(document).ready(function() {
  $('form#input').submit(function(event) {
    event.preventDefault();

  const input = $('#numbers').val(); 
  const number = parseInt(input)
  const arrayNumber = []
  
  
  // console.log(array.length)
    
    for (let i = 1; i <= number; i++) {
      
      let numberImLookingAt = i.toString();
    
      if (numberImLookingAt.includes('3')) {
        arrayNumber.push('Wont you be my neighbor?')
      
      } else if (numberImLookingAt.includes('2')) {
        arrayNumber.push('boop')
      
      } else if (numberImLookingAt.includes('1')) {
        arrayNumber.push('beep')

      } else {
        arrayNumber.push(numberImLookingAt)
      console.log(arrayNumber)
      };
    
    }
  });
});