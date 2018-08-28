document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");

  document.querySelector(".accept").addEventListener("click", function() {
    document.querySelector(".cookies").style.animation = "moveDown 2s ease-out";
    document.querySelector(".cookies").style.animationFillMode = "forwards";
  });

  document.querySelector(".decline").addEventListener("click", function() {
    document.querySelector(".cookies").style.animation = "moveDown 2s ease-out";
    document.querySelector(".cookies").style.animationFillMode = "forwards";
  });
});
