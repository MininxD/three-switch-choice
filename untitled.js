import {btn1,btn2,btn3,bgBtn1,bgBtn2,bgBtn3,
  closeA,closeB,closeC
} from './btnFunc.js';

function onOff1() {
  if (btn1.classList.contains("on")) {
    btn1.classList.remove("on");
    bgBtn1.classList.remove("on");
  } else {
    closeC();
    btn1.classList.add("on");
    bgBtn1.classList.add("on");
  }
}
function onOff2() {
  if (btn2.classList.contains("on")) {
    btn2.classList.remove("on");
    bgBtn2.classList.remove("on");
  } else {
    closeA();
    btn2.classList.add("on");
    bgBtn2.classList.add("on");
  }
}
function onOff3() {
  if (btn3.classList.contains("on")) {
    btn3.classList.remove("on");
    bgBtn3.classList.remove("on");
  } else {
    closeB();
    btn3.classList.add("on");
    bgBtn3.classList.add("on");
  }
}

btn1.addEventListener("click", function() {
  onOff1();
})
btn2.addEventListener("click", function() {
  onOff2();
})
btn3.addEventListener("click", function() {
  onOff3();
})




var okBtn = document.getElementById("okBtn");
var fieldDiv = document.getElementById("fieldDiv");
var field = document.getElementById("field");

okBtn.addEventListener("click", function() {
  fieldDiv.style.margin = "0";
  fieldDiv.style.opacity = "0";
  field.style.height = "0";
  setTimeout(function() {
    fieldDiv.style.display = "none";
  }, 350)
})