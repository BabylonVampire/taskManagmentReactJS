import React, {useState} from "react";
import root from '../backend/rootRender';
import {Task, ID} from '../backend/taskClass';
import {users, activeUser} from '../backend/users';
import {ShowTasks} from "../backend/showAndCloseTasks";
import BasePageForm from "./BasePageForm";

const CreateNewTaskForm = () => {

    let id = ID.id;

    const difficulties = [
        '',
        'Easy',
        'Not so easy',
        'Medium',
        'Hard',
        'Hardcore'
    ];

    const [warning, setWarning] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [diff, setDiff] = useState(difficulties[0]);
    const [deadline, setDeadline] = useState('');
    const [recipient, setRecipient] = useState(Object.keys(users)[0]);
    
    const closeWindow = () => {
        root.render(
            <div>
                <BasePageForm/>
                <ShowTasks/>
            </div>
        )
    }

    const createTask = () => {
        if (!name || !description || !diff || !deadline) {
            setWarning('All fields must be filled');
            return;
        }
    
        let task = new Task(name, description, diff, deadline, id, recipient);
    
        ++ID.id;

        users[recipient].tasks.push(task);
    
        users[activeUser.activeUser].tasks.sort((prev, next) => prev.priority() - next.priority());

        root.render(
            <div>
                <BasePageForm/>
                <ShowTasks/>
            </div>
        )
    }

    return(
        <div id="taskCreation" className="form">
            <div className="fieldset">
                <legend>Creating new task</legend>
                <div className="labelBox">
                    <button type="button" onClick={closeWindow}>Close</button>
                    <label id="warning">{warning}</label>
                </div>
                <div className="inputBox">
                    <label>Enter name of task </label>
                    <input className="input" type="text" id="name" value={name} onChange={e => setName(e.target.value)}/>
                </div>
                <div className="inputBox">
                    <label>Enter descriprion of the task </label>
                    <input className="input" type="text" id="text" value={description} onChange={e => setDescription(e.target.value)}/>
                </div>
                <div className="inputBox">
                    <label>Select difficulty of task </label>
                    <select className="input" id="lvl" value={diff} onChange={e => setDiff(e.target.value)}>
                        {difficulties.map(diff => { return(<option key={diff}>{diff}</option>) })}
                    </select>
                </div>
                <div className="inputBox">
                    <label>Enter deadline </label>
                    <input className="input" id="date" type="date" value={deadline} onChange={e => setDeadline(e.target.value)}/>
                </div>
                <div className="inputBox">
                    <label>Enter recipients name </label>
                    <select className="input" id="targetUser" value={recipient} onChange={e => setRecipient(e.target.value)}>
                        {Object.keys(users).map(user => { return (<option key={user}>{user}</option>) })}
                    </select>
                </div>
                <button type="button" onClick={createTask}>Create task</button>
            </div>
        </div>
    )
}

export default CreateNewTaskForm;
