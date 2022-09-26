function discord_copy() {
  var copyText = document.getElementById("hide_txt");
  copyText.select();
  document.execCommand("copy");

  var tooltip = document.getElementById("tooltip");
  tooltip.innerHTML = "Copied: " + copyText.value;
}

const Stages = [
  document.getElementById("0"),
  document.getElementById("1"),
  document.getElementById("2"),
  document.getElementById("3"),
];

var cur = 0;

function left_click() {
  console.log("left click");
  if (cur - 1 >= 0) {
    Stages[cur].classList.add("hide");
    Stages[cur].classList.remove("appearance");
    cur--
    Stages[cur].classList.add("appearance");
    Stages[cur].classList.remove("hide");
    Stages[cur].classList.remove("disappearance");
  }
}

function right_click() {
  console.log("right click");
  if (cur + 1 <= 3) {
    Stages[cur].classList.add("hide");
    Stages[cur].classList.remove("appearance");
    cur++
    Stages[cur].classList.add("appearance");
    Stages[cur].classList.remove("hide");
  }

}
