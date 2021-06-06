//partie bg-color
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

//partie border
let divStyleBorder = document.querySelector(".styleBorder");
let tabStyleBorder = Array.from(divStyleBorder.children);
let functBorderStyle = (node) => {
  if (node == tabStyleBorder[0]) {
    node.addEventListener("input", () => {
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

//Partie border radius

let divStyleBorderRadius = document.querySelector(".styleBorderRadius");
let tabStyleBorderRadius = Array.from(divStyleBorderRadius.children);
let functBorderStyleRadius = (node) => {
  if (node == tabStyleBorderRadius[0]) {
    resultDiv.style.borderRadius = `${node.value}px`;
  } else if (node == tabStyleBorderRadius[1]) {
    resultDiv.style.borderRadius = `${node.value}px 0 0 0`;
  } else if (node == tabStyleBorderRadius[2]) {
    resultDiv.style.borderRadius = `0 ${node.value}px 0 0 `;
  } else if (node == tabStyleBorderRadius[3]) {
    resultDiv.style.borderRadius = `0 0 ${node.value}px 0 `;
  } else if (node == tabStyleBorderRadius[4]) {
    resultDiv.style.borderRadius = `0 0 0${node.value}px `;
  }
};

divStyleBorderRadius.addEventListener("click", (e) => {
  if (tabStyleBorderRadius.includes(e.target)) {
    functBorderStyleRadius(e.target);
  }
});
