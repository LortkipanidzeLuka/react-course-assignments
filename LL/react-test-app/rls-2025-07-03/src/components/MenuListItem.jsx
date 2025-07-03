import React from "react";

export const MenuListItem = ({setSelected, menuItem, isSelected}) => {

    const handleChange = () => {
        setSelected(menuItem.id, !isSelected);
    }

    return (
        <div>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "50%" }}>
                <h1>{menuItem.name}</h1>
                <p>{menuItem.category}</p>
                <p>{menuItem.description}</p>
                <p>${menuItem.price.toFixed(2)}</p>
                <p>{menuItem.isSoldOut ? "Sold Out" : "Available"}</p>
            </div>
            <input 
                type="checkbox" 
                checked={isSelected} 
                onChange={handleChange}
                disabled={menuItem.isSoldOut}
            />

        </div>
    )
}