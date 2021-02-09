const getBasket = () => {
    const items = localStorage.getItem('basket');

    return JSON.parse(items);
}

const addBasketItem = (item) => {
    let basket = getBasket();

    if(!basket) {
       basket = []; 
    }

    basket.push(item);

    localStorage.setItem('basket', JSON.stringify(basket));
}

const removeBasketItem = (id) => {
    const basket = getBasket();

    const index = basket.findIndex(item => item.id == id);

    basket.splice(index, 1);

    localStorage.setItem('basket', JSON.stringify(basket));
}
