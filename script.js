const prevbtn = document.querySelector(".prev");
const nextbtn = document.querySelector(".Next");
const progress = document.querySelector(".progress");
const circles = document.querySelectorAll(".circle");
let currentactive = 1;

nextbtn.addEventListener("click", function (e) {
  currentactive++;
  if (currentactive > circles.length) {
    currentactive = circles.length;
  }
  update();
});

prevbtn.addEventListener("click", function (e) {
  currentactive--;
  if (currentactive < 1) {
    currentactive = 1;
  }
  update();
});

function update() {
  circles.forEach((circle, index) => {
    if (index < currentactive) {
      circle.classList.add("active");
    } else circle.classList.remove("active");
  });
  const actives = document.querySelectorAll(".active");
  console.log(`2/3`);
  console.log(`${((actives.length - 1) / (circles.length - 1)) * 100}%`);
  progress.style.width = `${
    ((actives.length - 1) / (circles.length - 1)) * 100
  }%`;
  console.log(currentactive);
  if (currentactive === 1) {
    prevbtn.disabled = true;
  } else if (currentactive === circles.length) {
    nextbtn.disabled = true;
  } else {
    prevbtn.disabled = false;
    nextbtn.disabled = false;
  }
}
