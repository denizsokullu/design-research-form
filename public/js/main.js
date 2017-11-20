counter = 0;
length = 720;
numOfQuestions = 6;

var database = firebase.database();
var ref = database.ref('submissions');
var curSub = {};

$(window).ready(function(){
  window.scrollTo(0,0);
  $('a[href^="#"]').click(function(event) {
      var target = $($(this).attr('href'))[0];
      event.preventDefault();
      $('html, body').animate({
          scrollTop: target.offsetTop -96
      },700);
      counter ++;
      //update this to be the actual information
      curSub[parseInt(counter)] = "Yes";
      if($(this).attr('href').includes("result")){
        console.log('submitted!');
        ref.push(curSub);
      }
      if(counter > numOfQuestions){
        return;
      }
      if(counter == numOfQuestions){
        $(".progress-inner").css("width",(length/numOfQuestions*counter)-2);
      }
      else{
        $(".progress-inner").css("width",length/numOfQuestions*counter);
      }

  });
})
