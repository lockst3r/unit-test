import React, {Component} from 'react';
import Task from './Task';
import PropTypes from 'prop-types';

const TasksList = ({ tasks, handleTaskStatusChange, handleTaskDelete }) => {

    const sortedList = tasks
        .slice() 
        .sort((a, b) => a.done - b.done);
    return(
        
            <ul className="list">
                    {sortedList.map(task => {
                    return(
                    <Task key={task.id} {...task}
                        onDelete={handleTaskDelete} 
                        onChange={handleTaskStatusChange}
                    />
                )})}
            </ul>
    );

};

TasksList.propTypes = {
    tasks: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string,
            done: PropTypes.bool,
            id: PropTypes.string,
        }),
    ).isRequired,
    handleTaskStatusChange: PropTypes.func.isRequired,
    handleTaskDelete: PropTypes.func.isRequired,
};

export default TasksList;