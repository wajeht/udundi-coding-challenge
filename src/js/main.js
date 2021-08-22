/**
 * The functions below will run as soon as DOM is loaded
 */
(function main() {
    // Hide card at start
    window.addEventListener('DOMContentLoaded', (event) => {
        document.getElementsByClassName('card')[0].style.display = 'none';
    });

    // Hide heading and show card
    document.getElementById('more').addEventListener('click', () => {
        document.getElementsByClassName('heading')[0].style.display = 'none';
        document.querySelector('.card').classList.remove('animate__zoomOutUp');
        document.querySelector('.card').classList.add('animate__zoomInUp');
        document.getElementsByClassName('card')[0].style.display = '';
    });

    // Hide card and show heading
    document.getElementById('close').addEventListener('click', () => {
        document.querySelector('.card').classList.remove('animate__zoomInUp');
        document.querySelector('.heading').classList.remove('animate__fadeInLeftBig');
        document.querySelector('.heading').classList.add('animate__fadeIn');
        document.querySelector('.card').classList.add('animate__zoomOutUp');
        document.getElementsByClassName('heading')[0].style.display = '';
    });
})();
