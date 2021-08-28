let blueBtn = document.querySelector("#blueBtn");
let orangeBtn = document.querySelector("#orangeBtn");
let greenBtn = document.querySelector("#greenBtn");
let jumbotron = document.querySelector(".jumbotron");
let volunteer = document.querySelector("#volunteerBtn");
let donate = document.querySelector("#donateBtn");



blueBtn.addEventListener("click", () => jumbotron.style.backgroundColor="#588fbd");
blueBtn.addEventListener("click", () => donate.style.backgroundColor="#ffa500");
blueBtn.addEventListener("click", () => volunteer.style.backgroundColor="black");
blueBtn.addEventListener("click", () => volunteer.style.color="white");

orangeBtn.addEventListener("click", () => jumbotron.style.backgroundColor="#f0ad4e");
orangeBtn.addEventListener("click", () => donate.style.backgroundColor="#5751fd");
orangeBtn.addEventListener("click", () => volunteer.style.backgroundColor="#31b0d5");
orangeBtn.addEventListener("click", () => volunteer.style.color="white");

greenBtn.addEventListener("click", () => jumbotron.style.backgroundColor="#87ca8a");
greenBtn.addEventListener("click", () => donate.style.backgroundColor="black");
greenBtn.addEventListener("click", () => volunteer.style.backgroundColor="#8c9c08");


let submitBtn = document.getElementById("#submitBtn");
let formBox = document.querySelector(".form-control");

function submitForm(){
    if (formBox.value < 1) {
    submitBtn.addEventListener("click", () => formBox.style.backgroundColor="red");
    }
}
