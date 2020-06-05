let chk = []
// descriptions
chk[0] = document.querySelector('#chk-happy');
chk[1] = document.querySelector('#chk-merry');
chk[2] = document.querySelector('#chk-speedy');
chk[3] = document.querySelector('#chk-tolerable');
chk[4] = document.querySelector('#chk-other-desc');
// events
chk[5] = document.querySelector('#chk-birthday');
chk[6] = document.querySelector('#chk-anniversary');
chk[7] = document.querySelector('#chk-christmas');
chk[8] = document.querySelector('#chk-recovery');
chk[9] = document.querySelector('#chk-other-event');
// recipients
chk[10] = document.querySelector('#chk-parent');
chk[11] = document.querySelector('#chk-child');
chk[12] = document.querySelector('#chk-grandparent');
chk[13] = document.querySelector('#chk-grandchild');
chk[14] = document.querySelector('#chk-friend');
chk[15] = document.querySelector('#chk-lover');
chk[16] = document.querySelector('#chk-spouse');
chk[17] = document.querySelector('#chk-other-person');


const chk_other_desc = document.querySelector('#chk-other-desc');
const chk_other_event = document.querySelector('#chk-other-event');
const chk_other_person = document.querySelector('#chk-other-person');
function defoc() {
  chk_other_desc.checked = true;
}
function evfoc() {
  chk_other_event.checked = true;
}
function opfoc() {
  chk_other_person.checked = true;
}
function save() {
    const od = document.querySelector('#ode');
    const oe = document.querySelector('#oev');
    const op = document.querySelector('#ope');
    const desc = document.querySelector(`input[name=desc]:checked`);
    const event = document.querySelector(`input[name=event]:checked`);
    const person = document.querySelector(`input[name=person]:checked`);
    let fragment = `desc=${desc.id}&event=${event.id}&person=${person.id}`;
    if (desc.id=='chk-other-desc') {
        fragment += `&desc-text=${encodeURIComponent(od.value).replace(/'/g, "%27")}`;
    }
    if (event.id=='chk-other-event') {
        fragment += `&event-text=${encodeURIComponent(oe.value).replace(/'/g, "%27")}`;
    }
    if (person.id=='chk-other-person') {
        fragment += `&person-text=${encodeURIComponent(op.value).replace(/'/g, "%27")}`;
    }
    return fragment;

}

window.onload = ()=>{
    if (window.location.hash) {
        const od = document.querySelector('#ode');
        const oe = document.querySelector('#oev');
        const op = document.querySelector('#ope');
        const str = window.location.hash.substr(1)
        const fs = new URLSearchParams(str);
        for (const [key, value] of fs) {
            switch (key) {
                case 'desc-text':
                    od.value = value;
                break;
                case 'event-text':
                    oe.value = value;
                break;
                case 'person-text':
                    op.value = value;
                break;
                default:
                    document.querySelector(`#${value}`).checked = true;
            }
        }
    }
}

function savecard() {
    let port_str = "";
    if (window.location.port) {
        port_str = `:${window.location.port}`;
    }
  document.querySelector('#hash').innerHTML = `Result: <a href='${window.location.protocol}//${window.location.hostname}${port_str}${window.location.pathname}#${save()}'> Link </a>`
}