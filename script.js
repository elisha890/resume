function toggleMenu() {
    document.getElementById("nav-links").classList.toggle("show");
}

// Typing effect
const roles = ["Web Developer", "WordPress Designer", "Python Programmer", "Creative Coder"];
let i = 0, j = 0, isDeleting = false;
const typing = document.querySelector(".typing");

function typeEffect() {
    const role = roles[i];
    if (!isDeleting) {
        typing.textContent = role.substring(0, j++);
        if (j > role.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1000);
            return;
        }
    } else {
        typing.textContent = role.substring(0, j--);
        if (j < 0) {
            isDeleting = false;
            i = (i + 1) % roles.length;
        }
    }
    setTimeout(typeEffect, isDeleting ? 50 : 100);
}
typeEffect();
  