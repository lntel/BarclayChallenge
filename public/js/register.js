const signupbtn = document.querySelector('#signupbtn');

const msgbox = document.querySelector('#myAlert');

signupbtn.addEventListener('click', async (e) => {
    e.preventDefault();

    const confirmPassword = document.querySelector('#passwordconfirm').value;

    const data = {
        forename: document.querySelector('#firstname').value,
        surname: document.querySelector('#lastname').value,
        emailAddress: document.querySelector('#email').value,
        mobileNumber: document.querySelector('#phone').value,
        password: document.querySelector('#password').value
    }

    if(data.password !== confirmPassword) {
        return; // TODO add password not match here
    }

    const response = await Request('user/', {
        type: 'POST',
        data: data
    });

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

    console.log(response)
})