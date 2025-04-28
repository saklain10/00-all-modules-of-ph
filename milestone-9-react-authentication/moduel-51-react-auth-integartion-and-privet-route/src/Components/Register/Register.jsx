// import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Contex/AuthContex';
// import { auth } from '../../Firebase/firebase.init';

const Register = () => {

    const {createUser} = use(AuthContext)
    // console.log(userInfo)


    const handleRegister = e =>{
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(name,email,password)

        // //create user
        // createUserWithEmailAndPassword(auth, email, password).then(result=>{
        //     console.log(result)
        // })
        // .catch(error=>{
        //     console.log(error)
        // })

        createUser(email,password)
        .then(result=>console.log(result))
        .then(error => console.log(error))

    }


    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto m-6 border border-amber-100">
            <div className="card-body">
                <h1 className="text-3xl text-center font-bold">Register Now</h1>
                <form onSubmit={handleRegister} className=''>
                    <label className="label">Name</label>
                    <input type="text" name="name" className="input mb-2" placeholder="Name" />
                    <label className="label">Email</label>
                    <input type="email" name="email" className="input mb-2" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" name="password" className="input mb-2" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-2 w-full">Sign Up</button>
                </form>
                <p className=''>Already have an account? Please <Link className='underline text-blue-500' to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;