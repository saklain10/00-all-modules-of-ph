import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../../public/firebase.init';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router';




const SingUp = () => {
    const [errorMessage, setErrorMessage] = useState("")
    const [success, setSuccess] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const handleSignUp = e => {
        e.preventDefault();
        const name = e.target.name.value
        const photo = e.target.photo.value
        const email = e.target.email.value
        const password = e.target.password.value
        const terms = e.target.terms.checked;
        console.log(email, password, terms)
        setSuccess(false)
        setErrorMessage('')

        if (!terms) {
            setErrorMessage("Please Accept Our Terms and Conditions")
            return
        }

        // password valid
        const passwordRegExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/
        if (passwordRegExp.test(password) === false) {
            setErrorMessage("password must have one lowercase, oneuppercase, one digit and 6 char")
            return; // ret dwr karon error dile ekhanei stop
        }



        //create user 
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result)

                //email verification
                // sendEmailVerification(result.user)
                sendEmailVerification(auth.currentUser).then(() => {
                    setSuccess(true)
                    alert("We send you a verification Email. Please Check and confirm teh verification")
                })

                //Update User Profile
                const profile = {
                    displayName: name,
                    photoURL: photo
                }
                updateProfile(auth.currentUser, profile).then(()=> {
                    console.log('User profile updated')
                })
                .catch(error=>console.log(error))
            })
            .catch(error => {
                console.log(error)
                setErrorMessage(error.message)
            })



    }

    return (

        <div className="hero-content flex-col lg:flex-row-reverse">

            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h2 className="text-3xl font-bold mx-auto">Please Sign UP now!</h2>

                    <form onSubmit={handleSignUp}>
                        <label className="mt-2 label mb-1">Your Name</label>
                        <input type="text" name='name' className="input" placeholder="Your Name" />
                        <label className=" mt-2 label mb-1">Photo URL</label>
                        <input type="text" name='photo' className="input" placeholder="Photo URL" />
                        <label className="mt-2 label mb-1">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />
                        <label className="label mt-2 mb-1">Password</label>
                        <div className='relative'>
                            <input type={showPassword ? 'text' : "password"} name='password' className="input" placeholder="Password" />
                            <button type='button'
                                onClick={() => { setShowPassword(!showPassword) }}
                                className='btn btn-xs absolute top-2 right-6'>{showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>                        

                        <label className="label pt-2">
                            <input name='terms' type="checkbox" className="checkbox" />
                            Accept terms and condition
                        </label>


                        <br />
                        <button className="btn btn-neutral mt-4">Sign UP</button>
                    </form>
                    <p>
                        Already Have an Account? Please <Link className='font-bold  text-blue-600' to='/login' >Login</Link>
                    </p>
                    {
                        errorMessage && <p className='text-red-500'>{errorMessage}</p>
                    }
                    {
                        success && <p className='text-green-500'>User has Created Successfully</p>
                    }
                </div>
            </div>

        </div>
    );
};

export default SingUp;