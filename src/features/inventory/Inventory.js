import React, { useEffect } from 'react';

import { getCurrencySymbol, calculatePrice } from '../../utils/utils';
import { loadData } from './inventorySlice';
import { addItem } from '../cart/cartSlice';

export default function Inventory({inventory, currencyFilter, dispatch}) {
    
    const onMount = () => {
        dispatch(loadData());
    };
    useEffect(onMount, [dispatch])

    const onClickHandler = (inventoryItem) => {
        dispatch(addItem(inventoryItem));
    }

    return (
        <ul id='inventory-container'>
            {inventory.map(createInventoryItem)}
        </ul>
    )

    function createInventoryItem(inventoryItem){
        const {price, name, img} = inventoryItem;
        const displayPrice = calculatePrice(price, currencyFilter);

        return (
            <li key={name} className='item'>
                <img src={img} alt={''} />
                <h3>{name}</h3>
                <h3 className='price'>
                    {getCurrencySymbol(currencyFilter)}
                    {displayPrice.toFixed(2)} {currencyFilter}
                </h3>
                <button
                    onClick={() => onClickHandler(inventoryItem)}
                    className='add-to-cart-button'
                >
                    Add to Cart
                </button>
            </li>
        )
    }
}
