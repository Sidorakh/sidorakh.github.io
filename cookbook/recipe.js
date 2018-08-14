var json_response = "";
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       //document.getElementById("reader").innerHTML = xhttp.responseText;
       json_response = xhttp.responseText;
       load_recipes(json_response);
    }
};
xhttp.open("GET", "https://gods-not-dead-4.herokuapp.com?get_recipes=true", true);
xhttp.send();

function load_recipes(json) {
    var el_content = document.getElementById("div_content");
    var data = JSON.parse(json);

    var html = "";
    var field_open = '<div class="field">';
    var content_open = '<div class="content">';
    var close= "</div>";
    for (var i=0;i<data.recipe_list.length;i++) {
        html += '<p>';
        html += `${field_open} Author: ${close} ${data.recipe_list[i].author} ${close} <br>`;
        html += `${field_open} Name: ${close} ${data.recipe_list[i].name} ${close} <br>`;
        html += `${field_open} Spoons: ${close} ${data.recipe_list[i].spoons} ${close} <br>`;
        html += `${field_open} Ingredients: ${close} ${data.recipe_list[i].ingredients} ${close} <br>`;
        html += `${field_open} Method: ${close} ${data.recipe_list[i].method} ${close} <br>`;
        html += '</p>';
        html += '<hr>';
    }
    el_content.innerHTML += html;
}