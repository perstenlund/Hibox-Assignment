var section = document.getElementsByTagName('section')[0];
var button = document.getElementsByTagName('button')[0];

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
  section.className = patterns[newPatternIndex];
  oldPatternIndex = newPatternIndex;
}
button.onclick = newPattern;