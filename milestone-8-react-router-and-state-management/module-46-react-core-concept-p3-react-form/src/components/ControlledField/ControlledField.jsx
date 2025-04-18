//46-4 Use Custom hook to reduce duplication of the code

import React, { useState } from 'react';

const ControlledField = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, password)
        if (password.length < 6) {
            setError("p must 6 chr")
        }
        else {
            setError("")
        } ////submit korar pore bolbe
    }
    const handlePasswordOnChanged = e => {
        // console.log(e.target)
        console.log(e.target.value);
        setPassword(e.target.value);

        if (password.length < 6) {
            setError("password must 6 char")
        }
        else {
            setError('');
        } ///type korar sathe sathe bolbe
    }

    const handleEmailChange = e =>{
        setEmail(e.target.value)
    }

    const handleNameChange = e =>{
        setName(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleNameChange} type="text" name="" id="" defaultValue={name} placeholder='Name'/>
                <br />
                <input type="email" onChange={ handleEmailChange} defaultValue={email} name='email' placeholder='Email' required />
                <br />
                <input type="password" name='password' placeholder='Password' defaultValue={password} onChange={handlePasswordOnChanged} required />
                <br />
                <input type="submit" name="" id="" value="Submit" />

            </form>
            <p style={{ color: 'red' }}>
                <small>{error}</small>
            </p>
        </div>
    );
};

export default ControlledField;