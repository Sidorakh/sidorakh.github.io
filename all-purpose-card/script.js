let chk = {}
chk.chk_happy = document.querySelector('#chk-happy');
chk.chk_merry = document.querySelector('#chk-merry');
chk.chk_speedy = document.querySelector('#chk-speedy');
chk.chk_tolerable = document.querySelector('#chk-tolerable');
chk.chk_birthday = document.querySelector('#chk-birthday');
chk.chk_anniversary = document.querySelector('#chk-anniversary');
chk.chk_christmas = document.querySelector('#chk-christmas');
chk.chk_recovery = document.querySelector('#chk-speedy');
chk.chk_other_desc = document.querySelector('#chk-other-desc');
chk.chk_other_event = document.querySelector('#chk-other-event');
chk.chk_other_person = document.querySelector('#chk-other-person');
function defoc() {
  chk.chk_other_desc.checked = true;
}
function evfoc() {
  chk.chk_other_event.checked = true;
}
function opfoc() {
  chk.chk_other_person.checked = true;
  document.querySelector('#hash').innerText = window.location.hash;
}
function save() {
  const od = document.querySelector('#ode');
  const oe = document.querySelector('#oev');
  const op = document.querySelector('#ope');
    const obj = {
      other_desc:od.value,
      other_event:oe.value,
      other_person:op.value
    }
    for (const key in chk) {
        obj[key] = chk[key].checked;
    }
    return btoa(JSON.stringify(obj));
}

window.onload = ()=>{
    console.log(window.location.hash);
    if (window.location.hash) {
        const str = atob(window.location.hash.substr(1));
        const obj = JSON.parse(str);
        document.querySelector('#ode').value = obj.other_desc;
        document.querySelector('#oev').value = obj.other_event;
        document.querySelector('#ope').value = obj.other_person;
        for (const key in chk) {
            chk[key].checked = obj[key];
        }
        console.log(obj);
    }
}

function savecard() {
    let port_str = "";
    if (window.location.port) {
        port_str = `:${window.location.port}`;
    }
  document.querySelector('#hash').innerHTML = `Result: <a href='${window.location.protocol}//${window.location.hostname}${port_str}${window.location.pathname}#${save()}'> Link </a>`
}