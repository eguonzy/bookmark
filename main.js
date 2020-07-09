let line1 = document.querySelector(".line1");
let line2 = document.querySelector(".line2");
let line3 = document.querySelector(".line3");
let speedy = document.querySelector(".speedy-con");
let simple = document.querySelector(".simple-con");
let share = document.querySelector(".share-con");
let span1 = document.querySelector("#span1");
let span2 = document.querySelector("#span2");
let span3 = document.querySelector("#span3");
let span4 = document.querySelector("#span4");
let drop1 = document.querySelector("#drop1");
let drop2 = document.querySelector("#drop2");
let drop3 = document.querySelector("#drop3");
let drop4 = document.querySelector("#drop4");
let input = document.querySelector("#email");
let em = document.querySelector("em");
let sub = document.querySelector("#sub");
let err = document.querySelector("#errorIcon");

line1.addEventListener("click", (e) => {
	if (getComputedStyle(line1).borderBottomColor == "rgb(233, 227, 227)") {
		console.log("in");
		line1.style.color = "#242a45";
		line2.style.color = "rgb(107, 107, 107)";
		line3.style.color = "rgb(107, 107, 107)";

		line1.style.borderBottomColor = "red";
		line2.style.borderBottomColor = "rgb(233, 227, 227)";
		line3.style.borderBottomColor = "rgb(233, 227, 227)";
		simple.style.display = "flex";
		speedy.style.display = "none";
		share.style.display = "none";
	}
});
line2.addEventListener("click", (e) => {
	if (getComputedStyle(line2).borderBottomColor == "rgb(233, 227, 227)") {
		line1.style.color = "rgb(107, 107, 107)";
		line2.style.color = "#242a45";
		line3.style.color = "rgb(107, 107, 107)";

		line2.style.borderBottomColor = "red";
		line1.style.borderBottomColor = "rgb(233, 227, 227)";
		line3.style.borderBottomColor = "rgb(233, 227, 227)";
		simple.style.display = "none";
		speedy.style.display = "flex";
		share.style.display = "none";
	}
});
line3.addEventListener("click", (e) => {
	if (getComputedStyle(line3).borderBottomColor == "rgb(233, 227, 227)") {
		console.log("in");
		line1.style.color = "rgb(107, 107, 107)";
		line2.style.color = "rgb(107, 107, 107)";
		line3.style.color = "#242a45";

		line3.style.borderBottomColor = "red";
		line2.style.borderBottomColor = "rgb(233, 227, 227)";
		line1.style.borderBottomColor = "rgb(233, 227, 227)";
		simple.style.display = "none";
		speedy.style.display = "none";
		share.style.display = "flex";
	}
});
span1.addEventListener("click", () => {
	if (span1.lastElementChild.getAttribute("src") == "images/icon-arrow.svg") {
		span1.lastElementChild.setAttribute("src", "images/arrow-up.png");
		drop1.style.display = "block";
		span2.lastElementChild.setAttribute("src", "images/icon-arrow.svg");
		span3.lastElementChild.setAttribute("src", "images/icon-arrow.svg");
		span4.lastElementChild.setAttribute("src", "images/icon-arrow.svg");
		drop2.style.display = "none";
		drop3.style.display = "none";
		drop4.style.display = "none";
	} else if (
		span1.lastElementChild.getAttribute("src") == "images/arrow-up.png"
	) {
		span1.lastElementChild.setAttribute("src", "images/icon-arrow.svg");
		drop1.style.display = "none";
	}
});
span2.addEventListener("click", () => {
	if (span2.lastElementChild.getAttribute("src") == "images/icon-arrow.svg") {
		span2.lastElementChild.setAttribute("src", "images/arrow-up.png");
		drop2.style.display = "block";
		span1.lastElementChild.setAttribute("src", "images/icon-arrow.svg");
		span3.lastElementChild.setAttribute("src", "images/icon-arrow.svg");
		span4.lastElementChild.setAttribute("src", "images/icon-arrow.svg");
		drop1.style.display = "none";
		drop3.style.display = "none";
		drop4.style.display = "none";
	} else if (
		span2.lastElementChild.getAttribute("src") == "images/arrow-up.png"
	) {
		span2.lastElementChild.setAttribute("src", "images/icon-arrow.svg");
		drop2.style.display = "none";
	}
});
span3.addEventListener("click", () => {
	if (span3.lastElementChild.getAttribute("src") == "images/icon-arrow.svg") {
		span3.lastElementChild.setAttribute("src", "images/arrow-up.png");
		drop3.style.display = "block";
		span2.lastElementChild.setAttribute("src", "images/icon-arrow.svg");
		span1.lastElementChild.setAttribute("src", "images/icon-arrow.svg");
		span4.lastElementChild.setAttribute("src", "images/icon-arrow.svg");
		drop2.style.display = "none";
		drop1.style.display = "none";
		drop4.style.display = "none";
	} else if (
		span3.lastElementChild.getAttribute("src") == "images/arrow-up.png"
	) {
		span3.lastElementChild.setAttribute("src", "images/icon-arrow.svg");
		drop3.style.display = "none";
	}
});
span4.addEventListener("click", () => {
	if (span4.lastElementChild.getAttribute("src") == "images/icon-arrow.svg") {
		span4.lastElementChild.setAttribute("src", "images/arrow-up.png");
		drop4.style.display = "block";
		span2.lastElementChild.setAttribute("src", "images/icon-arrow.svg");
		span3.lastElementChild.setAttribute("src", "images/icon-arrow.svg");
		span1.lastElementChild.setAttribute("src", "images/icon-arrow.svg");
		drop2.style.display = "none";
		drop3.style.display = "none";
		drop1.style.display = "none";
	} else if (
		span4.lastElementChild.getAttribute("src") == "images/arrow-up.png"
	) {
		span4.lastElementChild.setAttribute("src", "images/icon-arrow.svg");
		drop4.style.display = "none";
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
