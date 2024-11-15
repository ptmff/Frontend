document.addEventListener('DOMContentLoaded', () => {
    // 1. Обработчик на заголовок
    const header = document.getElementById('header');
    header.addEventListener('click', () => {
        alert('Вы кликнули на заголовок - так держать!');
    });

    // 2. Обработчик на кнопку смены семестра
    const table = document.getElementById('practice-table').querySelector('tbody');
    const switchSemesterButton = document.getElementById('switch-semester');
    const secondSemesterTopics = [
        'Базовое бэкенд-приложение', 'HTTP-запросы', 'JSON и работа с ним', 
        'HTTP-ответы', 'Проектирование API', 'Роутинг и его настройка', 
        'NoSQL базы данных', 'Обеспечение авторизации и доступа пользователей', 
        'Работа сторонних сервисов уведомления и авторизации', 'Основы ReactJS',
        'Работа с компонентами динамической DOM', 'Использование хуков в React',
        'Основы микросервисной архитектуры', 'Разработка классических модулей веб-приложений'
    ];

    switchSemesterButton.addEventListener('click', () => {
        table.innerHTML = '';
        secondSemesterTopics.forEach((topic, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${index + 1}</td><td>${topic}</td>`;
            table.appendChild(row);
        });
    });

    // 3. Обработчики на фотографию студента
    const studentPhoto = document.getElementById('student-photo');
    const teacherPhoto = 'image.png';

    studentPhoto.addEventListener('mouseover', () => {
        studentPhoto.style.width = '420px';
        studentPhoto.style.height = 'auto';
    });

    studentPhoto.addEventListener('mouseout', () => {
        studentPhoto.style.width = '200px';
        studentPhoto.style.height = 'auto';
    });

    studentPhoto.addEventListener('click', () => {
        studentPhoto.src = teacherPhoto;
    });

    studentPhoto.addEventListener('dblclick', () => {
        alert('Не налегай, у меня не так много любимых преподавателей');
    });
});
