import React from 'react';
import buyButtonStyles from "./buy.module.css"

const BuyButton = () => {
    return (
        <button className={buyButtonStyles.button}>
            Buy
        </button>
    );
};

export default BuyButton;