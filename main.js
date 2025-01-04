console.log(`START CALCULATOR 0.1 BY F14MY
    TELEGRAM: @username7052
    `)

var calc = "";

function click1() {
    calc = calc + "1"
    document.getElementById('text').textContent = calc
    console.log("CLICKED BUTTON '1' RESULT: " + calc)
}
function click2() {
    calc = calc + "2"
    document.getElementById('text').textContent = calc
    console.log("CLICKED BUTTON '2' RESULT: " + calc)
}
function click3() {
    calc = calc + "3"
    document.getElementById('text').textContent = calc
    console.log("CLICKED BUTTON '3' RESULT: " + calc)
}
function click4() {
    calc = calc + "4"
    document.getElementById('text').textContent = calc
    console.log("CLICKED BUTTON '4' RESULT: " + calc)
}
function click5() {
    calc = calc + "5"
    document.getElementById('text').textContent = calc
    console.log("CLICKED BUTTON '5' RESULT: " + calc)
}
function click6() {
    calc = calc + "6"
    document.getElementById('text').textContent = calc
    console.log("CLICKED BUTTON '6' RESULT: " + calc)
}
function click7() {
    calc = calc + "7"
    document.getElementById('text').textContent = calc
    console.log("CLICKED BUTTON '7' RESULT: " + calc)
}
function click8() {
    calc = calc + "8"
    document.getElementById('text').textContent = calc
    console.log("CLICKED BUTTON '8' RESULT: " + calc)
}
function click9() {
    calc = calc + "9"
    document.getElementById('text').textContent = calc
    console.log("CLICKED BUTTON '9' RESULT: " + calc)
}
function click0() {
    calc = calc + "0"
    document.getElementById('text').textContent = calc
    console.log("CLICKED BUTTON '0' RESULT: " + calc)
}


function clickPlus() {
    calc = calc + " + "
    document.getElementById('text').textContent = calc
    console.log("CLICKED BUTTON '+' RESULT: " + calc)
}
function clickMinus() {
    calc = calc + " - "
    document.getElementById('text').textContent = calc
    console.log("CLICKED BUTTON '-' RESULT: " + calc)
}
function clickX() {
    calc = calc + " x "
    document.getElementById('text').textContent = calc
    console.log("CLICKED BUTTON 'x' RESULT: " + calc)
}
function clickDod() {
    calc = calc + "."
    document.getElementById('text').textContent = calc
    console.log("CLICKED BUTTON '1' RESULT: " + calc)
}
function click1() {
    calc = calc + "1"
    document.getElementById('text').textContent = calc
    console.log("CLICKED BUTTON '1' RESULT: " + calc)
}



function confirm() {
    eval(calc)
    document.getElementById('text').textContent = calc
    console.log("CLICKED BUTTON '=' RESULT: " + calc)
}