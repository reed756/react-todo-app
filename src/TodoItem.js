import React from "react"

function TodoItem(props) {
    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }
    
    return (
        <div className="todo-item">
            <input 
                type="checkbox" 
                checked={props.item.completed} 
                onChange={() => props.handleChange(props.item.id)}
            />
            <p style={props.item.completed ? completedStyle: null}>{props.item.text}</p>
            <i className="far fa-edit"></i>
            <i 
                className="far fa-minus-square"
                onClick={() => props.handleClick(props.item.id)}
            ></i>
        </div>
    )
}

export default TodoItem