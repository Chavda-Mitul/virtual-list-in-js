const data = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);

const renderArray = [];

var lastScrollTop = 0;

const element = document.getElementById("main__body");

const renderArrayHTML = document.getElementById("array__rendering");
let i = 0;
let j = 0;
const func = element.addEventListener(
  "scroll",
  function (event) {
    var st = element.pageYOffset || element.scrollTop;
    console.log(st);
    if (st > lastScrollTop) {
      console.log("down");
      i = i + 1;

      console.log(" i ", i);

      renderArray.push(arr[i]);
      renderArrayHTML.innerHTML = renderArray.join("<br>");
      console.log("array - > ", renderArray);
      if (i > 40) renderArray.shift();
      renderArrayHTML.style.height = event.target.scrollTop + "rem";
      j = i;
    } else if (st < lastScrollTop) {
      if (j > 0) {
        j = j - 1;
        renderArray.unshift(arr[j]);
        renderArray.pop();
      }
      i = j;
      console.log(" j ", j);
      console.log("upward");
      console.log("array - > ", renderArray);
      renderArrayHTML.innerHTML = renderArray.join("<br>");
      renderArrayHTML.style.height = event.target.scrollTop + "rem";
    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  },
  false
);
