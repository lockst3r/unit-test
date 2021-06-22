import React from 'react';
import PropTypes from 'prop-types';

const Task = ({id, done, text, onChange, onDelete}) => {
    return(
        <li className={`list-item${done ? ' list-item_done': ''}`}>
            <input className="list-item__checkbox"
                type="checkbox" 
                checked={done}
                onChange={() => onChange(id)}
            />
            <span className="list-item__text">
                {text}
            </span>
            <button className="list-item__delete-btn"
                onClick={() => onDelete(id)}
            ></button> 
        </li>
    );
}

Task.propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string,
    done: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

Task.defaultProps = {
    done: false,
    text: '',
};

export default Task;