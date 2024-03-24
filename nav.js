document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const offnavcontent = document.querySelector('.offnavcontent');

    menuToggle.addEventListener('click', function () {
        offnavcontent.classList.toggle('active');
        menuToggle.querySelector('.fa-bars').classList.toggle('hide');
        menuToggle.querySelector('.fa-times').classList.toggle('show');
    });
});


