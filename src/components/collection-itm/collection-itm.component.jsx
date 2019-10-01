import React from 'react';


import './collection-itm.styles.scss';

const CollectionItm = ({id, name, price, imageUrl }) => (
    <div className='collection-itm'>
        <div
        className='image'
        style={{
            backgroundImage: `url(${imageUrl})`
        }}
        />
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
    </div>
);

export default CollectionItm;