import React from 'react';
import { users, activeUser } from './users';
import TaskForm from '../components/TaskForm';

const ShowTasks = () => {
    return (
        users[activeUser.activeUser].tasks.map(task => {
            return (<TaskForm key={users[activeUser.activeUser].tasks.indexOf(task)} content={task}/>)
        })
    )
}
  
const closeAllTasks = () => {
    document.querySelectorAll('task').forEach((task) => task.remove());
}

export {ShowTasks, closeAllTasks}