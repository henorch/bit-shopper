import { initializeApp } from 'firebase/app';
import {
getAuth,
signInWithRedirect,
signInWithPopup,
GoogleAuthProvider 
} from 'firebase/auth'

import {
getFirestore,
doc,
getDoc,
setDoc
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDF9Y5W4COG2z5od-3-bJfw2nwM-50PA1E",
    authDomain: "bit-shopper-db.firebaseapp.com",
    projectId: "bit-shopper-db",
    storageBucket: "bit-shopper-db.appspot.com",
    messagingSenderId: "864710076255",
    appId: "1:864710076255:web:c48d6a2e937e63845bf8ea"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signWithGooglePopup = () => signInWithPopup(auth, provider)

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'user', userAuth.uid)

    const userSnapshot = await getDoc(userDocRef)
    if(!userSnapshot.exists()){
        const { displayName, email} = userAuth;
        const createdAt = new Date();
        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch(error){
            console.log('error', error.message);
        }
    }
    return userDocRef
  }