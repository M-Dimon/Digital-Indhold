const donateAmounts = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

console.log(donateAmounts);


//Toggle functionality
const toggleOne = document.getElementById("toggle-one");
const toggleTwo = document.getElementById("toggle-two");
let toggleValue = 0;

toggleOne.addEventListener("click", function() {
    toggleOne.classList.add("active");
    toggleTwo.classList.remove("active");
    toggleValue = 1;
});

toggleTwo.addEventListener("click", function() {
    toggleTwo.classList.add("active");
    toggleOne.classList.remove("active");
    toggleValue = 2;
});