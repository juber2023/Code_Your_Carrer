// use local storage to manage cart data
const addToDb = id => {
    let shoppingCart = getShoppingCart();
    // add quantity
    const quantity = shoppingCart[id];
    if (!quantity) {
        shoppingCart[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

const removeFromDb = id => {
    // const shoppingCart = getShoppingCart();
    // if (id in shoppingCart) {
    //     delete shoppingCart[id];
    //     localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    localStorage.removeItem('shopping-cart')
    id([])
    // }
}

const getShoppingCart = () => {
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}

const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}

export const productsAndCartData=async()=>{
    const productsData=await fetch('fakeJobList.json')
    const products= await productsData.json()
    const savedCart=getShoppingCart()
    let cartArray=[]
    for(const id in savedCart){
        const foundProduct=products.find(product=>product.id===id)
        if(foundProduct){
            foundProduct.quantity=savedCart[id]
            cartArray.push(foundProduct)
        }
    }
    return {cartArray, products}
}

export {
    addToDb,
    removeFromDb,
    getShoppingCart,
    deleteShoppingCart
}
