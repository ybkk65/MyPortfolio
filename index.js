document.addEventListener("DOMContentLoaded", function() {
    const typedTextSpan = document.querySelector(".typed-text");
    const cursorSpan = document.querySelector(".cursor");
    const textArray = ["Developer", "< coder >"];
    const typingDelay = 100;
    const erasingDelay = 100;
    const newTextDelay = 600;
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            cursorSpan.classList.remove("typing");
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            cursorSpan.classList.remove("typing");
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, typingDelay + 1100);
        }
    }

    if (textArray.length) setTimeout(type, newTextDelay + 250);
    var button = document.querySelector(".gotop");

    button.addEventListener("click", function() {
        // Défilement fluide vers le haut de la page
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Utilisation de l'option smooth pour un défilement fluide
        });
    });
    
    
});

const sr = ScrollReveal({
    origin: 'top',
    distance: '120px',
    duration: 2500,
    delay: 400,
});

sr.reveal(`.projects_container`);
sr.reveal(`.skill_container`, { origin: 'left' });
sr.reveal(`.about_container`, { origin: 'right' });
//sr.reveal(`header`);
sr.reveal(`.moi`);
sr.reveal(`.hello`);
sr.reveal(`.pro`);
sr.reveal(`.contact_container`);
sr.reveal(`#ensemble1`);
sr.reveal(`#ensemble2`);
sr.reveal(`#ensemble3`);
sr.reveal(`.contenuDescription`, { origin: 'left' });
sr.reveal(`.maphoto`, { origin: 'right' });
sr.reveal(`.etage1`);
sr.reveal(`.etage2` ,{ origin: 'bottom' });
sr.reveal(`.etage3`);
sr.reveal(`.cardproject1`, { origin: 'left' });
sr.reveal(`.cardproject2`, { origin: 'right' });
sr.reveal(`.cardproject3`, { origin: 'left' });
sr.reveal(`.interpro`); 
sr.reveal(`.salut`, { origin: 'left' });
sr.reveal(`#formulaire`, { origin: 'right' });
sr.reveal(`.Etudes`); 
//slide
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
  // Cette fonction applique le style par défaut à la page Home (variable un)
function applyDefaultStyle() {
    let un = document.querySelector("#un");
    un.style.border = "solid 2px #F8B500";
    un.style.height = "30px";
    un.style.color = "#F8B500";
    un.style.padding = "2px 14px";
    un.style.marginTop = "-5px";
    un.style.borderRadius = "12px";
}

// Cette fonction applique le style en fonction de l'identifiant de la page
function applyPageStyle(page) {
    let element = document.querySelector("#" + page);
    if (element) {
        element.style.border = "solid 2px #F39F44";
        element.style.height = "30px";
        element.style.color = "#F39F44";
        element.style.padding = "2px 14px";
        element.style.marginTop = "-5px";
        element.style.borderRadius = "12px";
        
    }
}

// Cette fonction est appelée pour appliquer le style lorsque la page est chargée
function applyStyleOnLoad() {
    // Si le style est déjà stocké, on l'applique
    let currentPage = localStorage.getItem("currentPage");
    if (currentPage) {
        applyPageStyle(currentPage);
    } else {
        // Sinon, on applique le style par défaut à la page Home
        applyDefaultStyle();
    }
}

// Cette fonction est appelée lorsqu'un lien est cliqué
function onPageLinkClicked(page) {
    // On stocke la page actuelle dans le stockage local
    localStorage.setItem("currentPage", page);
}


function downloadCV() {
    
    const link = document.createElement('a');
    link.href = '../assets/cvyouns.pdf'; 
    link.download = 'cv.pdf'; 
    document.body.appendChild(link);
    link.click(); 
    document.body.removeChild(link); 
}


