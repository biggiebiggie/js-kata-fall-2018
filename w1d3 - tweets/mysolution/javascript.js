let jsonUrl = "https://kea-alt-del.dk/twitter/api/";
let tweets = [];
let template = document.querySelector("template").content;
let display = document.querySelector("#tweet_box");

document.addEventListener("DOMContentLoaded", hentJson);

async function hentJson() {
  let dataJson = await fetch(jsonUrl);
  tweets = await dataJson.json();
  console.log(tweets);

  printTweets();
}

function printTweets() {
  tweets.statuses.forEach(tweet => {
    let clone = template.cloneNode(true);

    clone.querySelector("[data-name]").textContent = tweet.user.name;

    clone.querySelector("[data-image]").src = tweet.user.profile_image_url;

    clone.querySelector("[data-text]").innerHTML = tweet.text;
    display.appendChild(clone);
  });
}
