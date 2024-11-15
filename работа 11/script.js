// Часть 1: Работа с DOM
document.addEventListener("DOMContentLoaded", () => {
    // 1. Изменяем текст H1
    const h1 = document.querySelector("h1");
    h1.textContent = "Добро пожаловать на наш сайт!";

    // 2. Изменяем цвет текста H2
    const h2 = document.querySelector("h2");
    h2.style.color = "red";

    // 3. Изменяем текст первого параграфа
    const firstParagraph = document.querySelector("p");
    firstParagraph.textContent = "Это новый текст параграфа.";

    // 4. Скрываем встроенное видео
    const video = document.querySelector("iframe");
    video.style.display = "none";
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
