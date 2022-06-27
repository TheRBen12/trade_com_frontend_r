import React from 'react';

interface Props {

    onSubmit: Function
    onChange: Function
    email: string
    firstName: string
    lastName: string
    password: string
}

export default function RegistrationForm(props: Props) {
    return (
        <div className="login-container">
            <div className="d-flex justify-content-center align-items-center">
                <div className="w-50">
                    <div className=" shadow p-3 mb-5 rounded card login-container">
                        <h2 className="text-center mt-3">Sign in</h2>
                        <div className="card-body">
                            <form>
                                <div className="mb-3 form-group">
                                    <label htmlFor="email"><p>Email</p></label>
                                    <input onChange={e => props.onChange(e)} type="email" name="email" className="form-control" id="email"
                                           aria-describedby="emailHelp" placeholder="Enter your email here"/>
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your
                                        email with anyone
                                        else.</small>
                                </div>
                                <div className="mb-3 form-group">
                                    <label htmlFor="firstName"><p>firstName</p></label>
                                    <input onChange={e => props.onChange(e)} type="text" name="firstName" className="form-control" id="firstName"
                                            placeholder="Enter your first name here"/>
                                </div>
                                <div className="mb-3 form-group">
                                    <label htmlFor="lastName"><p>lastName</p></label>
                                    <input onChange={e => props.onChange(e)} type="text" name="lastName" className="form-control" id="firstName"
                                           placeholder="Enter your last name here"/>
                                </div>
                                <div className=" mb-3 form-group">
                                    <label htmlFor="password"><p>Password</p></label>
                                    <input onChange={e => props.onChange(e)} type="password" name="password" className="form-control" id="password"
                                           placeholder="enter your password here"/>
                                </div>
                                <div className="form-check mb-5">
                                    <label>
                                        <input onChange={e => props.onChange(e)} type="checkbox" className="form-check-input" name="_remember_me"/>Remember
                                        me
                                    </label>
                                </div>

                                <div className="mb-3 form-group">
                                    <button onSubmit={props.onSubmit()}
                                            className=" submit-button btn btn-primary">Login
                                    </button>
                                </div>
                                <input type="hidden" name="_csrf_token" value="{{ csrf_token('authenticate') }}"/>
                            </form>
                        </div>
                        <div>
                            <p>No Account yet?</p><a href=""> Register
                            now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}





