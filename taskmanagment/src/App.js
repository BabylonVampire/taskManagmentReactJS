import './style.css'
import React from 'react';
import {users, activeUser} from './backend/users';
import { ShowTasks } from './backend/showAndCloseTasks';
import LoginForm from './components/LoginForm';
import BasePageForm from './components/BasePageForm';

function App() {

  let u = '';
  let p = '';

  if (JSON.parse(localStorage.getItem('username')) && JSON.parse(localStorage.getItem('password'))) {

      u = JSON.parse(localStorage.getItem('username'));
      p = JSON.parse(localStorage.getItem('password'));

      if (users[u]) {

          activeUser.activeUser = u;

          return(
            <div>
                <BasePageForm/>
                <ShowTasks/>
            </div>
          );
      }
  }

  else {
    return (
      <LoginForm/>
    );
  }
}

export default App;
