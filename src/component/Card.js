import React from 'react'

export const Card = ({image,title}) => {
    return (
        <div className='card'>
            <img src={image} alt='' className='card_image'/>
            <h1 className='card_title'>{title}</h1>
        </div>
    );
};

export default Card;