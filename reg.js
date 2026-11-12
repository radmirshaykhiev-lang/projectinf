// Лучше слушать событие 'submit' у самой формы, передав (event)
document.getElementById('loginform').addEventListener('submit', (event) => {
    event.preventDefault(); // Теперь это сработает и не даст странице упасть!

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const password1 = document.getElementById('password1').value;
    const confirmLabel = document.querySelector('.label');

    if (password1 !== password) {
        confirmLabel.textContent = "Пароли не совпадают!";
        confirmLabel.style.color = "red";
    } else {
        confirmLabel.textContent = " ";
        confirmLabel.style.color = "green";
        // Здесь дальше можно писать fetch() для отправки на сервер
    }
});
