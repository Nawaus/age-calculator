document.querySelector("button").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelectorAll("span").forEach((e) => {
    e.textContent = "00";
  });
});
