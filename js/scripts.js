$(document).ready(function() {
  $("form#Quiz").submit(function(event) {
    
    const inputAge = parseInt($("#age").val());
    const inputColor = parseInt($("input:radio[name=color]:checked").val());
    const inputAnimal = parseInt($("input:radio[name=animal]:checked").val());
    const inputTime = parseInt($("input:radio[name=time]:checked").val());
    const inputPlanet = parseInt($("input:radio[name=planet]:checked").val());
    
    let score = 0
    
    // Age
    if (inputAge <= 18) {
      score += 5;
    } else if (inputAge > 18 && inputAge <= 30) {
      score += 10;
    } else if (inputAge > 30) {
      score += 15;
    }
    else {
      alert('You Must Enter Your Age!');
    }
    
    //Color
    if (inputColor === 1) {
      score +=5;
    } else if (inputColor === 2) {
      score += 10;
    } else {
      score += 15;
    }
    
    //Animal
    if (inputAnimal === 1) {
      score +=5;
    } else if (inputAnimal === 2) {
      score += 10;
    } else {
      score += 15;
    }
    
    //Time
    if (inputTime === 1) {
      score +=5;
    } else if (inputTime === 2) {
      score += 10;
    } else {
      score += 15;
    }
    
    //Planet
    if (inputPlanet === 1) {
      score +=5;
    } else if (inputPlanet === 2) {
      score += 10;
    } else {
      score += 15;
    }
    
    if (score <40 ) {
       answerText = "Learn C-Sharp!";
      } else if (score >= 40 && score < 60) {
        answerText = "Learn JavaScript!";
      } else if (score >= 60) {
       answerText = "Learn Python!";
      }

    $("#result").show();
    $("#result").text(answerText);




    //Score Results
    // if (score <40 ) {
    //   $('#C-Sharp').show();
    // } else if (score >= 40 && score < 60) {
    //   $('#Javascript').show();
    // } else if (score >= 60) {
    //   $('#Python').show();
    // }
    
    event.preventDefault();
  });
});