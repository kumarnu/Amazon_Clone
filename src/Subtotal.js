import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format"
import { useStateValue } from './StateProvider';
import { getBasketSum } from './reducer';
import { useHistory } from 'react-router-dom';
function Subtotal() {
  const history = useHistory();
    const [{ basket }, dispatch] = useStateValue();
    return (
      <div className="subtotal">
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p>
                {/* //part of the homework */}
                Subtotal ({basket.length} items): <strong>{value}</strong>
              </p>
              <small className="subtotal_gift">
                <input type="checkbox" /> This order contains a gift
              </small>
            </>
          )}
          decimalScale={2}
          value={getBasketSum(basket)} // part of the homework
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
        <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
      </div>
    );
}

export default Subtotal
