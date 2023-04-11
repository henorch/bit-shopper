import { useState } from "react";
import './sign-in.styles.scss';
import { signWithGooglePopup,
    signAuthUSerEmailandPassword,
    createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

import FormInput from "../Form/form.components";
import Button from "../button/button.component";

const defaultFieldVale = {
    email:"",
    password:"",
}


const SignIn = ()=>{

    const [ formField, setFormField] = useState(defaultFieldVale);

    const { email, password} = formField;

    const resetFormField = () => setFormField(defaultFieldVale)
    
    const SignInWithGoogle = async () => {
        const {user} = await signWithGooglePopup();
        await createUserDocumentFromAuth(user)
    }
    
    const handleSubmit = async  (e) => {
        e.preventDefault();
        
        try {
            const response = await signAuthUSerEmailandPassword(email,password);
            console.log(response);
           resetFormField()
            }  
        catch (error) {
            console.log("error", error);
        }
    }
    const handleOnChange = (e) => {
        const { name, value} = e.target;
        setFormField({...formField,
            [name]: value})
    }

    console.log(formField);
    return(
        <div className="sign-in-container">
            <h2>Sign In</h2>
            <span>Sign in with your email</span>
            <form onSubmit={handleSubmit}>
           

                <FormInput
                        label="email"
                        required
                        type="email"
                        name="email"
                        onChange={handleOnChange}
                        value={email}
                         />

                <FormInput
                        label="password"
                        required
                        type="password"
                        name="password"
                        onChange={handleOnChange}
                        value={password} />

                        <div className="buttoned-container">
                            <Button type="submit">SIGN IN</Button>
                            <Button buttonType="google" onClick={SignInWithGoogle}>GOOGLE SIGN-IN</Button>
                        </div>
            </form>
        </div>
    )
}


export default SignIn;