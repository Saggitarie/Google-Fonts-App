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
    state.searchResult = state.fontListInfos;
    state.searchResult.forEach(fontInfo => {
      renderAllFontCards(fontInfo);
    });
  }

  let inputValue = e.target.value;

  state.searchResult = state.fontListInfos.filter(function(el) {
    let numOfLetters = inputValue.length;

    return el.family.substring(0, numOfLetters) === inputValue;
  });

  state.searchResult.forEach(fontInfo => {
    renderAllFontCards(fontInfo);
  });
});

//To Top Button Event Handler
elements.toTopButton.addEventListener("click", function() {
  window.scrollTo({
    top: 0
  });
});

// Type Something Input
elements.inputValueById.addEventListener("keyup", function(e) {
  let customTextByUser = e.target.value;

  elements.inputValue.forEach(function(el) {
    el.innerText = customTextByUser;
  });
});

//Reset Button
elements.resetButton.addEventListener("click", function() {
  elements.textFormat.value = "sentence";
  removeAllNodes();

  state.searchResult = state.fontListInfos;

  state.searchResult.forEach(fontInfo => {
    console.log(fontInfo);
    renderAllFontCards(fontInfo, "sentence");
  });
});

//Sample Text Style
elements.textFormat.addEventListener("change", function(e) {
  var textFormat = e.target.value;

  removeAllNodes();

  if (textFormat === "custom") {
    elements.inputValueById.focus();
  }

  state.searchResult.forEach(fontInfo => {
    renderAllFontCards(fontInfo, textFormat);
  });
});

// Font Size
elements.fontSize.addEventListener("change", function(e) {
  var x = e.target.value;

  elements.inputValue.forEach(function(el) {
    el.style.fontSize = `${e.target.value * 10}%`;
  });
});

//Initialization
(async function() {
  state.list = new FontList();
  await state.list.getFontList();
  state.fontListInfos = state.list.fontArray;

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
