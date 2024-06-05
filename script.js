let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.carousel-item');
  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }
  const offset = -currentSlide * 100;
  document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

document.addEventListener('DOMContentLoaded', () => {
  showSlide(currentSlide);

  setInterval(nextSlide, 5000);
});




const cardMoreButtons = document.querySelectorAll('.card-more');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.close');

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  window.onscroll = function () {
    window.scrollTo(scrollLeft, scrollTop);
  };
  document.body.style.overflow = 'hidden';
  modal.style.display = 'block';
}

cardMoreButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const modalId = `modal-about-card-${index + 1}`;
    openModal(modalId);
  });
});

closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    modal.style.transition = 'none';
    modal.style.filter = 'none';
    modal.style.display = 'none';
    window.onscroll = function () { };
    document.body.style.overflow = 'visible';
  });
});

window.addEventListener('click', (event) => {
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.transition = 'none';
      modal.style.filter = 'none';
      modal.style.display = 'none';
      window.onscroll = function () { };
      document.body.style.overflow = 'visible';
    }
  });
});



let lastScrollTop = 0;

window.addEventListener('scroll', function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const button = document.getElementById('scroll-to-top-button');

  if (scrollTop < lastScrollTop && scrollTop > 200) {
    button.classList.add('show');
  } else {
    button.classList.remove('show');
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

const button = document.getElementById('scroll-to-top-button');
button.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


