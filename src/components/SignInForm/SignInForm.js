import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getVisible, getValue, getError } from './selectors';
import { startSignIn, cancelSignIn, signIn } from './actions';

const SignInForm = () => {
    const visible = useSelector(getVisible);
    const error = useSelector(getError);
    const dispatch = useDispatch();

    return visible ? (
        <form onSubmit={e => {
            e.preventDefault();
            const name = document.getElementById("name").value;
            const password = document.getElementById("password").value;
            dispatch(signIn({name, password}));
        }}>
            <div>
                <label>Name</label>
                <input
                    name="name"
                    id="name"
                    style={{
                        display: 'block',
                        borderColor: 'black',
                        height: 40,
                        width: 300,
                    }}
                />
            </div>
            <div>
                <label>Password</label>
                <input
                    name="password"
                    id="password"
                    type="password"
                    style={{
                        display: 'block',
                        borderColor: 'black',
                        height: 40,
                        width: 300,
                    }}
                />
            </div>
            {error ? <label style={{ display: 'block', color: 'red' }}>{error}</label> : null}
            <button type="submit" style={{ width: 150, height: 40 }}>Submit</button>
            <button
                style={{ width: 150, height: 40 }}
                onClick={() => dispatch(cancelSignIn())}
            >
                Cancel
            </button>
        </form>
    ) : (
            <button
                style={{ width: 150, height: 40 }}
                onClick={() => dispatch(startSignIn())}
            >
                Sign In
            </button>
        )
};

export default SignInForm;
