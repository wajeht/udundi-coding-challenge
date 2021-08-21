window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementsByClassName('card')[0].style.display = 'none';
});

document.getElementById('more').addEventListener('click', () => {
    document.getElementsByClassName('heading')[0].style.display = 'none';
    document.querySelector('.card').classList.remove('animate__zoomOutUp');
    document.querySelector('.card').classList.add('animate__zoomInUp');
    document.getElementsByClassName('card')[0].style.display = '';
});

document.getElementById('close').addEventListener('click', () => {
    document.querySelector('.card').classList.remove('animate__zoomInUp');
    document.querySelector('.card').classList.add('animate__zoomOutUp');
    document.getElementsByClassName('heading')[0].style.display = '';
});
