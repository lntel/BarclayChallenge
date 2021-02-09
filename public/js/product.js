const row = document.querySelector('.row');

const getProducts = async () => {

    try {
        const products = await Request('product', {
            type: 'GET'
        });

        products.data.map(product => {
            const e = document.createElement('div');

            e.className = 'col-lg-4 products col-xl-3 col-md-12';

            e.innerHTML = `
            <div class="card">
                <img class="card-img-top" src="${product.imageUrl}" alt="Card image cap">
                <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">£${product.price}</h6>
                <p class="card-text">${product.description}</p>
                <a href="#" class="btn btn-primary" data-id="${product.id}">Add to basket</a>
                <div class="card-footer text-muted mt-3">
                    ${product.quantity} in stock
                </div>
                </div>
            </div>
            `;

            row.appendChild(e);
        });

        const btns = document.querySelectorAll('.btn.btn-primary');

        Array.from(btns).map(btn => {
            btn.addEventListener('click', (e) => {
                addBasketItem(products.data.find(product => product.id == e.target.dataset.id));
            })
        })

        console.log(btns)

    } catch (error) {
        console.error(error);
    }
    
}

getProducts();