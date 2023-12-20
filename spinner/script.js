document.addEventListener("mousemove", (e) => {
  const spinner = document.getElementById("spinner");
  spinner.style.left = `${e.clientX}px`;
  spinner.style.top = `${e.clientY}px`;
  spinner.style.position = "fixed";
});
