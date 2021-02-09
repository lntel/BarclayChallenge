const loginBtn = document.querySelector('#login-btn');

const successMsg = document.querySelector('#msgbox');

const email = document.querySelector('#email');
const password = document.querySelector('#password');

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
        }

    }
    catch(err) {
        $('#msgbox').toast(option)
    }
})