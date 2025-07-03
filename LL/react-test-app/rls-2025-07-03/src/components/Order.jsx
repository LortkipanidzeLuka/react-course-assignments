import { useState } from "react";
import { restaurantMenu } from "../mock/restaurant-menu";
import { MenuListItem } from "./MenuListItem";
import { Price } from "./Price";

export const Order = () => {
    const [selectedItems, setSelectedItems] = useState([]);
    const data = restaurantMenu;

    const handleSelection = (itemId, isSelected) => {
        if (isSelected) {
            setSelectedItems(prev => [...prev, itemId]);
        } else {
            setSelectedItems(prev => prev.filter(id => id !== itemId));
        }
    }

    const getSelectedPrices = () => {
        return selectedItems.map(itemId => {
            const item = data.find(menuItem => menuItem.id === itemId);
            return item ? item.price : 0;
        });
    }

    return (
        <div>
            <div>
                {data.map((item) => (
                    <MenuListItem 
                        key={item.id} 
                        menuItem={item} 
                        setSelected={handleSelection}
                        isSelected={selectedItems.includes(item.id)}
                    />
                ))}
            </div>
            <Price selectedPrices={getSelectedPrices()} />
        </div>
        
    )
}