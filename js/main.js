var numc1 = 6;
var color = generateRandomcolor(numc1);
var rgbclass = document.querySelector(".rgbclass");
var c1 = document.querySelectorAll(".c1");
var picker = colorPicker();
var correctColor = document.querySelector(".correctColor");
var header = document.querySelector("header");
var newColors = document.querySelector(".newColors");
var easy = document.querySelector(".easy");
var hard = document.querySelector(".hard");
rgbclass.innerHTML = picker;
//for easy game that has only 3 - color
easy.addEventListener("click", function () {
 
    easy.classList.add("selected");
    hard.classList.remove("selected");
    numc1 = 3;
    color = generateRandomcolor(numc1);
    picker = colorPicker();
    rgbclass.textContent = picker;
    for (var i = 0; i <= c1.length; i++) {
        if (color[i]) {
            c1[i].style.background = color[i];
        } else {
            c1[i].style.display = "none";
        }
    }
})
hard.addEventListener("click", function () {
    easy.classList.remove("selected");
    hard.classList.add("selected");
    numc1 = 6;
    color = generateRandomcolor(numc1);
    picker = colorPicker();
    rgbclass.textContent = picker;
    for (var i = 0; i <= c1.length; i++) {

        c1[i].style.background = color[i];
        c1[i].style.display = "block";
    }
}
);


newColors.addEventListener("click", function () {
    // generate new color
    color = generateRandomcolor(numc1);
    //pick new random color from the array
    picker = colorPicker();
    header.style.background = "rgb(125, 125, 223)";
    newColors.textContent = "New Colors";
    rgbclass.textContent = picker;
    correctColor.textContent = "";
    for (var i = 0; i <= c1.length; i++) {
        c1[i].style.background = color[i];
    }

})

for (var i = 0; i < c1.length; i++) {
    c1[i].style.background = color[i];
    //take the the color that is clicked 
    c1[i].addEventListener("click", function () {
        var check = this.style.background;
      //compairing the color
        if (check === picker) {
            colorChange(picker);
            correctColor.textContent = "Correct";
            newColors.textContent = "Play Again";
        } else {
            this.style.background = "#232323"
            correctColor.textContent = "Try Again";
        }
    });
};
function colorChange(colorr) {
    header.style.background = colorr;
    for (var j = 0; j < c1.length; j++) {
        c1[j].style.background = colorr;
    }
}

function colorPicker() {
    var random = Math.floor(Math.random() * color.length);
    return color[random];
}

function generateRandomcolor(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}
function randomColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
} 