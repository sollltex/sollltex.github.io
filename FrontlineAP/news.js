document.addEventListener('DOMContentLoaded', () => {
    const newsList = document.getElementById('newsList');
    const loadingIndicator = document.getElementById('loadingIndicator');

    function displayNews(newsData) {
        const newsItem = document.createElement('div');
        newsItem.classList.add('news-item');

        const title = document.createElement('h2');
        title.textContent = newsData.title;
        newsItem.appendChild(title);

        const date = document.createElement('div');
        date.classList.add('news-date');
        date.textContent = newsData.date;
        newsItem.appendChild(date);

        const content = document.createElement('p');
        content.textContent = newsData.content;
        newsItem.appendChild(content);

        newsList.appendChild(newsItem);
    }

    async function loadNews() {
        loadingIndicator.style.display = 'none';

        const newsData = [
            {
                title: "Обновление 1.2 Вышло!",
                date: "2024-01-26",
                content: "Встречайте новое обновление Frontline: Assault Protocol!  Введены новые карты, оружие и исправлены ошибки."
            },
            {
                title: "Турнир 'Стальные Титаны'",
                date: "2024-01-20",
                content: "Приглашаем всех принять участие в турнире 'Стальные Титаны' с отличными призами! Регистрация открыта!"
            },
            {
                title: "Предварительный обзор: новое оружие",
                date: "2024-01-15",
                content: "Представляем вам предварительный обзор нового оружия, которое появится в следующем обновлении.  Оцените его возможности!"
            }
        ];

        newsData.forEach(news => {
            displayNews(news);
        });
    }

    loadNews();
});
