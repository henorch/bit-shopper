import { useState, useContext } from "react";
import './sign-up.styles.scss';
import { createAuthUSerEmailandPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import { UserContext } from "../../context/user.context";
import FormInput from "../Form/form.components";
import Button from "../button/button.component";

const defaultFieldVale = {
    displayName:"",
    email:"",
    password:"",
    confirmPassword:""
}


const SignUp = ()=>{

    const [ formField, setFormField] = useState(defaultFieldVale);

    const { displayName, email, password, confirmPassword} = formField;
    const { setCurrentUser} = useContext(UserContext)
    const resetFormField = () => setFormField(defaultFieldVale)
    const handleSubmit = async  (e) => {
        e.preventDefault();
        if(password !== confirmPassword){
            alert("pasword do notmatch")
            return;
        }
        try {
            const {user} = await createAuthUSerEmailandPassword(
                email,
                password);

                await createUserDocumentFromAuth(user, {displayName})
                setCurrentUser(user)
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

    return(
        <div className="sign-up-container">
            <h2>Sign Up</h2>
            <span>create an account with your email</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                        label="Display Name"
                        required
                        type="text"
                        name="displayName"
                        onChange={handleOnChange}
                        value={displayName} />

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

                <FormInput
                        label="Confirm Password"
                        required
                        type="password"
                        name="confirmPassword"
                        onChange={handleOnChange}
                        value={confirmPassword} />

                    <Button type="submit">SUBMIT</Button>
            </form>
        </div>
    )
}


export default SignUp;