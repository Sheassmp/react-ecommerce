import React from 'react';
import {connect} from 'react-redux';

import {addItem} from '../../redux/cart/cart.actions';

import {  CollectionItemContainer,  CollectionImage, CollectionFooter, NameContainer, PriceContainer, AddButton } from './collection-item.styles';

const CollectionItem = ({item, addItem }) => {
    const { name, price, imageUrl} = item;

    return (
    <CollectionItemContainer>
        <CollectionImage className='image' imageUrl={imageUrl}/>
        <CollectionFooter>
            <NameContainer>{name}</NameContainer>
            <PriceContainer>{price}</PriceContainer>
        </CollectionFooter>
        <AddButton onClick={() => addItem(item)} inverted>
         Add to cart
        </AddButton>
    </CollectionItemContainer>
    )};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(
    null,
    mapDispatchToProps
)(CollectionItem);