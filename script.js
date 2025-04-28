// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Dark mode toggle
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  
  // Change button icon
  if (body.classList.contains('dark-mode')) {
    themeToggle.textContent = '☀️';
  } else {
    themeToggle.textContent = '🌙';
  }
});


// Scroll reveal effect
const skillCards = document.querySelectorAll('.skill-card');

window.addEventListener('scroll', () => {
  skillCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (cardTop < windowHeight - 100) {
      card.classList.add('active');
    }
  });
});

// Add CSS for .active class dynamically
const style = document.createElement('style');
style.innerHTML = `
  .skill-card.active {
    transform: translateY(0) scale(1.05);
    opacity: 1;
    transition: all 0.6s ease;
  }
  .skill-card {
    opacity: 0;
    transform: translateY(50px);
  }
`;
document.head.appendChild(style);

// <!-- Form Submit Handling -->

document.getElementById('contactForm').addEventListener('submit', async function(e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  try {
    const response = await fetch('https://formspree.io/f/xnqegqqv', {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      Swal.fire({
        title: 'Message Sent!',
        text: 'Thanks for contacting me. I will get back to you soon!',
        icon: 'success',
        confirmButtonColor: '#000',
      });
      form.reset();
    } else {
      Swal.fire({
        title: 'Oops!',
        text: 'Something went wrong. Please try again later.',
        icon: 'error',
        confirmButtonColor: '#000',
      });
    }
  } catch (error) {
    Swal.fire({
      title: 'Oops!',
      text: 'Something went wrong. Please try again later.',
      icon: 'error',
      confirmButtonColor: '#000',
    });
  }
});





