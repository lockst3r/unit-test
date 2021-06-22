import React from 'react';
import {shallow} from 'enzyme';
import TodoList from '../TodoList';
import { fetchTasksList, deleteTask } from '../tasksGateway';

jest.mock('../tasksGateway', () => {
    return {
        createTask: jest.fn(), 
        fetchTasksList: jest.fn(() => Promise.resolve([])), 
        updateTask: jest.fn(), 
        deleteTask: jest.fn(() => Promise.resolve([])),
    }
})

describe('<TodoList />', () =>{
    it('Should requests tasks list', () => {
       shallow(<TodoList />);
        expect(fetchTasksList).toBeCalled();
    });

    it('Should handle tasks delete', () => {
      const wrappedComponent =  shallow(<TodoList />);
     const deleteHandler = wrappedComponent.find('TasksList').prop('handleTaskDelete');
     deleteHandler('some-id-87')
         expect(deleteTask).toBeCalledWith('some-id-87');
     });
});