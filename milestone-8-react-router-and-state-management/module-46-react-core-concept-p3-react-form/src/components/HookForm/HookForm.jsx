import React from 'react';
import useInputField from '../../Hooks/useInputField';

const HookForm = () => {
    const [name, nameOnChange] = useInputField('');
    const [email, emailOnChange] = useInputField('')
    const [password, passWordOnChange] = useInputField('')
    const handleSubmit = e => {
        e.preventDefault();
        console.log('submit', name, email, password)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input defaultValue={name} onChange={nameOnChange} type="text" />
                <br />
                <input type="email" onChange={emailOnChange} name="" id="" />
                <br />
                <input type="password" onChange={passWordOnChange}/>
                <input type="submit" value="Submit" />
            </form>

        </div>
    );
};

export default HookForm;