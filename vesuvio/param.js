var param = new URLSearchParams(window.location.search);
var param_obj = {};
for (var pair of param.entries()) {
    if (document.getElementById(pair[0])) {
        var elem = document.getElementById(pair[0]);
        elem.value = pair[1];
    }
}