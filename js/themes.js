const radioButtons = document.getElementsByName('theme');

const changeTheme = (e) => {
    const theme = e.target.value;
    console.log(e.target.value);

    document.body.className = theme;
};

radioButtons.forEach((button) => {
    button.addEventListener('click', changeTheme);
});
