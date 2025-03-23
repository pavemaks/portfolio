/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}

/*===== LANGUAGE PLACEHOLDER SUPPORT =====*/
function setLanguage(lang) {
  const elements = document.querySelectorAll('.lang');
  elements.forEach(el => {
    const text = el.getAttribute(`data-${lang}`);
    if (text) el.textContent = text;
  });

  // handle form placeholders
  const placeholders = {
    name: { en: "Name", ru: "Имя" },
    email: { en: "Email", ru: "Почта" },
    message: { en: "Message", ru: "Сообщение" }
  };

  const inputs = document.querySelectorAll('.contact__form input, .contact__form textarea');
  if (inputs[0]) inputs[0].placeholder = placeholders.name[lang];
  if (inputs[1]) inputs[1].placeholder = placeholders.email[lang];
  if (inputs[2]) inputs[2].placeholder = placeholders.message[lang];
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)


/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200});
sr.reveal('.logoredesign__container a, .illustrator__img, .photoshop__img, .animate__img', {
    interval: 200,
    origin: 'bottom',
    distance: '30px',
    duration: 1000,
    easing: 'ease-in-out'
});

/*===== CONTACT FORM MESSAGE =====*/
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault(); // отменяем стандартную отправку
        formMessage.style.display = 'block'; // показываем сообщение
        contactForm.reset(); // очищаем форму
    });
}
