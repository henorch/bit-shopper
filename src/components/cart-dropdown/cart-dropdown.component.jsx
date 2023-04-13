import { useContext } from 'react';
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss'
import { CartContext } from '../../context/cart.context';
import { useNavigate } from 'react-router-dom';


const CartDropDown = () => {
    const { cartItems, cartCount } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheck = () => {
        navigate('/checkout')
    }
    
    return (
        <div className='cart-dropdown-container'>
            {!cartCount && <span className='empty-message'>You Cart is currently empty</span>}
            <div className='cart-items'>
                {cartItems.map(item => <CartItem key={item.id} cartItem={item}/>)}
                 </div>
            <Button onClick={goToCheck}>CHECKOUT</Button>
        </div>
    )
}

export default CartDropDown;