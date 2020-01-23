import FontList from "./models/FontList.js";

//Define variables to control input values.
var inputValue, resetButton, fontSize;

// Event Listener for 'Type Something' Input Element
inputValue = document.querySelector(".major-navigation__text-input");
resetButton = document.querySelector(".major-navigation__mode-reset");
fontSize = document.querySelector(".major-navigation__font-size");

inputValue.addEventListener("input", function() {
  var customTextByUser = inputValue.value;

  var sampleTexts = document.getElementsByClassName("card__sample-text");

  for (var sampleText of sampleTexts) {
    sampleText.textContent = customTextByUser;
  }
});

//Reset Button
resetButton.addEventListener("click", function() {
  inputValue.value = "";

  var sampleTexts = document.getElementsByClassName("card__sample-text");

  for (var sampleText of sampleTexts) {
    sampleText.textContent = "";
  }
});

// Font Size
fontSize.addEventListener("input", function() {
  var x = fontSize.value;

  switch (x) {
    case "20":
      // document.querySelector('.card__sample-text').style.fontSize = '200%';
      var sampleTexts = document.getElementsByClassName("card__sample-text");

      for (var sampleText of sampleTexts) {
        sampleText.style.fontSize = "200%";
      }
      break;

    case "24":
      // document.querySelector('.card__sample-text').style.fontSize = '240%';

      var sampleTexts = document.getElementsByClassName("card__sample-text");

      for (var sampleText of sampleTexts) {
        sampleText.style.fontSize = "240%";
      }
      break;

    case "28":
      // document.querySelector('.card__sample-text').style.fontSize = '280%';

      var sampleTexts = document.getElementsByClassName("card__sample-text");

      for (var sampleText of sampleTexts) {
        sampleText.style.fontSize = "280%";
      }
      break;

    case "32":
      // document.querySelector('.card__sample-text').style.fontSize = '320%';

      var sampleTexts = document.getElementsByClassName("card__sample-text");

      for (var sampleText of sampleTexts) {
        sampleText.style.fontSize = "320%";
      }
      break;
  }
});

const list = new FontList();
list.getFontList();
