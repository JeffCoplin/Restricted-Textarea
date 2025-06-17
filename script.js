function contarCaracteres() {
  const textarea = document.getElementById('miTextarea');
  const contador = document.getElementById('contador');
  

  contador.textContent = textarea.value.length;

  if (textarea.value.length === 250){
    contador.style.color = 'red';
    textarea.style.borderColor = 'red';
    textarea.style.color = 'red';
  }

  else if(textarea.value.length === 0) {
    contador.style.color = 'black';
    textarea.style.borderColor = 'red';
    textarea.style.color = 'red';
  }
}

document.getElementById('miTextarea').addEventListener('keydown', function(event) {
  const contador = document.getElementById('contador');
    const textarea = document.getElementById('miTextarea');

  if (event.key === 'Enter') {
    contador.style.color = 'red';
    textarea.style.borderColor = 'red';
  }
  else if (event.key === 'Backspace' || event.key === 'Delete') {
    contador.style.color = 'black';
    textarea.style.borderColor = 'black';
  }
});