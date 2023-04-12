import { useContext } from 'react';
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss'
import { CartContext } from '../../context/cart.context';


const CartDropDown = () => {
    const { cartItems, cartCount } = useContext(CartContext);

    return (
        <div className='cart-dropdown-container'>
            {!cartCount && <span className='empty-message'>You Cart is currently empty</span>}
            <div className='cart-items'>
                {cartItems.map(item => <CartItem key={item.id} cartItem={item}/>)}
                 </div>
            <Button>CHECKOUT</Button>
        </div>
    )
}

export default CartDropDown;