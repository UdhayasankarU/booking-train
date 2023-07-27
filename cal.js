button = document.querySelector("button")
input = document.querySelector("input")

function number(ber) {
    input.value += ber

}


function eqq() {


    try{
        a = input.value
        number(input.value)
        b = eval(a)
        input.value = b
    }

    catch (a) {
        alert("vwdc")
    }

}