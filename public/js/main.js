let tabBtnStyleColor = Array.from(
  document.querySelector(".colorStyle").children
);

let resultDiv = document.querySelector("#result_effect");
let tabBorder = ["solid", "skinny", "dotted"];
let tabBorderTop = [];

let functStyleColor = (nodeClass) => {
  resultDiv.classList.toggle(nodeClass.classList[0]);
};

let divStyleColor = document.querySelector(".colorStyle");
divStyleColor.addEventListener("click", (e) => {
  if (tabBtnStyleColor.includes(e.target)) {
    functStyleColor(e.target);
  }
});
