
import './cart-item.styles.scss'


const CartItem = ({ cartItem }) => {

    const { name, imageUrl, quantity, price }  = cartItem;
    return(
        <div className='cart-item-container'>
            <img src={imageUrl} alt={`${name}`}/>
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='qty'>{quantity}</span>
                <span className='price'>{price}</span>
            </div>
        </div>
    )
}
export default CartItem