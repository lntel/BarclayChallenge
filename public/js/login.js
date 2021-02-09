const loginBtn = document.querySelector('#login-btn');

const successMsg = document.querySelector('#msgbox');

const email = document.querySelector('#email');
const password = document.querySelector('#password');

const msgbox = document.querySelector('#myAlert');

loginBtn.addEventListener('click', async (e) => {
    e.preventDefault();

    try {
        const response = await Request('user/login', {
            type: 'POST',
            data: {
                emailAddress: email.value,
                password: password.value
            }
        });

        console.log(response.status)

        if(response.status === 200) {
            // document.cookie += ''

            msgbox.classList.add('alert-success');

            msgbox.style.display = 'block';

            msgbox.innerHTML = `
            <strong>Success!</strong> ${response.data.message}
            `;

            const x = setTimeout(() => {
                msgbox.style.display = 'none';
                clearTimeout(x);
            }, 3000);

            
        } else {
            msgbox.classList.add('alert-danger');

            msgbox.style.display = 'block';

            msgbox.innerHTML = `
            <strong>Success!</strong> ${response.data.message}
            `;

            const x = setTimeout(() => {
                msgbox.style.display = 'none';
                clearTimeout(x);
            }, 3000);
        }

    }
    catch(err) {
        msgbox.classList.add('alert-danger');

            msgbox.style.display = 'block';

            msgbox.innerHTML = `
            <strong>Error!</strong> An error occurred
            `;

            const x = setTimeout(() => {
                msgbox.style.display = 'none';
                clearTimeout(x);
            }, 3000);
    }
})