import './authentication.styles.scss'
import SignIn from "../sign-in/sign-in.component";
import SignUp from "../sign-up/sign-up.component";

const Authentication  = () => {
    return  (
    <div>
        <h2>Welcome to BitShopper</h2>
        <div className="auth-container">
        <SignIn/>
        <SignUp/>
        </div>
    </div>
    )
}

export default Authentication