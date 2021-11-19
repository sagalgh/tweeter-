/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
// //  */
// const $tweet = $(`<article class="tweet">Hello world</article>`);

// const { text } = require("express");

// const { text } = require("body-parser")

// Test / driver code (temporary). Eventually will get this from the server.
const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};
// const safeHTML = `<p>${escape(textFromUser)}</p>`;


const renderTweets = function (tweets) {
  $('.tweets-container').empty();
  for (let tweet of tweets) {
    // calls createTweetElement for each tweet
    const $tweet = createTweetElement(tweet)
    // takes return value and appends it to the tweets container
    $('.tweets-container').prepend($tweet)
  }
}
const createTweetElement = function (tweetData) {
  //  const $tweet =  $("<article>").addClass("tweet");

  // $tweet.append(`
  const tweet = `
  <div>
      <header class = "tweet-header">
        <span><img src="${tweetData.user.avatars}"></img> ${tweetData.user.name}</span>
        <span class= "user-handle">${tweetData.user.handle}</span>
      </header>
      <div class = "tweet-body">
        <p>${escape(tweetData.content.text)}</p>
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
  `
  return tweet
}
// const $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
// console.log($tweet); // to see what it looks like
$(document).ready(function () {
  function loadTweets() {
    $.ajax({
      type: "GET",
      url: "/tweets",
      dataType: "json"
    }).then((res) => {
      renderTweets(res);
      // console.log("response--",res)
    })
  };
  loadTweets();
  $('#tweet-submit').on('submit', function (evt) {
    evt.preventDefault();
    if ($("#tweet-text").val().length === 0) {
      $(".error-message")
      .text(`Error- field is empty`) 
      .slideDown()
      };
    
    if ($("#tweet-text").val().length > 140) {
      $(".error-message")
      .text(`Error- It's toooo long!`) 
      .slideDown()

    }else {
      const $val = $(this).serialize();
      $.ajax({
        type: "POST",
        url: "/tweets",
        data: $val
      }).then((res) => {
        loadTweets()
        $("#tweet-submit").get(0).reset();
        $("#tweet-text").val("");
        $(".counter").val(140);
      })
    }
  })




});
 // to add it to the page so we can make sure it's got all the right elements, classes, etc.