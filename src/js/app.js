import FontList from "./models/FontList.js";
import {
  renderAllFontCards,
  renderRelativeLinkTags,
  removeAllNodes
} from "./views/fontView";
import { elements } from "./views/base";

//Declare state
let state = {};

//Search Input Handler
elements.searchInput.addEventListener("keyup", function(e) {
  removeAllNodes();
  if (e.target.value === "") {
    state.fontListInfos.forEach(fontInfo => {
      renderAllFontCards(fontInfo);
    });
  }

  let inputValue = e.target.value;
  // console.log(inputValue);
  console.log(inputValue);

  state.searchResult = state.fontListInfos.filter(function(el) {
    let numOfLetters = inputValue.length;
    // console.log(numOfLetters);

    return el.family.substring(0, numOfLetters) === inputValue;
  });

  // state.fontListInfos.forEach(el => {
  //   let numOfLetters = inputValue.length;

  //   console.log(el.family.substring(0, numOfLetters));
  //   console.log(`From user input: ${inputValue}`);
  // });
  state.searchResult.forEach(fontInfo => {
    renderAllFontCards(fontInfo);
  });
});

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

//Initialization
(async function() {
  state.list = new FontList();
  await state.list.getFontList();
  state.fontListInfos = state.list.fontArray;

  console.log(state.fontListInfos);

  state.fontListInfos.forEach(fontInfo => {
    renderRelativeLinkTags(fontInfo);
  });

  state.fontListInfos.forEach(fontInfo => {
    renderAllFontCards(fontInfo);
  });
})();

window.onscroll = function() {
  if (window.scrollY > 80) {
    elements.toTopButton.style.visibility = "visible";
  } else if (window.scrollY < 80) {
    elements.toTopButton.style.visibility = "hidden";
  }
};
