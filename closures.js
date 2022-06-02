function return_a_func(){
  var word="I can see inside";
  function sentense(){
    var word2= "I can also see outside";
    console.log(word +" "+ word2);
  }
  return sentense;
}

return_a_func();

var finalSentense= return_a_func();


finalSentense();
