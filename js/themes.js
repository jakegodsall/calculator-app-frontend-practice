const radioButtons = document.querySelectorAll('#radio-button');
const overlay = document.getElementById('overlay');

const changeTheme = (e) => {
    if (e.target.classList[1] === document.body.className) {
        return;
    }
    radioButtons.forEach((btn) => {
        if (btn.classList.contains('active')) {
            btn.classList.remove('active');
        }
    });

    const theme = e.target.classList[1];

    overlay.classList.add('active');

    setTimeout(() => {
        document.body.className = theme;
    }, 500);

    setTimeout(() => {
        overlay.classList.remove('active');
        e.target.classList.toggle('active');
    }, 1000);
};

radioButtons.forEach((button) => {
    button.addEventListener('click', changeTheme);
});
