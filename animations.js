const about = document.querySelector('.about_container');
const skill =  document.querySelector('.skill_container');
const project = document.querySelector('.projects_container');
const contact = document.querySelector('.contact_container');

about.addEventListener('mouseenter', () => {
    about.style.transform = 'scale(1.05)';
    about.style.transition = 'transform 0.8s cubic-bezier(0.15, 0.83, 0.66, 1)';
});

about.addEventListener('mouseleave', () => {
    about.style.transform = 'scale(1)';
});

skill.addEventListener('mouseenter', () => {
    skill.style.transform = 'scale(1.05)';
    skill.style.transition = 'transform 0.8s cubic-bezier(0.15, 0.83, 0.66, 1)';
});

skill.addEventListener('mouseleave', () => {
    skill.style.transform = 'scale(1)';
});

project.addEventListener('mouseenter', () => {
    project.style.transform = 'scale(1.05)';
    project.style.transition = 'transform 0.8s cubic-bezier(0.15, 0.83, 0.66, 1)';
});

project.addEventListener('mouseleave', () => {
    project.style.transform = 'scale(1)';
});

contact.addEventListener('mouseenter', () => {
    contact.style.transform = 'scale(1.05)';
    contact.style.transition = 'transform 0.8s cubic-bezier(0.15, 0.83, 0.66, 1)';
});

contact.addEventListener('mouseleave', () => {
    contact.style.transform = 'scale(1)';
});
document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.slider');
    let position = 0;
  
    function slide() {
        position -= 1; // Vitesse de défilement en pixels par seconde
  
        if (position <= -70) { // Largeur d'une image
            position = 0;
            slider.appendChild(slider.firstElementChild);
        }
  
        slider.style.transform = `translateX(${position}px)`;
  
        requestAnimationFrame(slide);
    }
  
    slide();
  });