/*const button = document.querySelector('.btn-primary');
const form = document.querySelector('.d-none');

button.addEventListener('click', () => {
     form.classList.remove('d-none');
     form.classList.add('d-flex', 'flex-column');
});
*/
var exampleModal = document.getElementById('exampleModal')
exampleModal.addEventListener('show.bs.modal', function (event) {
  // Button that triggered the modal
  var button = event.relatedTarget
  // Extract info from data-bs-* attributes
  var recipient = button.getAttribute('data-bs-whatever')
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
  var modalBodyInput = exampleModal.querySelector('.modal-body input')
  modalBodyInput.value = recipient
})

IMask(
     document.querySelector('.mask'),
     {
       mask: '+{7}(000)000-00-00'
     }
) 
