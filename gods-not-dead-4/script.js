var byline = document.getElementById("div_byline");
var dedication = document.getElementById("div_dedication");
var content = document.getElementById("div_content");

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        //document.getElementById("prev-sections").innerHTML = xhttp.responseText;
        json_response = xhttp.responseText;
        json = JSON.parse(json_response);
        var _new_string = "";
        
        var content = json.content;
        for (var i = content.length-3;i<content.length;i++) {
            _new_string += content[i] + "<br>";
        }
        document.getElementById("prev-sections").innerHTML = _new_string;
    }
};
xhttp.open("GET", "https://gods-not-dead-4.herokuapp.com/getLatestSection=true", true);
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
    /*After slight beration from AndrewBGM
    form.submit();
    form.reset();
    //var win = window.open('https://gods-not-dead-4.herokuapp.com/', '_blank');
    //if (win) {
        //Browser has allowed it to be opened
        //win.focus();
    //}
    return false;*/
}
