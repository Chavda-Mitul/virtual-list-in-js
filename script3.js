const listData = Array.from({ length: 1000000 }, (_, i) => `Item ${i + 1}`);
const listHeight = 30;
const container = document.getElementById("list-container");

function render() {
  // main logic
  const start = Math.floor(container.scrollTop / listHeight);
  const end = start + listHeight;
  const visibleData = listData.slice(start, end);
  const constent = document.getElementById("list-content");
  constent.innerHTML = visibleData
    .map(
      (item, index) =>
        `<div class="item" style="top: ${
          (start + index) * listHeight
        }px;">${item}</div>`
    )
    .join("");
}
const listContent = document.getElementById("list-content");

render();
container.addEventListener("scroll", render);
