const base_url = 'http://142.93.134.108:1111'

const form = {
    username: document.getElementById('username'),
    password: document.getElementById('password'),
    submit: document.getElementById('sign_up'),
    submit2: document.getElementById('login')
};

form.submit.addEventListener('click', () => {
    const req = new XMLHttpRequest();

    req.onload = () => {
        console.log(req.responseText);
    };

    let email = form.username.value;
    let password = form.password.value;

    req.open('post', base_url + '/sign_up');
    req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    req.send(JSON.stringify({ "email": email, "password": password }));
});
form.submit2.addEventListener('click', () => {
    const req = new XMLHttpRequest();

    req.onload = () => {
        console.log(req.responseText);
    };

    let email = form.username.value;
    let password = form.password.value;

    req.open('post', base_url + '/login?'+`email=${email}&password=${password}`);
    req.send();
    
});
