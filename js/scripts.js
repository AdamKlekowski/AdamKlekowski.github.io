let order_number = 1;


function addNewRaw() {
    order_number ++;

    let record_raw = document.createElement("div");
    record_raw.className = 'record'

    let order_mum = document.createElement('div')
    order_mum.className = 'order_num'
    order_mum.innerHTML += order_number + '.';
    record_raw.appendChild(order_mum)

    let input_ele = document.createElement("input");
    input_ele.className = 'hours_input'
    input_ele.type = 'number'
    record_raw.appendChild(input_ele)

    let hours_text = document.createElement("div");
    hours_text.className = 'hours_text'
    hours_text.innerHTML += 'h'
    record_raw.appendChild(hours_text)

    let minutes_input = document.createElement("input");
    minutes_input.className = 'minutes_input'
    minutes_input.type = 'number'
    record_raw.appendChild(minutes_input)

    let minutes_text = document.createElement("div");
    minutes_text.className = 'minutes_text'
    minutes_text.innerHTML += 'min'
    record_raw.appendChild(minutes_text)

    let parent = document.getElementById("records");
    parent.appendChild(record_raw);

    const resultText = document.getElementById("result");
    resultText.innerText = ""
}

function sumUpHours() {
    let hours = 0;
    let minutes = 0;
    const inputs1 = document.getElementsByClassName("hours_input");
    for(let x = 0; x < inputs1.length; x++ ) {
        hours += parseInt(inputs1[x].value ? inputs1[x].value : 0);
    }

    const inputs2 = document.getElementsByClassName("minutes_input");
    for(let x = 0; x < inputs2.length; x++ ) {
        minutes += parseInt(inputs2[x].value ? inputs2[x].value : 0);
    }
    hours += Math.floor(minutes / 60);
    minutes = minutes % 60;
    alert('Przepracowałeś/aś: ' + hours + ' godzin i ' + minutes + ' minut.')
}