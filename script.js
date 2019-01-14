var filter = document.querySelector("header form button");
var filterDicht = document.querySelector("body form button");

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
    var y = document.querySelector("body div");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "block";
    } else {
        x.style.display = "none";
        y.style.display = "none";
    }
});


window.addEventListener("load", function(){
    var x = document.querySelector("body form");
        x.style.display = "none";
});



window.addEventListener("scroll", function(){
    var mystrong = document.querySelectorAll("strong");
    //console.log(mystrong)
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    //mystrong[1].className = "strong";
    for(var i=0; i<mystrong.length;i++){
        mystrong[i].className = "strong";
    }

  } else {
    for(var i=0; i<mystrong.length;i++){
        mystrong[i].className = "";
    }
  }

});

window.addEventListener("scroll", function(){
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    document.querySelector("small").className = "small";
    document.querySelector("ins").className = "ins";
  } else {
    document.querySelector("small").className = "";
      document.querySelector("ins").className = "";
  }
});

window.addEventListener("scroll", function(){
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.querySelector("marked").className = "marked";
  } else {
    document.querySelector("marked").className = "";
  }
});

window.addEventListener("scroll", function(){
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.querySelector("del").className = "del";
  } else {
    document.querySelector("del").className = "";
  }
});
