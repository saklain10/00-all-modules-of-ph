import React, { useRef } from 'react';

const UncontrolledField = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(emailRef.current.value)
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email,password)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={emailRef} type="email" name='' placeholder='Email' />
                <br />
                <input ref={passwordRef} type="password" name='' placeholder='Password' />
                <br />
                <input type="submit" name="" id="" value="Submit" />

            </form>
        </div>
    );
};

export default UncontrolledField;