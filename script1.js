const data = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);

const element = document.getElementById("array__rendering");
const bodyOfTheContainer = document.getElementsByClassName("ct__body");

document.getElementById("main__body").addEventListener("scroll", (event) => {
  element.innerHTML = event.target.scrollTop;
  throttleFunction(() => {
    element.style.height = event.target.scrollTop + "rem";
    const heading = (document.getElementById("heading").innerHTML =
      event.target.scrollTop);
  }, 40);
});

var timerId;
var throttleFunction = function (func, delay) {
  if (timerId) {
    return;
  }

  timerId = setTimeout(function () {
    func();

    timerId = undefined;
  }, delay);
};
