import { Fragment, useContext } from "react"
import './navigation.styles.scss'
import { Link, Outlet } from "react-router-dom"
import { UserContext } from "../../context/user.context"
import { SignOutUser } from "../../utils/firebase/firebase.utils"
import CartIcon from "../cart-icon/cart-icon.component"
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component"
import { CartContext } from "../../context/cart.context"


const Navigation  = () => {
  const { currentUser,setCurrentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext); 
  const signoutHandler = async () => {
    const resp = await SignOutUser()
    setCurrentUser(null)
  } 

  console.log(isCartOpen);
    return(
      <Fragment>
        <div className="navigation">
      <Link className="nav-container-logo" to='/'>
        <h3>BitBuyers</h3>
        </Link>
      <div className="nav-links-container">
        <Link className="nav-link" to='/Shop'>
          SHOP
        </Link>
        {
          currentUser ? (<Link className="nav-link" to='/auth' onClick={signoutHandler}>
          SIGNOUT
        </Link>) : (<Link className="nav-link" to='/auth'>
          SIGNIN
        </Link>)
        }
        <CartIcon/>
      </div>
      {isCartOpen && <CartDropDown/>}
      </div>
      <Outlet/>
      </Fragment>
    )
  }

  export default Navigation