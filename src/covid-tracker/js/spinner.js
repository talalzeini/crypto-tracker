let spinnerWrapper = document.querySelector(".spinner-wrapper");
function randomIntFromInterval(min, max) {
  let value = Math.floor(Math.random() * (max - min + 1) + min);
  return Math.round(value / 1000) * 1000;
}
document.body.style.overflow = "hidden";
function loadScreen() {
  setTimeout(() => {
    document
      .getElementsByClassName("main-content")[0]
      .classList.remove("hidden");
    spinnerWrapper.parentElement.removeChild(spinnerWrapper);
    document.body.style.overflow = "scroll";
  }, randomIntFromInterval(4000, 5000));
}
