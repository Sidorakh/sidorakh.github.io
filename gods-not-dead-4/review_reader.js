var json_response = "";
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       //document.getElementById("reader").innerHTML = xhttp.responseText;
       json_response = xhttp.responseText;
       open_reviews();
    }
};
xhttp.open("GET", "https://gods-not-dead-4.herokuapp.com/?get_reviews=true", true);
xhttp.send();

function open_reviews() {
    el_reviews = document.getElementById("div_reviews");
    var json = JSON.parse(json_response);
    console.log(json_response);
    var _content_addition = "";
    
    var _review_list = json.review_list;
    for (let i=0;i<_review_list.length;i++) {
        let _review = _review_list[i];
        let rating = "Rating: ";
        for (let j=0;j<_review.rating;j++) {
            rating += "&#x2B50";
        }
        let comment = "Comment: <br> " + _review.comment;
        el_reviews.innerHTML += `<p class="review" id="review-${i}>`;
        el_reviews.innerHTML += `<p class="rating">${rating}</p>`;
        el_reviews.innerHTML += `<p class="comment">${comment}</p>`;
        el_reviews.innerHTML += `</p>`;
        console.log(rating + "\n" + comment);
    }
    console.log("html: " + el_reviews.innerHTML);
}