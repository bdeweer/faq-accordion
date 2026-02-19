const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const img = button.querySelector("img");
    const isOpen = button.closest("li").classList.toggle("open");

    img.src = isOpen ? button.dataset.iconMinus : button.dataset.iconPlus;
  });
});
