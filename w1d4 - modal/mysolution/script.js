"use strict";

document.addEventListener("DOMContentLoaded", function(event) {
  hideModal();
});

function showModal() {
  console.log("Show modal");
  document.querySelector("#modal_container").classList.remove("hidden");

  document.querySelector("#product_1").classList.add("hidden");
  document.querySelector("#product_2").classList.add("hidden");
  document.querySelector("#product_3").classList.add("hidden");
  document.querySelector("#product_5").classList.add("hidden");
  document.querySelector("#product_6").classList.add("hidden");
}

function hideModal() {
  console.log("Hide modal");
  document.querySelector("#modal_container").classList.add("hidden");
}

document.querySelector(".details1").addEventListener("click", function() {
  showModal();
});

document.querySelector(".details2").addEventListener("click", function() {
  showModal();
});

document.querySelector(".details3").addEventListener("click", function() {
  showModal();
});

document.querySelector(".details4").addEventListener("click", function() {
  showModal();
});

document.querySelector(".details5").addEventListener("click", function() {
  showModal();
});

document.querySelector("#closebutton").addEventListener("click", function() {
  hideModal();

  document.querySelector("#product_1").classList.remove("hidden");
  document.querySelector("#product_2").classList.remove("hidden");
  document.querySelector("#product_3").classList.remove("hidden");
  document.querySelector("#product_5").classList.remove("hidden");
  document.querySelector("#product_6").classList.remove("hidden");
});
