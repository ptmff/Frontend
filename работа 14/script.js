// Анимация параграфа при клике
const paragraph = document.querySelector('.animated-paragraph');
paragraph.addEventListener('click', () => {
    paragraph.classList.add('clicked');
});

// Показ таблицы лекций
const showLecturesBtn = document.querySelector('.show-lectures-btn');
const lecturesTable = document.querySelector('.lectures-table');
showLecturesBtn.addEventListener('click', () => {
    lecturesTable.classList.toggle('visible');
});

// Обработчик формы
const form = document.getElementById('submission-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = document.createElement('div');
    message.textContent = 'Форма отправлена!';
    message.classList.add('success-message');
    form.appendChild(message);

    setTimeout(() => {
        message.style.opacity = '0';
        setTimeout(() => message.remove(), 500);
    }, 2000);
});
