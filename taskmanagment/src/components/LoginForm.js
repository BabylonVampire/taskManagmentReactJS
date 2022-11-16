import React, {useState} from "react";
import root from '../backend/rootRender';
import {users, activeUser} from '../backend/users';
import {ShowTasks} from "../backend/showAndCloseTasks";
import BasePageForm from "./BasePageForm";
import RegistrationForm from "./RegistrationForm";

const LoginForm = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [checked, setChecked] = useState(false);
    const [warning, setWarning] = useState('');

    const handleChange = () => {
        setChecked(!checked);
    }    

    const getLoginData = () => {

        if (!username || !password) {
            setWarning('All fields must be filled!');
            return;
        }

        if (!users[username]) {
            setWarning('The user with the given name was not found. Check the entered data or register!');
            return;
        }
    
        if (users[username].password !== password) {
            setWarning('invalid password!');
            return;
        }

        if (checked) {
            localStorage.setItem('username', JSON.stringify(username));
            localStorage.setItem('password', JSON.stringify(users[username].password));
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
                    <input className="input" type="password" id="password" value={password} onChange={e => setPassword(e.target.value)}/>
                </div>
                <div className="labelBox">
                <label id="forcheckbox">Remember me </label>
                    <div className="checkbox">
                        <input type="checkbox" id="checkbox" value={checked} onChange={handleChange}/>
                    </div>
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