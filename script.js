const display = document.getElementById('display');
const buttons = document.getElementsByClassName('btn');



function displayContent(e) {
    if (e == '+/-') {
        display.value = '-'+display.value;
     } else {
        display.value += e;
    }
}


function clearContent() {
    display.value = '';
}



function perHundred() {
    display.value = display.value / 100;
}

function computeResult() {
        try {
        display.value = eval(display.value);
        } catch (e) {
            display.value = 'Error';
        }
    }

function cancelBack() {
    display.value = display.value.slice(0, -1);
    
}



