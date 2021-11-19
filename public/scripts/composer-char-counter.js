// console.log ("Do I work?")
$(document).ready(function() {
  $('#tweet-text').on('keyup',function(){  
   let characterCount = 140 - ($(this).val().length)
    $(this).parents("form").children("output").text(characterCount)
    if(characterCount < 0){
      $(this).parents("form").children("output").addClass('red-counter')
    }
    else{
      $(this).parents("form").children("output").removeClass('red-counter')
    }
    
})
 
});


// [ ] A container element that contains the tweets
// [ ] The styling of the tweet, as shown in the first screenshot below
// [ ] The hover state of the tweet where the stylistic changes occur (as mentioned in the second screenshot below)
// [ ] The time that has passed since the tweet was created (e.g. 10 days ago)