let email = 'johny@com.br';

email = 'johnyramon@com.br';

console.log(email);

console.log('O seu e-mail é:' + email); //concatenação é o sinal de +

console.log(`O seu e-mail é: ${email}`); //templestring. Usar craser.

document.getElementById('btn-submit').addEventListener('click', e => {
    console.log('O botão foi clicado!');
});

document.getElementById('form-login').addEventListener('mousemove', e => { //recupera o elemento pelo o id.
     console.log('O mouse passou por cima do formulário!');
});


document.querySelector('#form-login').addEventListener('mouseleave', e => { //recupera o elemento css como id ou pela class.
    console.log('O mouse está fora do formulário');

});

document.querySelector('#form-login').addEventListener('submit', e => {

    e.preventDefault(); //cancelar o comportamento padrão do meu formulário.

    let email = document.querySelector('#email').value; //pegando os valores que foram colocado no login e senha.
    let password = document.querySelector('#password').value;

    console.log(email, password);

    let json = {
        email,
        password
    };

    console.log(json);

    let stringJSON = JSON.stringify(json);

    console.log(stringJSON);

    let jsonParse = JSON.parse(stringJSON);

    console.log(jsonParse);

    if (json.email !== "") { //declaração de se for algo épara fazer.

        console.log("O campo foi preenchido!");
    }

    if (!json.email) { //declaração de negação.

        console.err("O campo deve ser preenchido!");
    } 
    else {
        console.info("Dados enviado com sucesso!");
    }
});
