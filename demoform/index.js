function check(){
    var c=0;
    var q1=document.quiz.question1.value;
    var q2=document.quiz.question2.value;
    var q3=document.quiz.question3.value;
    var q4=document.quiz.question4.value;
    var q5=document.quiz.question5.value;
    var result =document.getElementById('result');
    var quiz= document.getElementById('quiz');
    if (q1=="JavaScript"){c++};
    if (q2=="Russia"){c++};
    if (q3=="Nairobi"){c++};
    if (q4=="J.Kenyatta"){c++};
    if (q5=="4"){c++};
    quiz.style.display= "none";
    if (c>=4) {
        result.textContent= 'Your Score is '+ c +'.'+ ' '+ 'Excellently done. Keep it up!'
    } else if (c>=3) {
        result.textContent= 'Your score is '+c+ '. Your score was avarage. Kindly pull up your socks.'
    } else {
        result.textContent='Your score is '+ c+ '. You scored below avarage. Kindly reattempt'
    }
   return 0;
}