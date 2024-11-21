// Функция для вывода сообщения в консоль
function showMessage(message) {
    console.log(message);
}

// Функция для изменения цвета фона
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

// Функция для переключения видимости элемента
function toggleVisibility(selector) {
    const element = document.querySelector(selector);
    if (element) {
        const currentDisplay = window.getComputedStyle(element).display;
        element.style.display = currentDisplay === 'none' ? 'block' : 'none';
    }
}

// Функция для извлечения параметра utm_term из URL
function handleUtmTerm() {
    const urlParams = new URLSearchParams(window.location.search);
    const utmTerm = urlParams.get('utm_term');
    const heading = document.querySelector('h1');
    if (heading && utmTerm) {
        heading.textContent = utmTerm;
    }
}

// Функция для вывода текущего времени
function logCurrentTime() {
    const now = new Date();
    const time = now.toTimeString().split(' ')[0];
    console.log(`Current Time: ${time}`);
}

// Функция для сброса цвета фона
function resetBackgroundColor() {
    document.body.style.backgroundColor = 'white';
}

// Таймер обратного отсчета
function startCountdown(seconds, callback) {
    const countdownEl = document.getElementById('countdown');
    let timeLeft = seconds;

    const timerId = setInterval(() => {
        timeLeft -= 1;
        countdownEl.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timerId);
            callback();
        }
    }, 1000);
}

// Вызовы функций
document.addEventListener('DOMContentLoaded', () => {
    showMessage("Скрипт загружен!");
    logCurrentTime();
    resetBackgroundColor();

    startCountdown(5, () => {
        changeBackgroundColor("lightblue");
        toggleVisibility('.content');
    });

    handleUtmTerm();

    // Добавляем обработчик для кнопки
    const navigateBtn = document.getElementById('navigate-btn');
    navigateBtn.addEventListener('click', () => {
        window.location.href = '../page5.html#goToJsDemo';
    });
});
