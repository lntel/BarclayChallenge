const tbody = document.querySelector('tbody');

const getServices = async () => {

    const response = await Request('hairdresser', {
        type: 'GET'
    });

    if(response.status === 200) {

        if(response.data.length) {
            response.data.map(staff => {
                const e = document.createElement('tr');

                e.innerHTML = `
                    <th scope="row">${staff.id}</th>
                    <td>${staff.forename}</td>
                    <td>${staff.surname}</td>
                    <td>${staff.description}</td>
                    <td>${staff.site.city}</td>
                    <td><button class="btn btn-primary" type="submit" data-id="${staff.id}">Delete</button></td>
                `;

                tbody.appendChild(e)
            })

            const btns = Array.from(document.querySelectorAll('.btn.btn-primary'))

            btns.map(btn => {
                btn.addEventListener('click', async (e) => {

                    const result = await Request(`hairdresser/${e.target.dataset.id}`, {
                        type: 'DELETE'
                    });

                    if(result.status === 200) {
                        e.target.parentElement.parentElement.remove();
                    }
                })
            })
        }

    } else {
        
    }

}

getServices();