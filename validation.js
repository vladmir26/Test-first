import { Validator, enLang as en,  createLang } from 'https://cdn.jsdelivr.net/npm/@upjs/facile-validator@1.10.0/+esm';
const form = document.querySelector('.js-form');



const myLang = createLang({
  en,
  required: 'Это поле обязательно к заполнению',
  alpha: 'Пожалуйста, вводите только буквы алфавита',
  email: 'Пожалуйста, введите действительный адрес электронной почты',
  'min-length': 'Минимальная длина - 16 символов',

});

const v = new Validator(form, {
  lang: myLang,
});

function download(file) {
  const link = document.createElement('a')
  const url = URL.createObjectURL(file)

  link.href = url
  link.download = file.name
  document.body.appendChild(link)
  link.click()

  document.body.removeChild(link)
  window.URL.revokeObjectURL(url)
}
  

form.addEventListener('submit', (e) => {
  e.preventDefault();
  v.validate();
  if (e.target.checkValidity()) {
    const file = new File(new FormData(e.target), 'new-note.txt', {
      type: 'text'
    })
    download(file);
  }
});

v.on('validation:success', () => {
 alert('Хорошо! Форма прошла проверку без ошибок.');
});


v.on('validation:failed', () => {
  const phone = document.querySelector('.phone-wrapper');
  const mask = document.querySelector('.mask');
  const textarea = document.querySelector('.textarea');
    if (mask.dataset.rules === 'min:16|required') {
      phone.classList.remove('ms-3');
    }
    if (textarea.value === '')  {
         textarea.classList.remove('ms-3');
    }
    
  });
  

