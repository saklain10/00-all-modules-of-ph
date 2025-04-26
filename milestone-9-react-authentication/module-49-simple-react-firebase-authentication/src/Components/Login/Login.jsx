import React, { useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';

const Login = () => {

    const [user, setUser] = useState(null)

    const provider = new GoogleAuthProvider
    const gitHubProvider = new GithubAuthProvider

    const handleGoogleSignIn = () =>{
        console.log("google sign in clicked")
        

        signInWithPopup(auth, provider)
        .then(result => {
            console.log(result)
            console.log(result.user)
            setUser(result.user)

        })
        .catch(error=>{
            console.log(error)
        }) 
    }

    const handleGitHubSignIn = () =>{
        // console.log("github sign in clicked")
        signInWithPopup(auth, gitHubProvider)
        .then(result => {
            const loggedInUser = result.user;
            // console.log(loggedInUser)
            if(!loggedInUser.email && loggedInUser?.providerData?.length){

            if(loggedInUser.providerData[0].email){
                loggedInUser.email = loggedInUser.providerData[0].email
                setUser(loggedInUser)
            }


                // const userEmail = loggedInUser.providerData[0].email
            }
            // setUser(loggedInUser)
        })
        .catch(error =>{
            console.log(error);
            
        })
    }

    const handleSignOut = () =>{
        signOut(auth).then(()=>{
            console.log('signOut completed')
            setUser(null)
        }).catch(error =>{
           console.log(error)
        })
    }
    return (
        <div>
            <h2>Please Login</h2>
            {/* <button onClick={handleGoogleSignIn}>Sign With Google</button>
            <button onClick={handleSignOut}>Sign Out</button> */}

            {
                user ? <button onClick={handleSignOut}>Sign Out</button> : 
                <>
                <button onClick={handleGoogleSignIn}>Sign In With Google</button>
                <button onClick={handleGitHubSignIn}>Sign In With GitHub</button>
                </>


            }
            {/* <div>
                <h3>{user?.displayName}</h3>
                <h3>{user?.email}</h3>
            </div>  //1*/} 
            {
                user &&  <div>
                    <h3>{user?.displayName}</h3>
                    <h3>{user?.email}</h3>
                    <img src={user.photoURL} alt="" />
                </div>  
                
            }

        </div>
    );
};

export default Login;