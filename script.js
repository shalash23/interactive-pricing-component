const pageViews = document.getElementById("views");
const inputRange = document.querySelector("section input");
const amount = document.getElementById("amount");
const toggleButton = document.querySelector("i");

let globalDiscount = 0;
let totalPageViews = 100;

inputRange.addEventListener("input", (e) => {
  totalPageViews = e.target.value;
  gsap.to(pageViews, {
    innerText: totalPageViews,
    duration: 1,
    snap: {
      innerText: 1,
    },
  });

  calculate(totalPageViews, globalDiscount);
});

toggleButton.addEventListener("click", function () {
  const iconClass = this.classList;
  if (iconClass.contains("fa-toggle-on")) {
    iconClass.remove("fa-toggle-on");
    iconClass.add("fa-toggle-off");
    globalDiscount = 0;
  } else {
    iconClass.add("fa-toggle-on");
    iconClass.remove("fa-toggle-off");
    globalDiscount = 0.25;
  }
  calculate(totalPageViews, globalDiscount);
});

function calculate(views, discount) {
  const standardCost = discount
    ? (views / 100) * 16 * discount
    : (views / 100) * 16;

  //   amount.textContent = `$${standardCost}`;
  gsap.to(amount, {
    innerText: +standardCost.toFixed(2),
    duration: 1.5,
    ease: "power2",
    snap: {
      innerText: 0.09,
    },
  });
}
