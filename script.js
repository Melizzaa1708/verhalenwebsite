var downloadbutton = document.querySelector(".downloaden");
var downloadTekst = document.querySelector("article p");
var filter = document.querySelector("header form button");
//console.log("button",downloadbutton)


downloadbutton.addEventListener("click", function(){
    var x = document.querySelector("article p");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
});

filter.addEventListener("click", function(){
    var x = document.querySelector("body form, div");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
});





//!!

//@Koop: "Dit stukje heb ik geprobeerd, maar werkt niet."

downloadTekst.addEventListener("load", function(){
    var x = document.querySelector("article p");
        x.style.display = "none";
});
