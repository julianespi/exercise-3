const display = document.querySelector(".display")
const buttons = document.querySelectorAll("button")
let output = ""


const calc = (btnValue) => {
    if(btnValue == "="){
        output = eval(output)
    }
    else if(btnValue == "C"){
        output = ""
    }
    else{
        output += btnValue
    }
     display.value = output
}

buttons.forEach((button)=> {
button.addEventListener("click",(e) => calc(e.target.dataset.value));
});