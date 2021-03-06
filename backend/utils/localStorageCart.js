function addToCart(product, type) {
    if(typeof window !== "undefined") {
        let cart = JSON.parse(window.localStorage.getItem('cart'));
        if(!cart) {
            cart = initCart();
        } 
        if(type !== 'sub') {
            return window.localStorage.setItem('cart', JSON.stringify(addQuantityProduct(cart, product)));
        }
        return  window.localStorage.setItem('cart', JSON.stringify(substractQuantityProduct(cart, product)));
    }
}

function removeFromCart(id) {
    if(typeof window !== "undefined") {
        let cart = JSON.parse(window.localStorage.getItem('cart'));
        const filteredCart = cart.filter(item => item.id !== id);
        window.localStorage.setItem('cart', JSON.stringify(filteredCart));
    }
}

function getCart() {
    if(typeof window !== "undefined") {
        return JSON.parse(window.localStorage.getItem('cart'));
    }
    return [];
}

function initCart() {
    if(typeof window !== "undefined") {
        window.localStorage.setItem('cart', JSON.stringify([]));
        return JSON.parse(window.localStorage.getItem('cart'));
    }
    return [];
};

function addQuantityProduct(cart, product) {
    const productInCart = cart.find(prod => prod.id === product.id);
    if(productInCart) {
        const filteredCart = cart.filter(item => item.id !== product.id);
        product.quantity++;
        return [...filteredCart, product]
    }
    return [...cart, product]; 
}


function substractQuantityProduct(cart, product) {
    const productInCart = cart.find(prod => prod.id === product.id);
    if(productInCart) {
        const filteredCart = cart.filter(item => item.id !== product.id);
        product.quantity--;
        return [...filteredCart, product]
    }
    return [...cart, product]; 
}
export default {
    addToCart,
    removeFromCart,
    getCart
}

