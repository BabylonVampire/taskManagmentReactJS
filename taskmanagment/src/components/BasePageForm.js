import React from "react";
import root from '../backend/rootRender';
import LoginForm from "./LoginForm";
import CreateNewTaskForm from "./CreateNewTaskForm";

const BasePageForm = () => {

    const logOut = () => {
        localStorage.setItem('username', JSON.stringify(''));
        localStorage.setItem('password', JSON.stringify(''));
        root.render(
            <LoginForm/>
        );
    }

    const createTask = () => {
        root.render(
            <CreateNewTaskForm/>
        );
    }

    const setings = () => {
        return;
    }

    return(
        <div className="buttonBox" id="interface">
            <button type="button" id="logout" onClick={logOut}>Log out</button>
            <button type="button" id="taskcreation" onClick={createTask}>Create new task</button>
            <button type="button" id="setings" onClick={setings}>setings</button>
        </div>
    )
}

export default BasePageForm;