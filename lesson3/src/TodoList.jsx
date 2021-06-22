import React, { Component } from 'react';
import TasksList from './TasksList';
import CreateTaskInput from './CreateTaskInput';
import { createTask, fetchTasksList, updateTask, deleteTask } from './tasksGateway';

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            tasks: [],
        };
    }

    componentDidMount() {
        this.fetchTasks();
    };

    fetchTasks = () => {
        fetchTasksList()
            .then(tasksList => {
                this.setState({
                    tasks: tasksList,
            })
            console.log(tasksList)
        },
        );
    };

    onCreate = text => {
        const newTask = {
            text, 
            done: false,
        };
        createTask(newTask)
            .then(() => this.fetchTasks());
            console.log(this.fetchTasks())
    };

    handleTaskStatusChange = id => {
        const {done, text} = this.state.tasks
            .find(task => task.id === id)
        const updatedTask = {
            ...text,
            done: !done,
        };

        updateTask(id, updatedTask)
            .then(() => this.fetchTasks());
    };

    handleTaskDelete = (id) => {
        deleteTask(id)
         .then(() => this.fetchTasks())
    };

    render() {
        return (
            <>
                <h1 className="title">Todo List</h1>
                <div className="todo-list">
                    <CreateTaskInput 
                        onCreate={this.onCreate}
                    />
                    <TasksList
                        tasks={this.state.tasks}
                        handleTaskDelete={this.handleTaskDelete}
                        handleTaskStatusChange={this.handleTaskStatusChange} 
                    /> 
                </div>
            </>    
        );
    }
}
export default TodoList;