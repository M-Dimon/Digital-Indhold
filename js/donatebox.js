//Range slider functionality
const donateAmounts = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

donateAmounts.forEach(function(amount) {
    const sliderPoint = document.createElement('div');
    sliderPoint.classList.add('slider-point');
    sliderPoint.setAttribute('data-value', amount);
    document.getElementById('range-slider').appendChild(sliderPoint);
});

const rangeSlider = document.getElementById('range-slider');

// const sliderMarker = document.createElement('div');
// sliderMarker.classList.add('slider-marker');
// document.getElementById('range-slider').appendChild(sliderMarker);

// let isDragging = false;
// let dragOffset = [0, 0];

// sliderMarker.addEventListener('mousedown', function(event) {
//     isDragging = true;
//     dragOffset = [
//         sliderMarker.offsetLeft - event.clientX,
//         sliderMarker.offsetTop - event.clientY
//     ];
// });

// sliderMarker.addEventListener('mouseup', function() {
//     isDragging = false;
// });

// sliderMarker.addEventListener('mousemove', function(event) {
//     event.preventDefault();

//     if (isDragging) {
//         const newX = event.clientX + dragOffset[0];
//         const rangeSliderRect = rangeSlider.getBoundingClientRect();
//         const sliderMarkerRect = sliderMarker.getBoundingClientRect();

//         if (newX >= 0 && newX + sliderMarkerRect.width <= rangeSliderRect.width) {
//             if (rangeSliderRect.width / newX)
//             sliderMarker.style.left = newX + 'px';
//         }
//     }
// });

console.log(rangeSlider.getBoundingClientRect())

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
