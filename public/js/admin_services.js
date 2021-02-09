const tbody = document.querySelector('tbody');

const getServices = async () => {

    const response = await Request('service', {
        type: 'GET'
    });

    if(response.status === 200) {

        if(response.data.length) {
            response.data.map(service => {
                const e = document.createElement('tr');

                e.innerHTML = `
                    <th scope="row">${service.id}</th>
                    <td>${service.name}</td>
                    <td>£${service.cost}</td>
                    <td><button class="btn btn-primary" type="submit" data-id="${service.id}">Delete</button></td>
                `;

                tbody.appendChild(e)
            })

            const btns = Array.from(document.querySelectorAll('.btn.btn-primary'))

            btns.map(btn => {
                btn.addEventListener('click', async (e) => {

                    const result = await Request(`service/${e.target.dataset.id}`, {
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