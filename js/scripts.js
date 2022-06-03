$(document).ready(function() {
  $("form#Quiz").submit(function(event) {
    event.preventDefault();
    
    const inputAge = parseInt($("#age").val());
    const inputColor = $("#color").val();

    let score = 0
    if (inputAge <= 18) {
      score + 5;
    } else if (inputAge > 18 && inputAge<= 30) {
      score += 10;
    } else {
      score += 15;
    }
    console.log(score);

    if (score <=5 ) {
      $('#C-Sharp').show();
    } else if (score > 5 && score < 15) {
      $('#Javascript').show();
    } else if (score > 30) {
      $('#Python').show();
    }

  });
});