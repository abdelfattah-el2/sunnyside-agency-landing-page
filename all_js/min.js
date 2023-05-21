// make a active class move

let navlinks = document.querySelectorAll(".navbar li a");
let navlinkA = document.querySelectorAll(".navbar li ");

navlinks.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    ele.parentElement.parentElement
      .querySelectorAll(".active")
      .forEach((el) => {
        el.classList.remove("active");
      });

    ele.classList.add("active");
  });
});

// make popup
let boxC = document.querySelectorAll(".testimonl .box");

boxC.forEach((e) => {
  e.addEventListener("click", (box) => {
    // create Ovrelay
    let ovrelay = document.createElement("div");
    ovrelay.className = "over";
    e.classList.add("ad-to");

    let btnX = document.createElement("span");
    btnX.textContent = "X";
    btnX.classList.add("btn-X");

    if (document.body.querySelector(".over") == null) {
      let clone = e.cloneNode(true);
      clone.appendChild(btnX);
      ovrelay.appendChild(clone);
      document.body.appendChild(ovrelay);
    }
    btnX.addEventListener("click", (r) => {
      ovrelay.remove();
      e.classList.remove("ad-to");
    });
  });
});
