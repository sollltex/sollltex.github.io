function updateDate() {
    const now = new Date();
    const months = [
        'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
        'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
    ];
    const day = now.getDate();
    const month = months[now.getMonth()];
    document.getElementById('date').textContent = `${day} ${month}`;
    document.getElementById('year').textContent = `${now.getFullYear()} г.`;
}
updateDate();
