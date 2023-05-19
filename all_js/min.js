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
