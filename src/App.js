import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import "./App.css";


function App() {
	const [todos, setTodos] = useState([
		{action: "wake up",	isDone: false	},
		{action: "have coffee", isDone: false	},
	]);
	
  //Adding tasks to the list
	const handleAdd = action => {
		const newTodos = [...todos, { action }];
		setTodos(newTodos);
	};
	
  //handling your finished and unfinished tasks
	const handleComplete = index => {
		const newTodos = [...todos];
		newTodos[index].isDone = !newTodos[index].isDone;
		setTodos(newTodos);
	};
	
    //Deliting task from the list
	const handleDelete = index => {
		const newTodos = [...todos];
		newTodos.splice(index, 1);
		setTodos(newTodos);
	};
	
	return (
		<div className="app">
      <div className="todo-list">
        
        <h1 className="title">Our to do list</h1>
        
        <TodoForm handleAdd={handleAdd} />
        
        {todos.map((todo, index) => (
					<Todo
						index={index}
						todo={todo}
				  	handleComplete={handleComplete}
						handleDelete={handleDelete}
					/>
				))}
			</div>
		</div>
	);
}

export default App;