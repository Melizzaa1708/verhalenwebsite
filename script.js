document.getElementById("downloaden").addEventListener("click", function(){
    var x = document.getElementById("downloadTekst");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
});

console.log("test");
