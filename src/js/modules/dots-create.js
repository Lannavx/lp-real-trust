export default function createDots(
  content, 
  updateActiveFunction, 
  resetSlideFunction,
  dotsContainer, 
  setCurrentIndex
) {
  content.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dotsContainer.appendChild(dot);

    dot.addEventListener('click', () => {
      setCurrentIndex(index);
      updateActiveFunction();
      resetSlideFunction();
    });
  });
}
