//Define variables to control input values.
var inputValue;


// Event Listener for 'Type Something' Input Element
inputValue = document.querySelector('.major-navigation__text-input');

inputValue.addEventListener('input', function() {
  var customTextByUser = inputValue.value;

  var sampleTexts = document.getElementsByClassName('card__sample-text');
  console.log(sampleTexts);

  for(var sampleText of sampleTexts) {
    sampleText.textContent = customTextByUser;
  }
});
