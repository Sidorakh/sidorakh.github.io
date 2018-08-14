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
    var el_contents_main = document.getElementById("contents_ol_main");
    var el_contents_pages = document.getElementById("contents_ol_pages");
    var el_content = document.getElementById("div_content");
    var json = JSON.parse(json_response);

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
                    var sentence = json.content[i] + " ";
                    sentence = sentence.trim();
                    if (".!?".indexOf(sentence[sentence.length-1]) == -1) {
                        sentence += "."
                    }
                    sentence += " ";
                    _content_addition += sentence;
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
    var el_authors = document.getElementById("authors");
    for (var i=0;i<json.byline.length;i++) {
        el_authors.innerHTML += `<li> ${json.byline[i]} </li>`;
    }

    var el_dedications = document.getElementById("tbl_dedications");

    var list = json.dedications.invalidators.concat(json.dedications.dicks.concat(json.dedications.other));
    for (var i=0;i<list.length;i++) {
        var dick = list[i];
        el_dedications.innerHTML += `<tr> <td> ${dick.name} </td> <td> ${dick.from} </td> <td> ${dick.reason} </td> </tr> `
    }
}