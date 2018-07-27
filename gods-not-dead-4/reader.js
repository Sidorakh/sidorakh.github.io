var json_response = "";
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       //document.getElementById("reader").innerHTML = xhttp.responseText;
       json_response = xhttp.responseText;
       open_reader();
    }
};
xhttp.open("GET", "https://gods-not-dead-4.herokuapp.com/", true);
xhttp.send();

function open_reader() {
    el_contents_main = document.getElementById("contents_ol_main");
    el_contents_pages = document.getElementById("contents_ol_pages");
    el_dedications = document.getElementById("dedications_tbl");
    el_content = document.getElementById("div_content");
    json = JSON.parse(json_response);

    var _content_addition = "";
    var i = 0, page=1;
    while (i < json.content.length) {

        el_content.innerHTML += `<div class="reader-page" id="reader-page-${page}"> <p class="page-header"> Page ${page} </p>`;
        for (var j = 0;j<5;j++) {
            var _lines = 4;
            if (j % 3==1) {
                _lines = 5;
            }
            for (var k=0;k<_lines;k++) {
                if (json.content[i] != undefined) {
                    _content_addition += json.content[i] + " ";
                }
                i+=1;
                if (i >= json.content.length) {
                    break;
                }
            }
            el_content.innerHTML += "<p class=\"reader-paragraph\">" + _content_addition + "</p>";
            _content_addition = "";
            
        }
        page+=1;
        el_content.innerHTML += "</div>";
    }
    for (var n=1;n<page;n++) {
        el_contents_pages.innerHTML += `<li> <a href="#reader-page-${n}"> Page ${n} </a> </li>`;
    }
}