const tbody = document.querySelector('tbody');

const getProducts = async () => {

    const response = await Request('product', {
        type: 'GET'
    });

    if(response.status === 200) {

        if(response.data.length) {
            response.data.map(item => {
                const e = document.createElement('tr');

                e.innerHTML = `
                    <th scope="row">${item.id}</th>
                    <td>${item.name}</td>
                    <td><a href="${item.imageUrl}">Image</a></td>
                    <td>${item.description}</td>
                    <td>${item.quantity}</td>
                    <td>£${item.price}</td>
                    <td><button class="btn btn-primary" type="submit" data-id="${item.id}">Delete</button></td>
                `;

                tbody.appendChild(e)
            })

            const btns = Array.from(document.querySelectorAll('.btn.btn-primary'))

            btns.map(btn => {
                btn.addEventListener('click', async (e) => {

                    const result = await Request(`product/${e.target.dataset.id}`, {
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

getProducts();