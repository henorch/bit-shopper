import './cart-icon.styles.scss'
import { ReactComponent as ShoppinIcon} from '../../assets/shopping-bag.svg'
import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'

const CartIcon = ()=> {
    const { isCartOpen , setIsCartOpen } = useContext(CartContext)
    const { cartItems} = useContext(CartContext)

    const count = cartItems.length;
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <div className='cart-icon-container' onClick={toggleIsCartOpen}>
            <ShoppinIcon className='shopping-icon'/>
            <span className='item-count'>{count}</span>
        </div>
    )
}

export default CartIcon;