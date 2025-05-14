const firstTab = document.getElementById("tab1");
const secondTab = document.getElementById("tab2");
const thirdTab = document.getElementById("tab3");

const firstSlide = document.getElementById("bookmarkSlide");
const secondSlide = document.getElementById("searchingSlide");
const thirdSlide = document.getElementById("shareSlide");

const quest1Btn = document.getElementById("question1-btn");
const quest2Btn = document.getElementById("question2-btn");
const quest3Btn = document.getElementById("question3-btn");
const quest4Btn = document.getElementById("question4-btn");

const closeQuest1 = document.getElementById("close1");
const closeQuest2 = document.getElementById("close2");
const closeQuest3 = document.getElementById("close3");
const closeQuest4 = document.getElementById("close4");

const answerQuest1 = document.getElementById("answer1");
const answerQuest2 = document.getElementById("answer2");
const answerQuest3 = document.getElementById("answer3");
const answerQuest4 = document.getElementById("answer4");

const divQuest1 = document.getElementById("divquest1");
const divQuest2 = document.getElementById("divquest2");
const divQuest3 = document.getElementById("divquest3");
const divQuest4 = document.getElementById("divquest4");

const emailInput = document.getElementById("emailInput");
const Form = document.getElementById("form");
const errorIcon = document.getElementById("errorIcon");
const errorText = document.getElementById("errorText");

//For the mobile menu:
const closeNavBtn = document.getElementById("closeBtn");
const openNavBtn = document.getElementById("openBtn");
const mobNav = document.getElementById("mobileNav");

firstTab.addEventListener("click", (e) => {
  e.preventDefault();

  secondSlide.style.display = "none";
  thirdSlide.style.display = "none";
  firstSlide.style.display = "flex";

  firstTab.ariaCurrent = "true";
  secondTab.ariaCurrent = "false";
  thirdTab.ariaCurrent = "false";
});

secondTab.addEventListener("click", (e) => {
  e.preventDefault();

  firstSlide.style.display = "none";
  thirdSlide.style.display = "none";
  secondSlide.style.display = "flex";

  firstTab.ariaCurrent = "false";
  secondTab.ariaCurrent = "true";
  thirdTab.ariaCurrent = "false";
});

thirdTab.addEventListener("click", (e) => {
  e.preventDefault();

  firstSlide.style.display = "none";
  secondSlide.style.display = "none";
  thirdSlide.style.display = "flex";

  firstTab.ariaCurrent = "false";
  secondTab.ariaCurrent = "false";
  thirdTab.ariaCurrent = "true";
});

quest1Btn.addEventListener("click", (e) => {
  e.preventDefault();

  answerQuest1.style.display = "flex";
  quest1Btn.style.display = "none";
  closeQuest1.style.display = "flex";
});

closeQuest1.addEventListener("click", (e) => {
  e.preventDefault();

  answerQuest1.style.display = "none";
  quest1Btn.style.display = "flex";
  closeQuest1.style.display = "none";
});

quest2Btn.addEventListener("click", (e) => {
  e.preventDefault();

  answerQuest2.style.display = "flex";
  quest2Btn.style.display = "none";
  closeQuest2.style.display = "flex";
});

closeQuest2.addEventListener("click", (e) => {
  e.preventDefault();

  answerQuest2.style.display = "none";
  quest2Btn.style.display = "flex";
  closeQuest2.style.display = "none";
});

quest3Btn.addEventListener("click", (e) => {
  e.preventDefault();

  answerQuest3.style.display = "flex";
  quest3Btn.style.display = "none";
  closeQuest3.style.display = "flex";
});

closeQuest3.addEventListener("click", (e) => {
  e.preventDefault();

  answerQuest3.style.display = "none";
  quest3Btn.style.display = "flex";
  closeQuest3.style.display = "none";
});

quest4Btn.addEventListener("click", (e) => {
  e.preventDefault();

  answerQuest4.style.display = "flex";
  quest4Btn.style.display = "none";
  closeQuest4.style.display = "flex";
});

closeQuest4.addEventListener("click", (e) => {
  e.preventDefault();

  answerQuest4.style.display = "none";
  quest4Btn.style.display = "flex";
  closeQuest4.style.display = "none";
});

//For the email verification:

Form.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailValue = emailInput.value;

  if (emailValue == "" || !isEmailValid(emailValue)) {
    errorIcon.style.display = "block";
    emailInput.ariaInvalid = "true";
    errorText.style.display = "flex";

    setTimeout(function () {
      errorIcon.style.display = "none";
      emailInput.ariaInvalid = "false";
      errorText.style.display = "none";
    }, 3000);
  }
});

function isEmailValid(email) {
  const EmailValidation = new RegExp(
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
  );

  if (EmailValidation.test(email)) {
    return true;
  }

  return false;
}

//For the mobile navs:
openNavBtn.addEventListener("click", (e) => {
  e.preventDefault();

  mobNav.style.display = "flex";
});

closeNavBtn.addEventListener("click", (e) => {
  e.preventDefault();

  mobNav.style.display = "none";
});
