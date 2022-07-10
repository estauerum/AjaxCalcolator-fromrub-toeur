let inputRub = document.querySelector('#rub'),
    inputEur = document.querySelector('#eur');


    inputRub.addEventListener('input', () => {
        let request = new XMLHttpRequest();

        request.open('GET', 'current.json');
        request.setRequestHeader ('Content-Type', 'application/json; charset=utf-8');
        request.send();

        request.addEventListener('readystatechange', function() {
            if (request.readyState === 4 && request.status == 200) {
                let data = JSON.parse(request.response); //response ответ от сервера
                inputEur.value = inputRub.value / data.eur;
            } else {
                inputEur.value = 'Что-то пошло не так';
            }
        });
    });