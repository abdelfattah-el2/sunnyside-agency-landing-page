// make a active class move

let navlinks = document.querySelectorAll(".navbar li a");
let navlinkA = document.querySelectorAll(".navbar li ");

let navbar = document.querySelector(".navbar-collapse");
navlinks.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    ele.parentElement.parentElement
      .querySelectorAll(".active")
      .forEach((el) => {
        el.classList.remove("active");
      });

    ele.classList.add("active");
    navbar.classList.remove("show");
  });
});

// make a learn more generate a text

// the learn more btn
let btnLearnL = document.querySelector(".info .leftjs");
let btnLearnR = document.querySelector(".info .rightjs");

// the arrow
let r = document.querySelector(".left-img");
let l = document.querySelector(".right-img");

btnLearnL.onclick = function () {
  clickgenerate(btnLearnL);
  r.classList.add("r");
};
btnLearnR.onclick = function () {
  clickgenerate(btnLearnR);
  l.classList.add("l");
};

function clickgenerate(btn) {
  btn.style.cssText = " display: none;";

  btn.parentElement.children[1].textContent +=
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, cum blanditiis consequatur sapiente nobis modi tempora quis distinctio provident voluptates. Officia ipsam sequi exercitationem culpa obcaecati quis repudiandae dolore necessitatibus Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, cum blanditiis consequatur sapiente nobis modi tempora quis distinctio provident voluptates. Officia ipsam sequi exercitationem culpa obcaecati quis repudiandae dolore necessitatibus.";
  let less = document.createElement("button");
  less.textContent = "Less";
  less.className = "less";
  btn.parentElement.appendChild(less);

  less.addEventListener("click", (e) => {
    btn.parentElement.children[1].textContent =
      "We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.";
    btn.style.cssText = " display: inline-block;";
    less.parentElement.parentElement.parentElement.children[1].classList.remove(
      "r"
    );
    less.parentElement.parentElement.parentElement.children[0].classList.remove(
      "l"
    );
    less.remove();
  });
}

// make popup
let boxC = document.querySelectorAll(".testimonl .box");

boxC.forEach((e) => {
  e.addEventListener("click", (box) => {
    // create Ovrelay
    let ovrelay = document.createElement("div");
    ovrelay.className = "over";
    e.classList.add("ad-to");
    e.setAttribute("data-num", "one");

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
      e.setAttribute("data-num", "");
    });
  });
});

// the time in year in footer
let spanTime = document.querySelector(".time");
let timeNew = new Date();
spanTime.textContent = timeNew.getFullYear();
