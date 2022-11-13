import TaskForm from '../components/TaskForm';
import {users, activeUser} from './users';
import {ShowTasks, closeAllTasks} from './showAndCloseTasks';
import root from './rootRender';
import BasePageForm from '../components/BasePageForm';

let ID = {id: 0};

const difficulties = [
    '',
    'Easy',
    'Not so easy',
    'Medium',
    'Hard',
    'Hardcore'
];

class Task {
    constructor(name, textOfTask, lvl, timeOfEnding, id, targetUser) {
        this.name = name;
        this.textOfTask = textOfTask;
        this.lvl = lvl;
        this.timeOfEnding = timeOfEnding;
        this.id = id;
        this.author = activeUser.activeUser;
        this.targetUser = targetUser;
    }
    remainingTime() {
        let date = new Date();
        let endingDate = parseInt(this.timeOfEnding.split('-')[2], 10);
        return endingDate - date.getDate();
    }
    priority() {
        let timeLeft = this.remainingTime();
        let difficultyNumber = difficulties.length - difficulties.indexOf(this.lvl);
        return timeLeft * difficultyNumber;
    }
    createForm() {
        return <TaskForm content = {this}/>
    }
    removeTask(task) {
        users[activeUser.activeUser].tasks.splice(users[activeUser.activeUser].tasks.indexOf(task), 1);
        root.render(
            <div>
                <BasePageForm/>
                <ShowTasks/>
            </div>
        );
    }
}

export {Task, ID};