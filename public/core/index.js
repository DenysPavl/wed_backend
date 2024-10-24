const form = document.getElementById("login_form");
const myFormData = new FormData(form);
form.addEventListener('submit', LoginUser);

function LoginUser(event) {
    event.preventDefault();
    
    const myFormData = new FormData(form);

    for (let dat of myFormData) {
        console.log(dat);
    }
    const formObject = {};

    myFormData.forEach((value, key) => {
        formObject[key] = value;
    });;
    api_LoginUser(formObject);
}

async function api_LoginUser(params) {
    const response = await fetch('http://localhost:8001/api//auth/login',{
        method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Убедитесь, что установлены правильные заголовки
            },
            body: JSON.stringify(params)
    });

    const data = await response.json();

    if (response.ok) {
        localStorage.setItem('token', data.token);
        //alert('Login successful');
        window.location.href = '/name/' + data.token;//переадрасація на сторінку користувача
    } else {
        alert('Login failed: ' + data.message);
    }
}

async function Look_all_Comments() {
    const token = localStorage.getItem('token');

    const response = await fetch('http://localhost:8001/api/comment/all', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'  // Якщо ваш сервер очікує JSON
        }
    });

    const data = await response.json();

    if (response.ok) {
        console.log('Protected data:', data);
        alert(JSON.stringify(data));
    } else {
        console.log('Failed to fetch protected data:', data.message);
        alert(data.message);
    }
}

async function Look_Authors_Comments() {
    const token = localStorage.getItem('token');

    const response = await fetch('http://localhost:8001/api/comment/author', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'  // Якщо ваш сервер очікує JSON
        }
    });

    const data = await response.json();

    if (response.ok) {
        console.log('Protected data:', data);
        alert(JSON.stringify(data));
    } else {
        console.log('Failed to fetch protected data:', data.message);
        alert(data.message);
    }
}