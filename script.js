let lines = document.querySelector('.lines').addEventListener('click', function() {
    let menu = document.querySelector('.menu');

    if (!menu.classList.contains('active')) {
        menu.classList.add('active');
    } else {
        menu.classList.remove('active');
    }
});

