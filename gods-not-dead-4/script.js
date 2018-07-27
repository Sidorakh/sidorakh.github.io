var byline = document.getElementById("div_byline");
var dedication = document.getElementById("div_dedication");
var content = document.getElementById("div_content");

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       document.getElementById("prev-sections").innerHTML = xhttp.responseText;
    }
};
xhttp.open("GET", "http://127.0.0.1:3000?getLatestSection=true", true);
xhttp.send();

function show_byline() {
    byline.style.display="block";
    dedication.style.display="none";
    content.style.display="none";
}

function show_dedication() {
    byline.style.display="none";
    dedication.style.display="block";
    content.style.display="none";
}

function show_content() {
    byline.style.display="none";
    dedication.style.display="none";
    content.style.display="block";
}

function blank_form(form) {
    setTimeout(function(){form.reset();},100);  //enough tiem to submit
}
