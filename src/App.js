import React, {Component} from 'react';
import './App.css';
import 'h8k-components';
import ProductList from "./components/product-list";
import Cart from "./components/cart";

const title = "HackerShop";

class App extends Component {
    constructor() {
        super();
        const products = [...PRODUCTS].map((product, index) => {
            product.id = index + 1;
            product.image = `/images/items/${product.name.toLocaleLowerCase()}.png`;
            product.cartQuantity = 0;
            return product;
        });
        this.state = {
            cart: {
                items: []
            },
            products
        }
    }

    onProductQuantityChange=(product,action)=>{
        const cart = this.state.cart
        const products = this.state.products
        if(action === 1)
        {
            if(cart.items.filter(cartItem=>cartItem.item === product.name).length === 0 ){
                cart.items=[...cart.items,{item:product.name,quantity:product.cartQuantity+1}]
            }
            else{
               const index= cart.items.findIndex(cartItem=>cartItem.item === product.name)
               cart.items[index].quantity +=1
            }
            const productIndex = products.findIndex(productItem => product.name === productItem.name)
            products[productIndex].cartQuantity +=1  
        }
        if(action === 0){
            const index= cart.items.findIndex(cartItem=>cartItem.item === product.name)
               if(cart.items[index].quantity >1)
               {
                const index= cart.items.findIndex(cartItem=>cartItem.item === product.name)
                cart.items[index].quantity -=1
               }
               else{
                const index= cart.items.findIndex(cartItem=>cartItem.item === product.name)
                cart.items.splice(index,1)
               }
               const productIndex = products.findIndex(productItem => product.name === productItem.name)
               products[productIndex].cartQuantity -=1     
        }
        this.setState({cart,products})
    }
    render() {
        return (
            <div>
                <h8k-navbar header={title}></h8k-navbar>
                <div className="layout-row shop-component">
                    <ProductList products={this.state.products} onProductQuantityChange={this.onProductQuantityChange}/>
                    <Cart cart={this.state.cart}/>
                </div>
            </div>
        );
    }
}

export const PRODUCTS = [
    {
        name: "Cap",
        price: 5
    },
    {
        name: "HandBag",
        price: 30
    },
    {
        name: "Shirt",
        price: 35
    },
    {
        name: "Shoe",
        price: 50
    },
    {
        name: "Pant",
        price: 35
    },
    {
        name: "Slipper",
        price: 25
    }
];
export default App;
