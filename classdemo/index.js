function myButton() {
    // code here
    // document.write("Hey there!");
    var score = 0;
    var currentAnswer1 = document.first.quiz1.value;
    var currentAnswer2 = document.first.quiz2.value;
    var currentAnswer3 = document.first.quiz3.value;
    var currentAnswer4 = document.first.quiz4.value;
    var currentAnswer5 = document.first.quiz5.value;
    var currentAnswer6 = document.first.quiz6.value;
    var result= document.getElementById("text");
    if (currentAnswer1==30){score+=10};
    if (currentAnswer2=="Coffee"){score+=10};
    if (currentAnswer3=="Rugby"){score+=10};
    if (currentAnswer4=="Silus"){score+=10};
    if (currentAnswer5=="Subaru"){score+=10};
    if (currentAnswer6=="Chicken"){score+=10};
    quiz.style.display= "none";
   
    if (score==60) {
        result.textContent= "Your score is 100%. Congratulation! You passed!";
    } else if (score==50) {
        result.textContent= "Your score is 83%. Congratulation! You passed!";
    } else if (score==40) {
        result.textContent= "Your score is 66%. Congratulation! You passed fairly!";
    } else if (score==30) {
        result.textContent= "Your score is 50%. Congratulation! You scored average!";
    } else {
        result.textContent= "Your score is below average. Kindly reattempt!!!"; 
    }
}