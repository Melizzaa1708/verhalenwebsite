
var filter = document.querySelector("header form button");
var filterDicht = document.querySelector("body form button");
var feedback = document.querySelector("article button:first-of-type");

var mymarked = document.querySelectorAll("marked");
var mystrong = document.querySelectorAll("strong");
var mydel = document.querySelectorAll("del");
var mysmall = document.querySelectorAll("small");


filter.addEventListener("click", function(){
    var x = document.querySelector("body form");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
});

filterDicht.addEventListener("click", function(){
    var x = document.querySelector("body form");
    if (x.style.display === "none") {
       x.style.display = "block";
    } else {
        x.style.display = "none";
    }
});


window.addEventListener("load", function(){
    var x = document.querySelector("body form");
        x.style.display = "none";
});

//

feedback.addEventListener("click", function(){
    var x = document.querySelector("aside");
    if (x.style.display === "none") {
       x.style.display = "block";
    } else {
        x.style.display = "none";
    }
});


window.addEventListener("load", function(){
    var x = document.querySelector("aside");
        x.style.display = "none";
});

//

window.addEventListener("scroll", function(){
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    mystrong[0].className = "strong";

  } else {
    mystrong[0].className = "";

  }
});

window.addEventListener("scroll", function(){
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
    mysmall[0].className = "small";
    mymarked[0].className = "marked";

  } else {
    mysmall[0].className = "";
    mymarked[0].className = "";
  }
});

window.addEventListener("scroll", function(){
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    mydel[0].className = "del";
  } else {
    mydel[0].className = "";

  }
});

window.addEventListener("scroll", function(){
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    mysmall[1].className = "small";
  } else {
    mysmall[1].className = "";
  }
});

window.addEventListener("scroll", function(){
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
    mymarked[1].className = "marked";
  } else {
    mymarked[1].className = "";
  }
});

window.addEventListener("scroll", function(){
  if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
      mystrong[1].className = "strong";
      mydel[1].className = "del";

  } else {
    mystrong[1].className = "";
    mydel[1].className = "";
  }
});

