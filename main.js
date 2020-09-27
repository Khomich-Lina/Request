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
        url: base_url + '/login?' + `email=${email}&password=${password}`,
    }).then(function (result){
        check_token(result.data.body.access_token, result.data.body.refresh_token)
    })

    function check_token(access, refresh){
        let access_token = access;
        let refresh_token = refresh;
        console.log(access_token);
        console.log(refresh_token);
        axios({
            method: 'get',
            url: base_url + `/me`,
            headers:{Authorization: `Bearer ${access_token}`}})
            .then(function (result){update_token(result.data.body.message, refresh_token)})
    }

    function update_token(data, refresh_token){
        let message = data;
        if(message =="token expired"){
            axios({
                method: 'post',
                url: base_url + `/refresh`,
                headers:{Authorization: `Bearer ${refresh_token}`}})
                .then(function (result){check_token(result.data.body.access_token)})
        }
    }

});
