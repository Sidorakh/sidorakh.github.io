var byline = document.getElementById("div_byline");
var dedication = document.getElementById("div_dedication");
var content = document.getElementById("div_content");

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