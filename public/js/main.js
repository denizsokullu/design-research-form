counter = 0;
length = 720;
numOfQuestions = 6;
$(window).ready(function(){
  $('a[href^="#"]').click(function(event) {
      console.log("asd");
      var target = $($(this).attr('href'))[0];
      event.preventDefault();
      $('html, body').animate({
          scrollTop: target.offsetTop -96
      },700);
      counter ++;
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
$(window).ready(function(){
  window.scrollTo(0,0);
})
