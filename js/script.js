const btnHamburger = document.querySelector("#btnHamburger");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");

btnHamburger.addEventListener("click", function () {
  console.log("click hamburger");

  if (header.classList.contains("open")) {
    //close hamburger menu
    header.classList.remove("open");
    overlay.classList.remove("fade-in");
    overlay.classList.add("fade-out");
  } else {
    // open hamburger menu
    header.classList.add("open");
    overlay.classList.remove("fade-out");
    overlay.classList.add("fade-in");
  }
});

/*significato della sintassi:
  se header.classlist. contiene la classe css "open" --> rimuovilo con il click.
  se invece non c'e' la classe "open" --> aggiungilo con il click
*/
