import { Fragment } from "react"
import './navigation.styles.scss'
import { Link, Outlet } from "react-router-dom"


const Navigation  = () => {
    return(
      <Fragment>
        <div className="nav-container">
      <Link className="nav-container-logo" to='/'>
        <h3>BitBuyers</h3>
        </Link>
      <div className="nav-container-link">
        <Link className="nav-link" to='/Shop'>
          SHOP
        </Link>
        <Link className="nav-link" to='/signin'>
          SIGNIN
        </Link>
      </div>
      </div>
      <Outlet/>
      </Fragment>
    )
  }

  export default Navigation