import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector} from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartitemsCount } from '../../redux/cart/cart.selectors';


import { CartContainer, ShoppingIcon, ItemCountContainer } from './cart-icon.styles';

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <CartContainer onClick={toggleCartHidden}>
        <ShoppingIcon />
        <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartContainer>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});


//selector
const mapStateToProps = createStructuredSelector({
    itemCount: selectCartitemsCount
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartIcon);