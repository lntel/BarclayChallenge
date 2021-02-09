
const msgbox = document.querySelector('#myAlert');
const bookBtn = document.querySelector('#bookbtn');

bookBtn.addEventListener('click', async (e) => {
    e.preventDefault();

    const forename = document.querySelector('#firstname').value;
    const surname = document.querySelector('#lastname').value;
    const email = document.querySelector('#email').value;
    const phone = document.querySelector('#phone').value;
    const site = document.querySelector('#sites').value;
    const date = document.querySelector('#date').value;
    const time = document.querySelector('#time').value;

    await Request('appointment', {
        type: 'POST',
        data: {
            date: date,
            time: time
        }
    });

    msgbox.classList.add('alert-success');

    msgbox.style.display = 'block';

    msgbox.innerHTML = `
    <strong>Success!</strong> Your appointment has been booked for ${date} at ${time}!
    `;

    const x = setTimeout(() => {
        msgbox.style.display = 'none';
        clearTimeout(x);

        location.href = 'payForm.html';
    }, 3000);


})