document.addEventListener("DOMContentLoaded", () => {
    const executeButton = document.getElementById("executeTask10");
    const outputDiv = document.getElementById("consoleOutput");

    // Функция для отображения вывода в консоли на экране
    function logToOutput(message) {
        const logLine = document.createElement("p");
        logLine.textContent = message;
        outputDiv.appendChild(logLine);
    }

    // Перехватываем console.log для отображения в div
    const originalConsoleLog = console.log;
    console.log = function (...args) {
        const message = args.join(" ");
        logToOutput(message);
        originalConsoleLog.apply(console, args);
    };

    // Обработчик нажатия кнопки
    executeButton.addEventListener("click", () => {
        outputDiv.innerHTML = ""; // Очищаем предыдущий вывод

        // Код задания
        try {
            console.log("Задание 1");
            let name = "Тимофей";
            let age = 19;

            if (age >= 18) {
                console.log("Вы совершеннолетний");
            } else {
                console.log("Вы несовершеннолетний");
            }

            console.log("\n\nЗадание 2");
            for (let i = 1; i <= 10; i++) {
                console.log(i);
            }

            let j = 10;
            while (j >= 1) {
                console.log(j);
                j--;
            }

            console.log("\n\nЗадание 3");
            const lectures = [
                "Тема 1",
                "Тема 2",
                "Тема 3",
                "Очередная тема 1",
                "Очерекдная тема 2",
            ];
            const practices = ["Практика 1", "Практика 2", "Практика 3"];

            lectures.push("Тема 4");
            practices.unshift("Практика 4");

            lectures.forEach((lecture) => console.log(lecture));
            practices.forEach((practice) => console.log(practice));

            function arrayToString(arr) {
                return arr.join(", ");
            }

            console.log(arrayToString(lectures));
            console.log(arrayToString(practices));

            console.log("\n\nЗадание 4");
            function filterTopicsStartingWithO(arr) {
                return arr.filter((topic) => topic.startsWith("О"));
            }

            console.log(filterTopicsStartingWithO(lectures));
        } catch (e) {
            console.error("Ошибка выполнения кода:", e);
        }
    });

    // Восстанавливаем оригинальный console.log при необходимости
    window.addEventListener("beforeunload", () => {
        console.log = originalConsoleLog;
    });
});
