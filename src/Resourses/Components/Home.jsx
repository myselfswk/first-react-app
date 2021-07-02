import React from 'react';
import './FirstApp.css';

function Home() {
    return (
        <div className="App">
            <h1>Home Page</h1>
            <div className="cart">
                <h1>Cart: 0</h1>
            </div>
            <div className="item">
                <img
                    src="https://i.gadgets360cdn.com/products/large/1555507135_635_samsung_galaxy_a60.jpg?downsize=*:180&output-quality=80"
                    alt="Samsung Phone"
                />
                <span>Samsung</span>
                <span>Price: 35,000 PKR</span>
                <button>Add To Cart</button>
            </div>
        </div>
    )
}

export default Home;
