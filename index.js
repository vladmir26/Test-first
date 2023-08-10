const button = document.querySelector('.btn-primary');
const form = document.querySelector('.d-none');

button.addEventListener('click', () => {
     form.classList.remove('d-none');
     form.classList.add('d-flex', 'flex-column');
});