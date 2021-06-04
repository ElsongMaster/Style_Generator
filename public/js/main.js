let tabBtnStyleColor = Array.from(
  document.querySelector(".colorStyle").children
);

let resultDiv = document.querySelector("#result_effect");

let functStyleColor = (nodeClass) => {
  console.log(nodeClass.classList[0]);
  resultDiv.className = nodeClass.classList[0];
};
let divStyleColor = document.querySelector(".colorStyle");
divStyleColor.addEventListener("click", (e) => {
  console.log(e.target);
  if (tabBtnStyleColor.includes(e.target)) {
    functStyleColor(e.target);
  }
});
