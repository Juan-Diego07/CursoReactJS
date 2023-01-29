import React from 'react';
//import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';


const TaskListComponent = () => {
    
    const defaultTask = new Task('Example','This is an example',false,LEVELS.NORMAL)
    
    
    return (
        <div>
            <div>
            Your Tasks:            
            <TaskListComponent task={defaultTask}></TaskListComponent>
            </div>
        </div>
    );
};


//TaskListComponent.propTypes = {

//};


export default TaskListComponent;
