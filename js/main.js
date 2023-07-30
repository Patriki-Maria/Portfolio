var intorContainer = document.querySelector('.intro-container');
var circleImg = document.querySelector('.circle-img');
var circleHeight = circleImg.offsetHeight;
intorContainer.style.height = `${circleHeight}px`

function updateIntroSize() {
  circleHeight = circleImg.clientHeight;
  intorContainer.style.height = `${circleHeight}px`
}

window.addEventListener('resize', updateIntroSize);

var hiddenAbout = document.querySelector('.toggle-hidden');
var toggle = document.getElementById('more');

toggle.addEventListener('change', function() {
  if (this.checked) {
    hiddenAbout.style.display = 'block';
  } else {
    hiddenAbout.style.display = 'none';
  }
});
