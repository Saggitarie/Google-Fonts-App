import FontList from "./models/FontList.js";
import { renderFontCards } from "./views/fontView";
import { elements } from "./views/base";

//Declare state
let state = {};

//To Top Button Event Handler
elements.toTopButton.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Input text
elements.inputValue.addEventListener("input", function() {
  var customTextByUser = inputValue.value;

  var sampleTexts = document.getElementsByClassName("card__sample-text");

  for (var sampleText of sampleTexts) {
    sampleText.textContent = customTextByUser;
  }
});

//Reset Button
elements.resetButton.addEventListener("click", function() {
  inputValue.value = "";

  var sampleTexts = document.getElementsByClassName("card__sample-text");

  for (var sampleText of sampleTexts) {
    sampleText.textContent = "";
  }
});

// Font Size
elements.fontSize.addEventListener("input", function() {
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

(async function() {
  state.list = new FontList();
  await state.list.getFontList();
  state.fontListInfo = state.list.fontArray;

  // console.log(state.fontListInfo);

  state.fontListInfo.forEach(el => {
    renderFontCards(el);
  });
})();

// initialize();

window.onscroll = function() {
  if (window.scrollY > 80) {
    elements.toTopButton.style.visibility = "visible";
  } else if (window.scrollY < 80) {
    elements.toTopButton.style.visibility = "hidden";
  }
};
