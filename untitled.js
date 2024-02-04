let switchCon1 = document.getElementById("switchContainer1");
let switchBtn1 = document.getElementById("switchButton1");
let switchCon2 = document.getElementById("switchContainer2");
let switchBtn2 = document.getElementById("switchButton2");
let switchCon3 = document.getElementById("switchContainer3");
let switchBtn3 = document.getElementById("switchButton3");

function onOff1() {
  if (switchBtn1.classList.contains("on")) {
    switchBtn1.classList.remove("on");
    switchCon1.classList.remove("on");
  } else {
    switchBtn1.classList.add("on");
    switchCon1.classList.add("on");
  }
}
function onOff2() {
  if (switchBtn2.classList.contains("on")) {
    switchBtn2.classList.remove("on");
    switchCon2.classList.remove("on");
  } else {
    switchBtn2.classList.add("on");
    switchCon2.classList.add("on");
  }
}
function onOff3() {
  if (switchBtn3.classList.contains("on")) {
    switchBtn3.classList.remove("on");
    switchCon3.classList.remove("on");
  } else {
    switchBtn3.classList.add("on");
    switchCon3.classList.add("on");
  }
}

switchBtn1.addEventListener("click", function() {
  onOff1();
})
switchBtn2.addEventListener("click", function() {
  onOff2();
})
switchBtn3.addEventListener("click", function() {
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