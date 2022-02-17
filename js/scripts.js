// business logic //

function roboBeep(inputNum){
  const arrayNumber = []
  for (let i = 0; i <= inputNum; i++) {
    
    let numberImLookingAt = i.toString();
  
    if (numberImLookingAt.includes('3')) {
      arrayNumber.push('Wont you be my neighbor?')
    } else if (numberImLookingAt.includes('2')) {
      arrayNumber.push('boop')
    } else if (numberImLookingAt.includes('1')) {
      arrayNumber.push('beep')
    } else {
      arrayNumber.push(i)
    }
  }
  return arrayNumber  
}

// UI logic
$(document).ready(function() {
  $('form#input').submit(function(event) {
    event.preventDefault();

    const input = $('#numbers').val(); 
    const inputNum = parseInt(input);
    const outputArray = roboBeep(inputNum);
  
    $('#results').text(outputArray)
  });
});

