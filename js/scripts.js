$(document).ready(function() {
  $("form#Quiz").submit(function(event) {
    event.preventDefault();
    
    const inputAge = parseInt($("#age").val());
    const inputColor = parseInt($("input:radio[name=color]:checked").val());

    let score = 0

    // Age
    if (inputAge <= 18) {
      score += 5;
    } else if (inputAge > 18 && inputAge <= 30) {
      score += 10;
    } else if (inputAge > 30 && inputAge <= 100) {
      score += 15;
    }
     else {
       score += 0;
    }

     //Color
     if (inputColor === 1) {
       score +=5;
     } else if (inputColor === 2) {
       score += 10;
     } else {
       score += 15;
     }


    if (score <=10 ) {
      $('#C-Sharp').show();
    } else if (score > 10 && score <= 20) {
      $('#Javascript').show();
    } else if (score > 20) {
      $('#Python').show();
    }

  });
});