
let expression = ""

function addSignToExpress(sign) {
    expression += sign
}

function updateDisplay() {
    document.getElementById("d").innerHTML = expression 
}

function Calculate() {
    try {
        let result = eval(expression)
        document.getElementById("d").innerHTML = result
        expression = result
    }
    catch(err) {
        document.getElementById("d").innerHTML = "<b>Invalid Syntax!</b>"
        setTimeout(() => { expression = ""
            document.getElementById("d").innerHTML = ""
    }, 3000)    
    }
}

let buttons_array = document.querySelectorAll(".numbers")

buttons_array.forEach(button => {
    if (button.innerHTML == "=") {
        button.addEventListener("click", Calculate)
    }
    else {
        button.addEventListener("click", () => {
            addSignToExpress(button.innerHTML)
            updateDisplay()
        })
    }
})

