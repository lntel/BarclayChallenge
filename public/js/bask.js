const basket = getBasket();
const price = document.querySelector('h2');
const container = document.querySelector('.container');

console.log(basket)

const calcTotal = (prices) => {
    return (prices.length && parseFloat(prices[0]) + calcTotal(prices.slice(1))) || 0;
}

let prices = [];

if(basket && basket.length) {


    basket.map(item => {

        const e = document.createElement('div');

        e.className = 'card products w-50';

        e.innerHTML = `
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <p class="card-text">${item.description}</p>
          <a href="#" class="btn btn-primary" data-id="${item.id}">Remove</a>
        </div>
        `;

        container.appendChild(e)

        prices.push(item.price);

    });

    price.innerText = `Total: £${calcTotal(prices)}`

    const btns = document.querySelectorAll('.btn.btn-primary');

    Array.from(btns).map(btn => {
        btn.addEventListener('click', (e) => {

            e.target.parentElement.parentElement.remove()

            const {id} = e.target.dataset;

            const item = basket.find(item => item.id == id);

            price.innerText = `Total: £${parseInt(price.innerText.substr(8, price.innerText.length)) - item.price}`

            removeBasketItem(id);
        })
    })

}