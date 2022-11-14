import React, {useState} from "react";
import BasePageForm from "./BasePageForm";
import {users, activeUser} from '../backend/users';
import RegistrationForm from "./RegistrationForm";
import root from '../backend/rootRender';
import {ShowTasks} from "../backend/showAndCloseTasks";

const LoginForm = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [warning, setWarning] = useState('');

    const getLoginData = () => {

        if (!users[username]) {
            setWarning('The user with the given name was not found. Check the entered data or register');
            return;
        }
    
        if (users[username].password !== password) {
            setWarning('invalid password');
            return;
        }

        activeUser.activeUser = username;

        root.render(
            <div>
                <BasePageForm/>
                <ShowTasks/>
            </div>
        );
    }

    const goToRegistrationPage = () => {

        root.render(
            <RegistrationForm/>
        );
    }
 
    return(
        <div className="form" id="loginForm">
            <div className="fieldset">
                <label id="warning">{warning}</label>
                <div className="labelBox">
                    <label>Username: </label>
                    <input className="input" type="name" id="username" value={username} onChange={e => setUsername(e.target.value)}/>
                </div>
                <div className="labelBox">
                    <label>Password: </label>
                    <input className="input" type="text" id="password" value={password} onChange={e => setPassword(e.target.value)}/>
                </div>
                <div className="buttonBox">
                    <button type="button" onClick={getLoginData}>Login</button>
                    <button type="button" onClick={goToRegistrationPage}>Register</button>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;