import './checkout-item.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import Button from '../button/button.component'

const CheckoutItem = ({ cartItem }) => {

    const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext)
    const { name, imageUrl, quantity, price }  = cartItem;
    return(
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img className='img' src={imageUrl} alt={`${name}`}/>
            </div>
            <span className='name'>{name}</span>
            
            <span className='quantity'><span className='value' onClick={()=> addItemToCart(cartItem)}>+</span>{quantity}<span className='value' onClick={()=> removeItemFromCart(cartItem)}>-</span></span> 
            
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={()=> clearItemFromCart(cartItem)}>&#10005;</div>
         </div>
    )
}

export default CheckoutItem;