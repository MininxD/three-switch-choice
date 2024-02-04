var textLength = 20;


var inputTop = document.getElementById("top")
var inputMid = document.getElementById("mid")
var inputBot = document.getElementById("bot")

var outputTop = document.getElementById("pil-1")
var outputMid = document.getElementById("pil-2")
var outputBot = document.getElementById("pil-3")


function autoTextTop() {
if (inputTop.value.length >= textLength) {
  outputTop.style.fontSize = "25px"
  } else {
  outputTop.style.fontSize = "35px"
  }
if (inputTop.value == "") {
  outputTop.classList.add("semi");
  outputTop.innerHTML = "${atas}"
  }
}
function autoTextMid() {
if (inputMid.value.length >= textLength) {
  outputMid.style.fontSize = "25px"
  } else {
  outputMid.style.fontSize = "35px"
  }
if (inputMid.value == "") {
  outputMid.classList.add("semi");
  outputMid.innerHTML = "${tengah}"
  }
}
function autoTextBot() {
if (inputBot.value.length >= textLength) {
  outputBot.style.fontSize = "25px"
  } else {
  outputBot.style.fontSize = "35px"
  }
if (inputBot.value == "") {
  outputBot.classList.add("semi");
  outputBot.innerHTML = "${bawah}"
  }
}


inputTop.addEventListener("input", function() {
  outputTop.innerHTML = inputTop.value;
  outputTop.classList.remove("semi");
  autoTextTop();
})
inputMid.addEventListener("input", function() {
  outputMid.innerHTML = inputMid.value;
  outputMid.classList.remove("semi");
  autoTextMid();
})
inputBot.addEventListener("input", function() {
  outputBot.innerHTML = inputBot.value;
  outputBot.classList.remove("semi");
  autoTextBot();
})