import React from "react";

export const Price = (props) => {
    const price = props.selectedPrices.reduce((acc, item) => acc + item, 0);
    
    return (
        <div>
            <p>Total Amount: ${price.toFixed(2)}</p>
        </div>
    )
}