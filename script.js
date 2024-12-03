document.addEventListener('DOMContentLoaded', function() {
    const phoneContainer = document.querySelector('.phone-container');
    const phoneContent = document.querySelector('.phone-content');
    const gridContainer = document.querySelector('.grid-container');
    
    phoneContent.addEventListener('scroll', () => {
        const gridTop = gridContainer.getBoundingClientRect().top;
        
        // If the grid is about to come into view (or is in view)
        if (gridTop < window.innerHeight * 0.8) {
            phoneContainer.classList.add('expanded');
        } else {
            phoneContainer.classList.remove('expanded');
        }
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
