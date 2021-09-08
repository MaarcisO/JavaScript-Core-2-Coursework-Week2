let blueBtn = document.querySelector("#blueBtn");
let orangeBtn = document.querySelector("#orangeBtn");
let greenBtn = document.querySelector("#greenBtn");
let jumbotron = document.querySelector(".jumbotron");
let volunteer = document.querySelector("#volunteerBtn");
let donate = document.querySelector("#donateBtn");
let submitBtn = document.querySelector("#submitBtn");



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



let formBox = document.getElementsByTagName("input");
let describeYourself = document.getElementById("exampleTextarea");

let result1 = "";
let result2 = "";

function submitForm(){
    for(i=0; i < formBox.length; i++){
        if (formBox[i].value.length == "") {
            result1 = false;
            formBox[i].style.background="red";
             }else {
                formBox[i].style.background="white"
                result1 = true;
            }
    }

    if (describeYourself.value.length == "") {
        describeYourself.style.backgroundColor="red";
        result2 = false;
         }else {
        describeYourself.style.background="white"
        result2 = true;
        }

    if(result1 == true && result2 == true){
        submitBtn.addEventListener("click", () => alert("Thank you for filling out the form"));
    }
    event.preventDefault();
}

submitForm();

