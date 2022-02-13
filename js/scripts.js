// business logic //
$(document).ready(function() {
  $('form#input').submit(function(event) {
    event.preventDefault();

  const input = $('#numbers').val(); 
  const array = ['beep', 'boop', 'wont you be my neighbor?'];
    console.log(array['0'])

  function outPutNumber(output) {  
    return array;
  }
  // if input === 1 {
  //   return array['0']
  // } else if input === 2 {
  //   return array['1']
  // } else input === 3 {
  //   return array['3']
  // }
  

  

  });
});