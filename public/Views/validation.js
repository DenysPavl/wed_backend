/*const response = await fetch('../users.json');
const users = await response.json();

//console.log(users);
const form = document.getElementById("valid_form");
const myFormData = new FormData(form);
form.addEventListener('submit', saveArticle);

function saveArticle(event) {
    event.preventDefault();
    
    const myFormData = new FormData(form);

    for (let dat of myFormData) {
        console.log(dat);
    }
    const formObject = {};
    myFormData.forEach((value, key) => {
        formObject[key] = value;
    });
    users.push(formObject);
    saveUsers(users);
}


 async function saveUsers(users) {
    try {
        let response = await fetch('/register', { // Правильный URL для запроса
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Убедитесь, что установлены правильные заголовки
            },
            body: JSON.stringify(users)
        });
        if (response.ok) {
            console.log('Группы успешно сохранены');
            window.location.href = '/name/' + users[users.length - 1].FirstName;//переадрасація на сторінку користувача
        } else {
            console.error('Не удалось сохранить группы', error);
        }
    } catch (error) {
        console.error('Ошибка:', error);
    }
}*/
