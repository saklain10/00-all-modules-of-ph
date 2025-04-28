import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Contex/AuthContex';

const Login = () => {

const {signInUser} = use(AuthContext);

    const handleLogin = e =>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email,password)

        signInUser(email, password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.log(error)
        })
    }




    return (

        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-6 border border-amber-100">
            <div className="card-body">
                <h1 className="text-3xl text-center font-bold">Login now!</h1>
                <form onSubmit={handleLogin} className=''>
                    <label className="label">Email</label>
                    <input type="email" name="email" className="input mb-2" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" name="password" className="input mb-2" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-2 w-full">Login</button>
                </form>
                <p className=''>New to this site? Please <Link className='underline text-blue-500' to="/register">Sign Up</Link></p>
            </div>
        </div>

    );
};

export default Login;