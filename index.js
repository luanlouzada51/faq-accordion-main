const openIcons = document.querySelectorAll('.open-icon');
const closeIcons = document.querySelectorAll('.close-icon');
const answers = document.querySelectorAll('.answer');

openIcons.forEach((icon, index) => {
    icon.addEventListener('click', () => {
        console.log('Ícone clicado:', icon);

        icon.classList.add('hide');
        closeIcons[index].classList.remove('hide');
        closeIcons[index].classList.add('show');

        answers[index].classList.remove('hide');
    });
});

closeIcons.forEach((icon, index) => {
    icon.addEventListener('click', () => {
        icon.classList.add('hide');

        openIcons[index].classList.remove('hide');

        answers[index].classList.add('hide');
    });
});
