//Define variables to control input values.
var inputValue, resetButton;


// Event Listener for 'Type Something' Input Element
inputValue = document.querySelector('.major-navigation__text-input');
resetButton = document.querySelector('.major-navigation__reset');

inputValue.addEventListener('input', function() {
  var customTextByUser = inputValue.value;

  var sampleTexts = document.getElementsByClassName('card__sample-text');

  for(var sampleText of sampleTexts) {
    sampleText.textContent = customTextByUser;
  }
});

//Reset Button
resetButton.addEventListener('click', function() {
  inputValue.value = '';

  var sampleTexts = document.getElementsByClassName('card__sample-text');

  for(var sampleText of sampleTexts) {
    sampleText.textContent = '';
  }
});
