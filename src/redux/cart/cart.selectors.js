import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartitems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartitemsCount = createSelector(
    [selectCartitems],
    cartItems =>
    cartItems.reduce(
        (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity,
    0)
);