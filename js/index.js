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

let oldScroll = window.scrollY;
let currentStep = 0;
let canScroll = true;
const steps = ['about', 'carousel', 'footer'];
const projects = ['project1', 'project2'];
let carouselStep = 0;
const body = document.querySelector('body');
const carousel = document.querySelector('#carousel');
let stepsPositions = getStepsPositions();
let projectsPositions = getProjectsPositions();
console.log(projectsPositions);
body.classList.add('overflow-y-hidden');

window.onresize = () => {
  stepsPositions = getStepsPositions();
  projectsPositions = getProjectsPositions();
}

window.onwheel = (e) => {
  if (!canScroll) return;
  body.classList.remove('overflow-y-hidden');

  const yScroll = e.deltaY;
  if (yScroll > 0) {
    goDown();
  } else {
    goUp();
  }

  body.classList.add('overflow-y-hidden');
}

function goDown() {
  if (currentStep === steps.length - 1) return;

  if (currentStep === 1 && carouselStep !== projects.length - 1) {
    carousel.scrollTo(projectsPositions[carouselStep + 1], stepsPositions[1] - 80);
    carouselStep ++;
  } else {
    window.scrollTo(0, stepsPositions[currentStep + 1] - 80);
    currentStep ++;
  }
  scrollCooldown();
}

function goUp() {
  if (currentStep === 0) return;

  if (currentStep === 1 && carouselStep !== 0) {
    carousel.scrollTo(projectsPositions[carouselStep - 1], stepsPositions[1] - 80);
    carouselStep --;
  } else {
    window.scrollTo(0, stepsPositions[currentStep - 1] - 80);
    currentStep --;
  }

  scrollCooldown();
}

function scrollCooldown () {
  canScroll = false;
  setTimeout(() => {
    canScroll = true;
  }, 500)
}

function getStepsPositions () {
  return steps.map((step) => {
    const element = document.getElementById(step);
    return element.offsetTop;
  });
}

function getProjectsPositions () {
  return projects.map((project) => {
    const element = document.getElementById(project);
    return element.offsetLeft;
  });
}
