// Часть 1: Работа с DOM
document.addEventListener("DOMContentLoaded", () => {
    const h1 = document.querySelector("h1");
    const h2 = document.querySelector("h2");
    const firstParagraph = document.querySelector("p");
    const video = document.querySelector("iframe");
    const toggleButton = document.getElementById("toggle-changes");

    let changesApplied = false; // Флаг для отслеживания состояния изменений

    // Исходные данные
    const originalData = {
        h1Text: h1.textContent,
        h2Color: h2.style.color || "black",
        paragraphText: firstParagraph.textContent,
        videoDisplay: video.style.display || "block"
    };

    // Функция для применения изменений
    function applyChanges() {
        h1.textContent = "Добро пожаловать на наш сайт!";
        h2.style.color = "red";
        firstParagraph.textContent = "Это новый текст параграфа.";
        video.style.display = "none";
    }

    // Функция для отмены изменений
    function revertChanges() {
        h1.textContent = originalData.h1Text;
        h2.style.color = originalData.h2Color;
        firstParagraph.textContent = originalData.paragraphText;
        video.style.display = originalData.videoDisplay;
    }

    // Обработчик нажатия на кнопку
    toggleButton.addEventListener("click", () => {
        if (changesApplied) {
            revertChanges();
            toggleButton.textContent = "Внести изменения";
        } else {
            applyChanges();
            toggleButton.textContent = "Отменить изменения";
        }
        changesApplied = !changesApplied;
    });
});

// Часть 2: Работа с объектами
const formData = {
    name: "",
    email: "",
    phone: "",
    date: "",
    comment: "",
    printData() {
        console.log(`Имя: ${this.name}`);
        console.log(`E-mail: ${this.email}`);
        console.log(`Телефон: ${this.phone}`);
        console.log(`Дата: ${this.date}`);
        console.log(`Комментарий: ${this.comment}`);
    }
};

// Функция для проверки email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Часть 3: Обработчик формы
function submitForm(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение формы

    // Получаем данные из формы
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const date = document.getElementById("date").value;
    const comment = document.getElementById("comment").value.trim();

    // Валидация
    if (!name || !email || !comment) {
        alert("Пожалуйста, заполните все обязательные поля (Имя, Email, Комментарий).");
        return;
    }

    if (phone && !/^\d+$/.test(phone)) {
        alert("Поле 'Телефон' должно содержать только цифры.");
        return;
    }

    if (!isValidEmail(email)) {
        alert("Введите корректный email.");
        return;
    }

    // Заполняем объект formData
    formData.name = name;
    formData.email = email;
    formData.phone = phone;
    formData.date = date;
    formData.comment = comment;

    // Выводим данные в консоль
    formData.printData();

    alert("Форма успешно отправлена!");
}

// Добавляем обработчик события на кнопку отправки формы
document.getElementById("form").addEventListener("submit", submitForm);
