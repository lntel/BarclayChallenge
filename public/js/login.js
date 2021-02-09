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

        if(response.status === 200) {
            // document.cookie += ''

            msgbox.style.display = 'block';

            const x = setTimeout(() => {
                msgbox.style.display = 'none';
            }, 3000);
            
        }

    }
    catch(err) {
        $('#msgbox').toast(option)
    }
})