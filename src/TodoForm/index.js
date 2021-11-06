import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState("");
    const { addTodo, setOpenModal } = React.useContext(TodoContext);

    const onCancel = () => {
        setOpenModal(false);
    };
    let onChange = (event) => {
        setNewTodoValue(event.target.value);
    };
    const onAdd = () => {};
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea value={newTodoValue} placeholder="Cortar la cebolla" onChange={onChange} />
            <div className="TodoForm-buttonContainer ">
                <button
                    className="TodoForm-button TodoForm-button--cancel"
                    type="button"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    className="TodoForm-button TodoForm-button--add"
                    type="submit"
                    onClick={onAdd}
                >
                    Añadir
                </button>
            </div>
        </form>
    );
}
export { TodoForm };
