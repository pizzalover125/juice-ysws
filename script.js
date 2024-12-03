document.addEventListener('DOMContentLoaded', function() {
    const phoneContainer = document.querySelector('.phone-container');
    const phoneContent = document.querySelector('.phone-content');
    const gridContainer = document.querySelector('.grid-container');
    let lastScrollPosition = 0;
    
    phoneContent.addEventListener('scroll', () => {
        const currentScrollPosition = phoneContent.scrollTop;
        const gridTop = gridContainer.getBoundingClientRect().top;
        
        // If scrolling down and grid is about to come into view
        if (currentScrollPosition > lastScrollPosition && gridTop < window.innerHeight * 0.8) {
            phoneContainer.classList.add('expanded');
        }
        // If scrolling up and grid is out of view
        else if (currentScrollPosition < lastScrollPosition && gridTop > window.innerHeight * 0.8) {
            phoneContainer.classList.remove('expanded');
        }
        
        lastScrollPosition = currentScrollPosition;
    });

    // Add scroll animation
    const scrollElements = document.querySelectorAll('.scroll-animation');
    const elementInView = (el) => {
        const rect = el.getBoundingClientRect();
        return rect.top <= window.innerHeight / 1.25;
    };

    const displayScrollElement = (element) => {
        element.classList.add('visible');
    };

    phoneContent.addEventListener('scroll', () => {
        scrollElements.forEach((el) => {
            if (elementInView(el)) {
                displayScrollElement(el);
            }
        });
    });

    // Parallax effect code
    const parallaxElements = document.querySelectorAll('.parallax-element');
    const parallaxBg = document.querySelector('.parallax-bg');
    
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.1;
            const x = (mouseX - 0.5) * speed * 100;
            const y = (mouseY - 0.5) * speed * 100;
            element.style.transform = `translate(${x}px, ${y}px)`;
        });
        
        if (parallaxBg) {
            parallaxBg.style.setProperty('--mouse-x', `${mouseX * 100}%`);
            parallaxBg.style.setProperty('--mouse-y', `${mouseY * 100}%`);
        }
    });
});

const phoneContent = document.querySelector('.phone-content');
const sections = document.querySelectorAll('.scroll-section');
let currentSectionIndex = 0;

document.querySelector('.android-navigation').addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        const button = event.target;
        if (button.textContent === '◀') {
            // Scroll left
            currentSectionIndex = Math.max(0, currentSectionIndex - 1);
        } else if (button.textContent === '▶') {
            // Scroll right
            currentSectionIndex = Math.min(sections.length - 1, currentSectionIndex + 1);
        }
        sections[currentSectionIndex].scrollIntoView({ behavior: 'smooth' });
    }
});
