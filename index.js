var button = document.getElementById('button');
var email = document.getElementById('email');
var senha = document.getElementById('senha');
var mensagem = document.getElementById('mensagem');

button.addEventListener('click', function() {
    if (email.value === '' || senha.value === '') {
        mensagem.textContent = 'Campo E-mail ou senha não preenchidos!';
        mensagem.style.color = 'red';
    } else if (!validarEmail(email.value)) {
        mensagem.textContent = 'E-mail inválido. Certifique-se de que o e-mail esteja no formato correto: exemplo@dominio.com';
        mensagem.style.color = 'red';
    } else {
        mensagem.textContent = 'Campos preenchidos com sucesso!';
        mensagem.style.color = 'green';
    }
});

function validarEmail(email) {
    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}
