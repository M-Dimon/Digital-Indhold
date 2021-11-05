const videoOverlay = document.getElementById("video-overlay");

document.getElementById("lille-video").addEventListener("click", function(){
    videoOverlay.style.display = "block";
});

videoOverlay.addEventListener("click", function(){
    if(videoOverlay.style.display == "block") {
        videoOverlay.style.display = "none";
    } else {
        videoOverlay.style.display = "block";
    }
});

// array loop

const array =["a","b","c",]

let i = 1;
let length = array.length;
let text = "";
for (; i < length; i++) {
    text += array[i] + "<br>";
}

console.log(array)