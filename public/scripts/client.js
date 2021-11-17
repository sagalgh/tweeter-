/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
// //  */
// const $tweet = $(`<article class="tweet">Hello world</article>`);

// const { text } = require("body-parser")

// Test / driver code (temporary). Eventually will get this from the server.

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]
const renderTweets = function(tweets) {
  for (let tweet of tweets){
    // calls createTweetElement for each tweet
    const $tweet = createTweetElement(tweet)
    // takes return value and appends it to the tweets container
    $('.tweets-container').append($tweet)
  }
}
const createTweetElement = function(tweetData){
 const $tweet =  $("<article>").addClass("tweet");
    $tweet.append(`
  <div>
      <header class = "tweet-header">
        <span><img src="${tweetData.user.avatars}"></img> ${tweetData.user.name}</span>
        <span class= "user-handle">${tweetData.user.handle}</span>
      </header>
      <div class = "tweet-body">
        <p>${tweetData.content.text}</p>
        <div class= "line-under-tweet"></div> 
      </div>
      <footer class= "tweet-footer">
        <p>${timeago.format(tweetData.created_at)}</p>
        <span class= "icons">
        <i class="fas fa-flag"></i>
        <i class="fas fa-retweet"></i>
        <i class="fas fa-heart">'</i>
        </span>
      </footer>
  </div>
  `)
  return $tweet
}
// const $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
// console.log($tweet); // to see what it looks like
$(document).ready(function() {
  $('#tweet-submit').on('submit', function(evt){
    evt.preventDefault();
    const val= $(this).serialize();
    $.ajax({
      type: "POST",
      url: "/tweets",
      data: val
    }).then((res)=>{
        console.log("VAL-----",val)
      })
  //  $.post("/tweets", val).then(()=>{
  //   console.log("VAL-----",val)
  // })
})
renderTweets(data)
});
 // to add it to the page so we can make sure it's got all the right elements, classes, etc.