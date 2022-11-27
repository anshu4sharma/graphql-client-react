import React, { useState } from 'react'
import { CREATE_USER_MUTATION } from '../GraphQl/Mutation';
import { useMutation } from '@apollo/client'
const Form = () => {
    const [createUser, { error }] = useMutation(CREATE_USER_MUTATION)
    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
        addUser()
    }
    const addUser = ()=>{
        createUser({
            variables:{
                ...inputs
            }
        })
    }
    if (error) {
        console.log(error);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Enter your name:
                <input
                    type="text"
                    name="name"
                    value={inputs.name || ""}
                    onChange={handleChange}
                />
            </label>
            <label>Enter your email:
                <input
                    type="email"
                    name="email"
                    value={inputs.email || ""}
                    onChange={handleChange}
                />
            </label>
            <label>Enter your post body:
                <input
                    type="text"
                    name="body"
                    value={inputs.body || ""}
                    onChange={handleChange}
                />
            </label>
            <input type="submit" />
        </form>
    )
}

export default Form