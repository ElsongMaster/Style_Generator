let tabBtnStyleColor = Array.from(
  document.querySelector(".colorStyle").children
);

let resultDiv = document.querySelector("#result_effect");

let functStyleColor = (nodeClass) => {
  resultDiv.classList.toggle(nodeClass.classList[0]);
};

let divStyleColor = document.querySelector(".colorStyle");
divStyleColor.addEventListener("click", (e) => {
  if (tabBtnStyleColor.includes(e.target)) {
    functStyleColor(e.target);
  }
});

let divStyleBorder = document.querySelector(".styleBorder");
let tabStyleBorder = Array.from(divStyleBorder.children);
let functBorderStyle = (node) => {
  if (node == tabStyleBorder[0]) {
    console.log(resultDiv.style.backgroundColor);
    node.addEventListener("focusout", () => {
      resultDiv.style.backgroundColor = `${node.value}`;
    });
  } else if (node == tabStyleBorder[1]) {
    resultDiv.style.border = `${node.value}px solid black`;
  } else if (node == tabStyleBorder[2]) {
    resultDiv.style.borderTop = `${node.value}px solid black`;
  } else if (node == tabStyleBorder[3]) {
    resultDiv.setAttribute("style", `border-right:${node.value}px solid black`);
  } else if (node == tabStyleBorder[4]) {
    resultDiv.style.borderBottom = `${node.value}px solid black`;
  } else if (node == tabStyleBorder[5]) {
    resultDiv.style.borderLeft = `${node.value}px solid black`;
  }
};

divStyleBorder.addEventListener("click", (e) => {
  if (tabStyleBorder.includes(e.target)) {
    functBorderStyle(e.target);
  }
});
