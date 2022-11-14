import React from "react";

const TaskForm = (prop) => {
    let task = prop.content;
    return(
        <div className='task'>
            <div className="fieldset">
                <legend>{task.name}</legend>
                <div className="labelBox">
                    <label>appointed by: {task.author}</label>
                </div>
                <div className="labelBox">
                    <label id='timeLeft'>{"Deadline: " + Math.abs(task.remainingTime()) + " day" + (Math.abs(task.remainingTime()) === 1 ? "" : "s") + (task.remainingTime() >= 0 ? " left" : " late")}</label>
                    <label id='diff'>Difficulty: {task.lvl}</label>
                </div>
                <label>Task description:</label>
                <label id='description'>{task.textOfTask}</label>
                <button type="button" id={task.id} onClick={() => task.removeTask(task)}>finish the task</button>
            </div>
        </div>
    )
}

export default TaskForm;