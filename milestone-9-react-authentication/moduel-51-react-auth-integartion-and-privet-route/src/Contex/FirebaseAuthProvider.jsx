import React from 'react';
import { AuthContext } from './AuthContex';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithCredential, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/firebase.init';



const FirebaseAuthProvider = ({ children }) => {
const createUser = ( email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password)
}

const signInUser = (email,password) =>{
    return signInWithEmailAndPassword(auth, email, password)
}

onAuthStateChanged(auth, (currentUser) =>{
if(currentUser){
    console.log("has current user")
}
else{
    console.log("no current user")
}
})

    const userInfo  = {
        createUser,
        signInUser
    }
    
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default FirebaseAuthProvider;
