function toggleDarkMode() {
  const checkbox = document.querySelector('#switch');

  if (checkbox.checked) {
    lightMode();
  } else {
    darkMode();
  }
}

function darkMode() {
  const lightPinkElements = document.querySelectorAll('.backround-light-pink');
  lightPinkElements.forEach((element) => {
    element.classList.add('background-dark-blue');
  });

  const backgroundlightGreyElements = document.querySelectorAll('.backround-light-grey');
  backgroundlightGreyElements.forEach((element) => {
    element.classList.add('backround-dark-grey');
  });

  const triangledarkModeElements = document.querySelectorAll('.border-color-light-pink');
  triangledarkModeElements.forEach((element) => {
    element.classList.add('border-color-dark-grey');
  });
}

function lightMode() {
  const dakrBlueElements = document.querySelectorAll('.background-dark-blue');
  dakrBlueElements.forEach((element) => {
    element.classList.remove('background-dark-blue');
  });

  const backgroundDarkGreyElements = document.querySelectorAll('.backround-dark-grey');
  backgroundDarkGreyElements.forEach((element) => {
    element.classList.remove('backround-dark-grey');
  });

  const triangledarkModeElements = document.querySelectorAll('.border-color-dark-grey');
  triangledarkModeElements.forEach((element) => {
    element.classList.remove('border-color-dark-grey');
  });
}

window.onload = () => {
  const checkbox = document.querySelector('#switch');

  if (checkbox.checked) {
    darkMode();
  } else {
    lightMode();
  }
}
