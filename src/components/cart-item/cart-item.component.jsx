import React from 'react';


import { CartItemContainer, CartImage, ItemDetailsContainer, NameContainer } from './cart-item.styles';

const CartItem = ({ item:  { imageUrl, price, name, quantity}}) => (
    <CartItemContainer>
        <CartImage src={imageUrl} alt='item'/>
        <ItemDetailsContainer>
            <NameContainer>{name}</NameContainer>
            <span className='price'>
            {quantity} x ${price}</span>
        </ItemDetailsContainer>
    </CartItemContainer>
);

export default CartItem;

