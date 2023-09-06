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
});

v.on('validation:success', () => {
 alert('Хорошо! Форма прошла проверку без ошибок.');
 const formData = new FormData(form);
 let result = [];
 for (const pair of formData.entries()) {
   result.push(pair[0] + ': ');
   result.push(pair[1] + '\n'); 
 }
 const file = new File(result, 'new-note.txt', {
   type: 'text'
 })
 download(file);

 const myModalEl = document.getElementById('exampleModal');
 const modal = bootstrap.Modal.getInstance(myModalEl);
 modal.hide();
}); 


  

