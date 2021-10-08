import React, { useState } from "react"
import TodoItem from "./TodoItem"
import './styles.css'
import TodoForm from "./components/TodoForm"

function App() {
    
    const [todos, setTodos] = useState([
        {
            id: 0,
            text: "Take out the trash",
            completed: true
        },
        {
            id: 1,
            text: "Grocery shopping",
            completed: false
        },
        {
            id: 2,
            text: "Clean gecko tank",
            completed: false
        },
        {
            id: 3,
            text: "Mow lawn",
            completed: true
        },
        {
            id: 4,
            text: "Catch up on Arrested Development",
            completed: false
        }
    ])

    const addTodo = (text) => {
        const newTodos = [...todos, { completed: false, id: todos.length + 1, text }];
        setTodos(newTodos);
    }

    function handleChange(id) {
        const newTodos = [...todos];
        newTodos[id].completed = !newTodos[id].completed;
        setTodos(newTodos);
    }

    function handleClick(id) {
        console.log(id);
        const newTodos = [...todos];
        newTodos.splice(id, 1);
        for (let i = 0; i < newTodos.length; i++) {
            newTodos[i].id = i;
        }
        setTodos(newTodos);
    }

        return (
            <div className="todo-list">
                <TodoForm addTodo={ addTodo }/>
                {todos.map(item => <TodoItem key={item.id} item={item} handleChange={ handleChange } handleClick= { handleClick }/>)}
            </div>
    )    
}

export default App