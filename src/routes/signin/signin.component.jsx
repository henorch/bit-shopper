import { signWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"

const SIGNIN  = () => {

    const logGoogleUser = async () => {
        const {user} = await signWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
    }
    return  (
        <div>
    <p> I am sign in page</p>
    <button onClick={logGoogleUser}>SIGN IN WITH GOOGLE</button>
    </div>
    )
}

export default SIGNIN