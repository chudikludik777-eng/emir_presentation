// Навигация по секциям
document.addEventListener('DOMContentLoaded', function() {
    const sections = Array.from(document.querySelectorAll('.section'));
    const navBtns = Array.from(document.querySelectorAll('.nav-btn'));
    let currentSection = 0;

    // Функция прокрутки к секции
    function scrollToSection(index) {
        if (index < 0) index = 0;
        if (index >= sections.length) index = sections.length - 1;
        
        currentSection = index;
        sections[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        // Обновить активный кнопку
        navBtns.forEach((btn, i) => {
            if (i === index) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    // Клики на кнопки навигации
    navBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            scrollToSection(index);
        });
    });

    // Клавиатурная навигация
    window.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown' || e.key === 'PageDown') {
            e.preventDefault();
            scrollToSection(currentSection + 1);
        }
        if (e.key === 'ArrowUp' || e.key === 'PageUp') {
            e.preventDefault();
            scrollToSection(currentSection - 1);
        }
    });

    // Определить текущую секцию при скроллинге
    window.addEventListener('scroll', () => {
        let current = 0;
        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2) {
                current = index;
            }
        });
        currentSection = current;
        navBtns.forEach((btn, i) => {
            if (i === current) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    });

    // Инициализировать первую секцию как активную
    navBtns[0].classList.add('active');
});

