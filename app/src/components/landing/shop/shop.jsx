import React from 'react';
import shopStyles from "./shop.module.css";

const Shop = () => {
    return (
        <div className={shopStyles.shop}>
            <p>Get up to 24 months of No Cost EMI <span className={shopStyles.symbol}>‡</span> plus up to ₹10000.00 instant cashback* on selected products with eligible cards. <a>Shop {'>'}</a></p>
        </div>
    );
};

export default Shop;