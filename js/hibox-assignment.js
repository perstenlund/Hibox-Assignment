var currentPatternText = document.getElementById('currentPatternText');
var animationSpace = document.getElementById('animationSpace');
var animateButton = document.getElementById('animateButton');

var oldPatternIndex = -1;
var newPatternIndex = -1;

var patterns = [
  "diagonal",
  "triangle",
  "rhombus",
  "pentagon"
];

function newPattern() {
  while (newPatternIndex == oldPatternIndex) {
    newPatternIndex = Math.floor(Math.random() * patterns.length);
  }
  currentPatternText.innerHTML = patterns[newPatternIndex];
  animationSpace.className = patterns[newPatternIndex];
  oldPatternIndex = newPatternIndex;
}
animateButton.onclick = newPattern;