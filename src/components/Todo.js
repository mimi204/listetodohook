import React, { useState } from "react";

function Todo({ todo, index, handleComplete, handleDelete }) {
	return (
		<div className="todo" style={{ textDecoration: todo.isDone ? "line-through" : "none" }}	>{todo.action}
			<div>
				<button class="btn btn-warning" onClick={() => handleComplete(index)}>{todo.isDone ? "Undo" : "Complete"}</button>
			<></>	<button class="btn btn-warning" onClick={() => handleDelete(index)}>x</button>
			</div>
		</div>
	);
}

export default Todo;