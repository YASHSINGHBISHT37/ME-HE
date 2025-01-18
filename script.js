function cursor() {
  let cursor = document.querySelector(".cursor");

  window.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
      x: e.x,
      y: e.y,
      duration: 0.6,
      easr: "back.out",
    });
  });
}


function loader() {
  let loader = document.querySelector(".loader");
  setTimeout(function () {
    loader.style.top = "-100%";
  }, 2000);
}

cursor();
loader();
