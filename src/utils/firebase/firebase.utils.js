import { initializeApp } from 'firebase/app';
import {
getAuth,
signInWithRedirect,
signInWithPopup,
GoogleAuthProvider,
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut,
} from 'firebase/auth'

import {
getFirestore,
doc,
getDoc,
setDoc,
collection,
writeBatch,
query,
getDocs
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

  export const addCollectionAndDocument = async (collectionKey, objectToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectToAdd.forEach(object => {

      const docRef = doc(collectionRef, object.title.toLowerCase());
      batch.set(docRef, object)
    });

    await batch.commit()
    console.log("done");
  }

export const getCategoriesAndDocument = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapShot = await getDocs(q);

  const categoryMap = querySnapShot.docs.reduce((acc, docSnapShot) => {
    const { title, items } = docSnapShot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {})

  return categoryMap;
}

  export const createUserDocumentFromAuth = async (userAuth, 
    additionalInformation = {}) => {
    if(!userAuth) return;
    
    const userDocRef = doc(db, 'user', userAuth.uid)

    const userSnapshot = await getDoc(userDocRef)
    if(!userSnapshot.exists()){
        const { displayName, email} = userAuth;
        const createdAt = new Date();
        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });
        } catch(error){
            console.log('error', error.message);
        }
    }
    return userDocRef
  }

  export const createAuthUSerEmailandPassword = async (email,password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password)
  }


  export const signAuthUSerEmailandPassword = async (email,password) => {
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password)
  }

  export const SignOutUser = async () => await signOut(auth)