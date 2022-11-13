import React from "react";
import CreateNewTaskForm from "./CreateNewTaskForm";
import LoginForm from "./LoginForm";
import root from '../backend/rootRender';

const BasePageForm = () => {

    const logOut = () => {
        root.render(
            <LoginForm/>
        );
    }

    const createTask = () => {
        root.render(
            <CreateNewTaskForm/>
        );
    }

    return(
        <div className="buttonBox" id="interface">
            <button type="button" onClick={logOut}>Log out</button>
            <button type="button" onClick={createTask}>Create new task</button>
        </div>
    )
}

export default BasePageForm;