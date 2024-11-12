
const projects = document.querySelectorAll('.project-box');
const nextBtn = document.querySelector('#next-btn');
const prevBtn = document.querySelector('#previous-btn');
const dotsContainer = document.querySelector('#dotsProjects');

let currentIndexProject = 0;
let slideInterval;

function createDots() {
  projects.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === currentIndexProject) {
      dot.classList.add('active');
    }
    dot.addEventListener('click', () => {
      currentIndexProject = index;
      updateActiveProject();
      resetProjectSlide();
    });
    dotsContainer.appendChild(dot);
  });
}

function updateActiveProject() {
  projects.forEach(project => project.classList.remove('active'));
  projects[currentIndexProject].classList.add('active');

  const dots = document.querySelectorAll('.dot');
  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentIndexProject].classList.add('active');
}

function nextProject() {
  if (currentIndexProject === projects.length - 1) {
    currentIndexProject = 0;
  } else {
    currentIndexProject++;
  }
  updateActiveProject();
}

function prevProject() {
  if (currentIndexProject === 0) {
    currentIndexProject = projects.length - 1;
  } else {
    currentIndexProject--;
  }
  updateActiveProject();
}

function startProjectSlide() {
  slideInterval = setInterval(nextProject, 3000);
}

function resetProjectSlide() {
  clearInterval(slideInterval);
  startProjectSlide();
}

createDots();
updateActiveProject();
startProjectSlide();

// Desktop
nextBtn.addEventListener('click', () => {
  nextProject();
  resetProjectSlide();
});

prevBtn.addEventListener('click', () => {
  prevProject();
  resetProjectSlide();
});


