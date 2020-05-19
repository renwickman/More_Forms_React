import React, { useState } from  'react';


const RegForm = props => {
    const [formState, setFormState] = useState({
        f_name: "",
        l_name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const onChangeHandler = e => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    }
    const onSubmitHandler = e => {
        e.preventDefault();
        console.log(formState);
    }

    return(
        <div className="row">
            <div className="col-6 offset-3">
                <form onSubmit={onSubmitHandler}>
                    <label>First Name:</label>
                    <input type="text" name="f_name" onChange={onChangeHandler} className="form-control"/>
                    {formState.f_name.length < 2 && (<span class="message-error">First Name not long enough</span>)}
                    <br />
                    <label>Last Name:</label>
                    <input type="text" name="l_name" onChange={onChangeHandler} className="form-control"/>
                    {formState.l_name.length < 2 && (<span class="message-error">Last Name not long enough</span>)}
                    <br />
                    <label>Email:</label>
                    <input type="text" name="email" onChange={onChangeHandler} className="form-control"/>
                    {formState.email.length < 5 && (<span class="message-error">Email not long enough</span>)}
                    <br />
                    <label>Password:</label>
                    <input type="password" name="password" onChange={onChangeHandler} className="form-control"/>
                    {formState.password.length < 8 && (<span class="message-error">Password not long enough</span>)}
                    <br />
                    <label>Confirm Password:</label>
                    <input type="password" name="confirmPassword" onChange={onChangeHandler}  className="form-control"/>
                    {formState.password !== formState.confirmPassword && (<span class="message-error">Password does not match</span>)}
                    <br />
                    <div className="form-group text-right">
                        <button className="btn btn-primary btn-sm">Register</button>
                    </div>
                </form>
                <div class="success">
                    <p>First Name: {formState.f_name}</p>
                    <p>Last Name: {formState.l_name}</p>
                    <p>Email: {formState.email}</p>
                    <p>Password: {formState.password}</p>
                </div>
            </div>
        </div>
    );
}


export default RegForm;