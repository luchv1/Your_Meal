import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import Input from '../components/ui/Input.jsx'
import Button from '../components/ui/Button.jsx';
import LoginForm from '../components/ui/LoginForm.jsx';
import SignupForm from '../components/ui/SignupForm.jsx';
import Tabs from '../components/ui/Tabs.jsx'
const tabsData = [
    {
        label: "Login",
        content: <LoginForm/>
    },
    {
        label: "Sign Up",
        content: <SignupForm/>
    }
];

const Auth = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const defaultTab = searchParams.get("login") !== null ? tabsData[0].label : tabsData[1].label;
    return (
        <div className="auth-container">
            <div className="container">
                <Tabs classes="primary-button w100 tab" tabs={tabsData} init={defaultTab}/>
            </div>
        </div>
    )
}

export default Auth;