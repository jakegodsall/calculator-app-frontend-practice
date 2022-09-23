const radioButtons = document.querySelectorAll('#radio-button');

const changeTheme = (e) => {
    radioButtons.forEach((btn) => {
        if (btn.classList.contains('active')) {
            btn.classList.remove('active');
        }
    });
    e.target.classList.toggle('active');
    const theme = e.target.classList[1];
    document.body.className = theme;
};

radioButtons.forEach((button) => {
    button.addEventListener('click', changeTheme);
});
