import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import "./sign-up-sign-in.styles.scss";

const SignInAndSignUpPage = () => (
    <div className= 'sign-up-sign-in'>
        <SignIn />
        <SignUp/>
    </div>
);

export default SignInAndSignUpPage;