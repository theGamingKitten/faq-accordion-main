var questions = document.getElementsByClassName("question");
var icons = document.getElementsByTagName('Object');

for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", () => {
        /* toggle visibility */
        let answer = questions[i].nextElementSibling;
        answer.classList.toggle("show");

        /* toggle icon */
        let iconData = icons[i + 1].getAttribute("data");
        if (iconData === "./assets/images/icon-plus.svg") {
            icons[i + 1].setAttribute("data", "./assets/images/icon-minus.svg");
        } else {
            icons[i + 1].setAttribute("data", "./assets/images/icon-plus.svg");
        }       
    });
  }