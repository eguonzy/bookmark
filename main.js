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
let red = document.querySelector(".redd");
let red2 = document.querySelector(".redd2");
let red3 = document.querySelector(".redd3");

line1.addEventListener("click", (e) => {
    if (window.innerWidth <= 500) {
        console.log(window.innerWidth);
        red.style.display = "block";
        red2.style.display = "none";
        red3.style.display = "none";
        line1.style.color = "#242a45";
        line2.style.color = "rgb(147, 144, 144)";
        line3.style.color = "rgb(147, 144, 144)";
        simple.style.display = "flex";
        speedy.style.display = "none";
        share.style.display = "none";
    } else {
        line1.setAttribute("class", "dark1 hover");
        line2.setAttribute("class", "line2 hover");
        line3.setAttribute("class", "line3 hover");

        simple.style.display = "flex";
        speedy.style.display = "none";
        share.style.display = "none";
    }
});
line2.addEventListener("click", (e) => {
    if (window.innerWidth <= 500) {
        red.style.display = "none";
        red2.style.display = "block";
        red3.style.display = "none";
        line1.style.color = "rgb(147, 144, 144)";
        line2.style.color = "#242a45";
        line3.style.color = "rgb(147, 144, 144)";

        simple.style.display = "none";
        speedy.style.display = "flex";
        share.style.display = "none";
    } else {
        line1.setAttribute("class", "line1 hover");
        line2.setAttribute("class", "dark2 hover");
        line3.setAttribute("class", "line3 hover");

        simple.style.display = "none";
        speedy.style.display = "flex";
        share.style.display = "none";
    }
});
line3.addEventListener("click", (e) => {
    if (window.innerWidth <= 500) {
        red.style.display = "none";
        red2.style.display = "none";
        red3.style.display = "block";
        line1.style.color = "rgb(147, 144, 144)";
        line2.style.color = "rgb(147, 144, 144)";
        line3.style.color = "#242a45";

        simple.style.display = "none";
        speedy.style.display = "none";
        share.style.display = "flex";
    } else {
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
let hamburg = document.querySelector(".hamburg");
let logo = document.querySelector(".logo");
let ham = document.querySelector("#ham");
let close = document.querySelector("#close");
ham.onclick = () => {
    logo.setAttribute("class", "logo animated fadeOutRight");
    ham.setAttribute("class", "animated fadeOutRight");

    hamburg.setAttribute("class", "hamburg animated slideInRight");
    hamburg.style.display = "flex";
};
close.addEventListener("click", () => {
    logo.setAttribute("class", "logo animated fadeInRight");
    ham.setAttribute("class", "animated fadeInRight");

    hamburg.setAttribute("class", "hamburg animated fadeOutRight");
});
log.onclick = () => {
    window.location.reload();
};