export let btn1 = document.getElementById("switchButton1");
export let bgBtn1 = document.getElementById("switchContainer1");

export let btn2 = document.getElementById("switchButton2");
export let bgBtn2 = document.getElementById("switchContainer2");

export let btn3 = document.getElementById("switchButton3");
export let bgBtn3 = document.getElementById("switchContainer3");


//turn off btn1 if btn2 clicked
export function closeA() {
  if (btn1.classList.contains("on") && btn3.classList.contains("on")) {
    btn1.classList.remove("on");
    bgBtn1.classList.remove("on");
  }
//turn off btn1 if btn3 Clicked
else if (btn1.classList.contains("on") && btn2.classList.contains("on")) {
    btn1.classList.remove("on");
    bgBtn1.classList.remove("on");
  }
}

//turn off btn2 if btn1 clicked
export function closeB() {
  if (btn2.classList.contains("on") && btn3.classList.contains("on")) {
    btn2.classList.remove("on");
    bgBtn2.classList.remove("on");
  }
//turn off btn2 if btn3 clicked
 else if (btn2.classList.contains("on") && btn1.classList.contains("on")) {
    btn2.classList.remove("on");
    bgBtn2.classList.remove("on");
  }
}

//turn off btn3 if btn1 clicked
export function closeC() {
  if (btn3.classList.contains("on") && btn2.classList.contains("on")) {
    btn3.classList.remove("on");
    bgBtn3.classList.remove("on");
  }
//turn off btn3 if btn2 clicked
else if (btn3.classList.contains("on") && btn1.classList.contains("on")) {
    btn3.classList.remove("on");
    bgBtn3.classList.remove("on");
  }
}
