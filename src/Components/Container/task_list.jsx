import React from 'react';
//import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';


const TaskListComponent = () => {
    
    const defaultTask = new Task('Example','This is an example',false,LEVELS.NORMAL);
    
    const changeState = () => {
        console.log('To Do: Cambiar estado de la tarea')
    }
    
    return (
        <div>
            <div>
            Your Tasks:            
            <TaskComponent task={defaultTask}></TaskComponent>
            </div>
        </div>
    );
};


//TaskListComponent.propTypes = {

//};


export default TaskListComponent;
