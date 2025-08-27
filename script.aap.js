// Animate skill bars when visible
const skillsSection = document.querySelector('.skills');
const skillBars = document.querySelectorAll('.skill .progress');

function fillSkills() {
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.2;

    if (sectionPos < screenPos) {
        skillBars.forEach(skill => {
            const progress = skill.getAttribute('data-progress');
            skill.style.width = progress + '%';
        });
    }
}                

window.addEventListener('scroll', fillSkills);
window.addEventListener('load', fillSkills);


// Select all progress elements
const progresses = document.querySelectorAll('.progress');

progresses.forEach(progress => {
    const value = progress.getAttribute('data-progress'); // get 60
    progress.style.width = value + '%'; // set width to 60%
});


 
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

 
