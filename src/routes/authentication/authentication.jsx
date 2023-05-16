import { AuthContainer } from './authentication.styles'


import SignIn  from '../../components/sign-in/sign-in.component'
import  SignUp  from '../../components/sign-up/sign-up.component'

const Authentication  = () => {
    return  (
    <>
        <h2>Welcome to BitShopper</h2>
        <AuthContainer>
        <SignIn/>
        <SignUp/>
        </AuthContainer>
    </>
    )
}

export default Authentication