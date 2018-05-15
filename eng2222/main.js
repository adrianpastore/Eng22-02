const cidade = document.querySelector('#cidade');
const rua = document.querySelector('#rua');
const estado = document.querySelector('#estado');
const numero = document.querySelector('#numero');
const informecurso = document.querySelector('form#informecurso')
const select = document.querySelector('select#start');
informecurso.addEventListener('submit', function(e) {
    e.preventDefault();
        const adc = cidade.value + "," + estado;
        const adcs = `<option>${adc}</option>`;
        select.innerHTML += adcs;
    });
