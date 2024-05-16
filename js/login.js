var body = document.querySelector("body")
var singUpButton = document.querySelector("#singUp")
var singInButton = document.querySelector("#singIn")

body.onload = function () {
    body.className = "on-load";
}

singUpButton.addEventListener("click", function () {
    body.className = "sing-up"
});

singInButton.addEventListener("click", function () {
    body.className = "sing-in"
});

document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var formData = {
       
        email: event.target.email.value,
        password: event.target.password.value,
        confirmedPassword: event.target.confirmPassword.value
    };

    fetch('https://api-umfg-programacao-iv-2024-291d5e9a4ec4.herokuapp.com/v1/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao cadastrar. Por favor, tente novamente mais tarde.');
        }
        return response.json();
    })
    .then(data => {
        console.log('Cadastro bem-sucedido:', data);
    })
    .catch(error => {
        console.error('Erro ao cadastrar:', error.message);
    });
});


document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var formData = {
        email: event.target.email.value,
        password: event.target.password.value
    };

    fetch('https://api-umfg-programacao-iv-2024-291d5e9a4ec4.herokuapp.com/v1/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao fazer login. Por favor, verifique suas credenciais e tente novamente.');
        }
        return response.json();
    })
    .then(data => {
        console.log('Login bem-sucedido:', data);
        localStorage.setItem('accessToken', data.accessToken);
        window.location.href = 'home.html'; 
    })
    .catch(error => {
        console.error('Erro ao fazer login:', error.message);

    });
});
