let line1 = document.querySelector("#line1");
let line2 = document.querySelector("#line2");
let line3 = document.querySelector("#line3");
let speedy = document.querySelector(".speedy-con");
let simple = document.querySelector(".simple-con");
let share = document.querySelector(".share-con");

let input = document.querySelector("#email");
let em = document.querySelector("em");
let sub = document.querySelector("#sub");
let err = document.querySelector("#errorIcon");

line1.addEventListener("click", (e) => {
    console.log(line1.getAttribute("class"));
    if (getComputedStyle(line1).borderBottomColor == "rgb(233, 227, 227)") {
        line1.setAttribute("class", "dark1 hover");
        line2.setAttribute("class", "line2 hover");
        line3.setAttribute("class", "line3 hover");

        simple.style.display = "flex";
        speedy.style.display = "none";
        share.style.display = "none";
    }
});
line2.addEventListener("click", (e) => {
    if (getComputedStyle(line2).borderBottomColor == "rgb(233, 227, 227)") {
        line1.setAttribute("class", "line1 hover");
        line2.setAttribute("class", "dark2 hover");
        line3.setAttribute("class", "line3 hover");
        simple.style.display = "none";
        speedy.style.display = "flex";
        share.style.display = "none";
    }
});
line3.addEventListener("click", (e) => {
    if (getComputedStyle(line3).borderBottomColor == "rgb(233, 227, 227)") {
        console.log("in");
        line1.setAttribute("class", "line1 hover");
        line2.setAttribute("class", "line2 hover");
        line3.setAttribute("class", "dark3 hover");
        simple.style.display = "none";
        speedy.style.display = "none";
        share.style.display = "flex";
    }
});
sub.addEventListener("click", (e) => {
    let regg = /.{1,}@[^,]{1,}/i;

    if (!regg.test(input.value)) {
        e.preventDefault();
        err.style.display = "block";
        em.style.display = "block";
        input.setAttribute("class", "errorinp");
    } else if (regg.test(input.value)) {
        em.style.display = "none";
        input.setAttribute("class", "neutral");
        err.style.display = "none";
    }
});