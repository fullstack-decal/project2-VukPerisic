let total = 0;
let strbuffer = document.getElementById("result-screen").innerText;
let operator = "";

function calculations() {
    const intBuffer = parseInt(strbuffer);
    if (operator === "+") {
        total += intBuffer;
    } else if (operator === "-") {
        total -= intBuffer;
    } else if (operator === "x") {
        total *= intBuffer;
    } else if (operator === "÷") {
        total /= intBuffer;
    }
}

function makesNumber(value) {
    if (strbuffer === "0" || isNaN(parseInt(strbuffer))) {
        strbuffer = value;
    } else {
        strbuffer += value;
    }

}

function makesSymbol(symbol) {
    if (symbol === "C") {
        strbuffer = "0";
        total = 0;
    } else if (symbol === "←") {
        if (strbuffer.length === 1) {
            strbuffer = "0";
        } else {
            strbuffer = strbuffer.slice(0, -1);
        }
    } else if (symbol === "=") {
        calculations();
        strbuffer = total;
    } else {
        if (total === 0) {
            total = parseInt(strbuffer);
            strbuffer = symbol.toString();
        } else {
            total = parseInt(strbuffer);
        }
        operator = symbol;
        strbuffer = operator;
    }

}

function setListeners() {
    let buttons = document.getElementsByClassName("buttons");
    for (item of buttons) {
        item.addEventListener("click", event => { buttonClicked(event.target.innerText) });
    }
}

setListeners();

function buttonClicked(valueClicked) {
    if (isNaN(parseInt(valueClicked))) {
        makesSymbol(valueClicked);
    } else {
        makesNumber(valueClicked);
    }
    document.getElementById('result-screen').innerText = strbuffer;
}
