//Toggle functionality

let toggleValue = 0;
let toggleButton = 0;

const toggleOne = document.getElementById("toggle-one");
const toggleTwo = document.getElementById("toggle-two");

const buttonOne = document.getElementById("one-pay");
const buttonTwo = document.getElementById("yearly-pay");

buttonOne.style.display = "flex";
buttonTwo.style.display = "none";

toggleOne.addEventListener("click", function() {
    toggleOne.classList.add("active");
    toggleTwo.classList.remove("active");
    toggleValue = 1;

    buttonOne.style.display = "flex";
    buttonTwo.style.display = "none";
    toggleButton = 1;

    console.log(toggleButton);
});

toggleTwo.addEventListener("click", function() {
    toggleTwo.classList.add("active");
    toggleOne.classList.remove("active");
    toggleValue = 2;

    buttonOne.style.display = "none";
    buttonTwo.style.display = "flex";
    toggleButton = 2;

    console.log(toggleButton);
});
