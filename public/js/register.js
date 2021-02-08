const signupbtn = document.querySelector('#signupbtn');

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

    console.log(response)
})