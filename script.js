document.addEventListener("DOMContentLoaded", () => {
    const tg = window.Telegram.WebApp;
    const form = document.getElementById("whitelist-form");
    const result = document.getElementById("result");

    // Расширяем приложение на весь экран
    tg.expand();

    // Отправка формы
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const telegramId = document.getElementById("telegram-id").value;

        // Проверка ID (для примера, разрешаем только ID 12345)
        if (telegramId === "12345") {
            result.textContent = "✅ У вас есть доступ!";
            result.style.color = "green";
        } else {
            result.textContent = "⛔ Доступ запрещён!";
            result.style.color = "red";
        }

        result.classList.remove("hidden");
    });
});
