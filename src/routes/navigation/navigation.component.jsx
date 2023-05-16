import { Fragment, useContext } from "react"

import { Link, Outlet } from "react-router-dom"
import { UserContext } from "../../context/user.context"
import { SignOutUser } from "../../utils/firebase/firebase.utils"
import CartIcon from "../cart-icon/cart-icon.component"
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component"
import { CartContext } from "../../context/cart.context"



import {NavigationContainer, NavLinkContainer, NavLink, LogoContainer}  from './navigation.styles'

const Navigation  = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext); 
  
  const signoutHandler = async () => {
    const resp = await SignOutUser()
    setCurrentUser(null)
  } 

    return(
      <Fragment>
        <NavigationContainer>
      <LogoContainer to='/'>
        <h3>BitBuyers</h3>
        </LogoContainer>
      <NavLinkContainer>
        <NavLink to='/Shop'>
          SHOP
        </NavLink>
        {
          currentUser ? (<NavLink as="span" to='/auth' onClick={signoutHandler}>
          SIGNOUT
        </NavLink>) : (<NavLink to='/auth'>
          SIGNIN
        </NavLink>)
        }
        <CartIcon/>
      </NavLinkContainer>
      {isCartOpen && <CartDropDown/>}
      </NavigationContainer>
      <Outlet/>
      </Fragment>
    )
  }

  export default Navigation