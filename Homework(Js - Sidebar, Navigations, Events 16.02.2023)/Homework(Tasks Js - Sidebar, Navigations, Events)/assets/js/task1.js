"use strict"



let input1 = document.querySelector(".inputs input:nth-child(1)");

let input2 = document.querySelector(" .inputs input:nth-child(2)");

let sum = document.querySelector(".buttons button:nth-child(1)");

let minus = document.querySelector(".buttons button:nth-child(2)");

let multply = document.querySelector(".buttons button:nth-child(3)");

let divide = document.querySelector(".buttons button:nth-child(4)");

let result = document.querySelector(".output input")

sum.addEventListener("click", function () {
        input1 = Number(input1.value)
        input2 = Number(input2.value)
        result.value = input1 + input2;

})

minus.addEventListener("click", function () {

        result.value = input1.value - input2.value;

})

multply.addEventListener("click", function () {

        result.value = input1.value * input2.value;
})

divide.addEventListener("click", function () {

        if (input2.value == 0) {
                alert("0-a bölmək olmur")
                input1.value = "";
                input2.value = "";
                return;
        }

        result.value = input1.value / input2.value;

})