const clickImgs = document.querySelectorAll(".clickImg");
let activeImg = document.querySelector(".clickImg.active");
clickImgs.forEach((img) => {
  img.addEventListener("click", () => {
    if (activeImg) {
      activeImg.classList.remove("active");
    }
    img.classList.add("active");
    activeImg = img;
    const navPos = img.dataset.navpos;
    window.location.href = `#${navPos}`
  });
});