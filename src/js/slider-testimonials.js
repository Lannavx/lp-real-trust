const clients = document.querySelectorAll('.client-container');
const testimonialText = document.querySelector('.client-testimonial .text');
const testimonialDots = document.querySelector('#dotsTestimonials');

let currentTestimonialIndex = 0;
let testimonialIntervalId;

function createTestimonialDots() {
  clients.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('testimonial-dot');
    if (index === currentTestimonialIndex) {
      dot.classList.add('active');
    }
    dot.addEventListener('click', () => {
      currentTestimonialIndex = index;
      updateActiveClient();
      resetTestimonialSlide();
    });
    testimonialDots.appendChild(dot);
  });
}

function updateActiveClient() {
  clients.forEach(client => client.classList.remove('active'));
  const currentClient = clients[currentTestimonialIndex];
  currentClient.classList.add('active');
  testimonialText.textContent = currentClient.getAttribute('data-testimonial');

  const dots = document.querySelectorAll('.testimonial-dot');
  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentTestimonialIndex].classList.add('active');
}

function nextTestimonialClient() {
  if (currentTestimonialIndex === clients.length - 1) {
    currentTestimonialIndex = 0;
  } else {
    currentTestimonialIndex++;
  }
  updateActiveClient();
}

function startTestimonialSlide() {
  testimonialIntervalId = setInterval(nextTestimonialClient, 4000);
}

function resetTestimonialSlide() {
  clearInterval(testimonialIntervalId);
  startTestimonialSlide();
}

clients.forEach((client, index) => {
  client.addEventListener('click', () => {
    currentTestimonialIndex = index;
    updateActiveClient();
    resetTestimonialSlide();
  });
});

createTestimonialDots();
updateActiveClient();
startTestimonialSlide();


