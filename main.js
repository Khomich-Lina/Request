const axios = require("axios");
const base_url = 'http://142.93.134.108:1111'


const form = {
    username: document.getElementById('username'),
    password: document.getElementById('password'),
    submit: document.getElementById('sign_up'),
    submit2: document.getElementById('login')
};

form.submit.addEventListener('click', () => {

    let email = form.username.value;
    let password = form.password.value;

    axios({
        method: 'post',
        url: base_url + '/sign_up',
        data: {
            email: email,
            password: password
        }
    });});

form.submit2.addEventListener('click', () => {

    let email = form.username.value;
    let password = form.password.value;

    axios({
        method: 'post',
        url: base_url + '/login?'+`email=${email}&password=${password}`,
    })
    
})

    

