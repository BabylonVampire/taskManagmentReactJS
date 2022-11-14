import React, {useState} from "react";
import {users} from '../backend/users';
import User from '../backend/usersClass';
import LoginForm from "./LoginForm";
import root from '../backend/rootRender';

const RegistrationForm = (props) => {

    const [warning, setWarning] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repPassword, setRepPassword] = useState('');

    const getRegistrationData = () => {
        const validateEmail = (email) => {
            return String(email)
              .toLowerCase()
              .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              );
        }
    
        if (!validateEmail(email)) {
            setWarning('Email is incorrect!');
            return;
        }
    
        if (!name || !surname || !username || !email || !password || !repPassword) {
            setWarning('All fields must be filled!');
            return;
        }
    
        if (users[username]) {
            setWarning('Selected login is already in use!');
            return;
        }
    
        if (password !== repPassword) {
            setWarning('Passwords do not match!');
            return;
        }
    
        let newUser = new User(name, surname, username, email, password);
    
        users[username] = newUser;

        backToLoginPage();
    }

    const backToLoginPage = () => {
        root.render(
            <LoginForm/>
        );
    }

    return(
        <div className="form" id="regForm">
            <div className="fieldset">
                <div className="labelBox">
                    <button type="button" onClick={backToLoginPage}>back to login</button>
                    <label id="warning">{warning}</label>
                </div>
                <div className="labelBox">
                    <label>Name: </label>
                    <input className="input" type="name" id="name" value={name} onChange={e => setName(e.target.value)}/>
                </div>
                <div className="labelBox">
                    <label>Surname: </label>
                    <input className="input" type="name" id="surname" value={surname} onChange={e => setSurname(e.target.value)}/>
                </div>
                <div className="labelBox">
                    <label>Username: </label>
                    <input className="input" type="name" id="username" value={username} onChange={e => setUsername(e.target.value)}/>
                </div>
                <div className="labelBox">
                    <label>Email: </label>
                    <input className="input" type="email" id="email" value={email} onChange={e => setEmail(e.target.value)}/>
                </div>
                <div className="labelBox">
                    <label>Password: </label>
                    <input className="input" type="text" id="password" value={password} onChange={e => setPassword(e.target.value)}/>
                </div>
                <div className="labelBox">
                    <label>Password: </label>
                    <input className="input" type="text" id="repeatPassword" value={repPassword} onChange={e => setRepPassword(e.target.value)}/>
                </div>
                <div className="buttonBox">
                    <button type="button" onClick={getRegistrationData}>Register</button>
                </div>
            </div>
        </div>
    )
}

export default RegistrationForm;