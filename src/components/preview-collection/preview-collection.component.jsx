import React from 'react';

import CollectionItm from '../collection-itm/collection-itm.component';

import './preview-collection.styles.scss';

const PreviewCollection = ({title, items}) => (
    <div className='preview-collection'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items
                    .filter((item, idx) => idx < 4)
                    .map((item) => (
                 <CollectionItm key={item.id} item={item} />  
                ))}
        </div>
    </div>
);

export default PreviewCollection;