import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';
import FlipMove from "react-flip-move";

function CheckoutProduct({id, image,title,price,rating,hideButton}) {

    const [{ basket }, dispatch] = useStateValue();  // for pulling data from data layer
    const removeFromBasket = () => {
        //remove item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }
    return (
      <div className="checkoutProduct">
        <img className="checkoutProduct_image" src={image} />
        <div className="checkoutProduct_info">
          <p className="checkProduct_title">{title}</p>
          <p className="checkoutProduct_price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="checkoutProduct_rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>
          {!hideButton && (
            <button onClick={removeFromBasket}>Remove from Basket</button>  // Only render this button if its not hidden
          )}
        </div>
      </div>
    );
}

export default CheckoutProduct
