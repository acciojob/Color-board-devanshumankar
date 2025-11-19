//your JS code here. If required.
document.querySelectorAll(".square").forEach(square => {
  square.addEventListener("mouseover", () => {
    square.classList.add("hovered");
  });

  square.addEventListener("mouseout", () => {
    square.classList.remove("hovered");
  });
});
