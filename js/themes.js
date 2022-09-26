const radioButtons = document.querySelectorAll('#radio-button');
const overlay = document.getElementById('overlay');

const changeTheme = (e) => {
    radioButtons.forEach((btn) => {
        if (btn.classList.contains('active')) {
            btn.classList.remove('active');
        }
    });
    e.target.classList.toggle('active');

    const theme = e.target.classList[1];

    overlay.classList.add('active');

    setTimeout(() => {
        document.body.className = theme;
    }, 500);

    setTimeout(() => {
        overlay.classList.remove('active');
    }, 1000);
};

radioButtons.forEach((button) => {
    button.addEventListener('click', changeTheme);
});
