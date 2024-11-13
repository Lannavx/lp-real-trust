import createDots from './dots-create.js'

export default function sliderProjects() {
  const projects = document.querySelectorAll('.project-box');
  const nextBtn = document.querySelector('#next-btn');
  const prevBtn = document.querySelector('#previous-btn');
  const projectsDotsContainer = document.querySelector('#dotsProjects');

  let currentProjectIndex = 0;
  let slideInterval;

  function updateActiveProject() {
    projects.forEach(project => project.classList.remove('active'));
    projects[currentProjectIndex].classList.add('active');

    const dots = document.querySelectorAll('#dotsProjects .dot');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentProjectIndex].classList.add('active');
  }

  function nextProject() {
    if (currentProjectIndex === projects.length - 1) {
      currentProjectIndex = 0;
    } else {
      currentProjectIndex++;
    }
    updateActiveProject();
  }

  function prevProject() {
    if (currentProjectIndex === 0) {
      currentProjectIndex = projects.length - 1;
    } else {
      currentProjectIndex--;
    }
    updateActiveProject();
  }

  function startProjectSlide() {
    slideInterval = setInterval(nextProject, 4000);
  }

  function resetProjectSlide() {
    clearInterval(slideInterval);
    startProjectSlide();
  }

  function setProjectIndex(dotIndex) {
    currentProjectIndex = dotIndex;
  }

  createDots(
    projects, updateActiveProject, 
    resetProjectSlide, projectsDotsContainer, 
    setProjectIndex
  );
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
}

