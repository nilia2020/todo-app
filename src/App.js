//import "./App.css";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
const todos = [
    { text: "Enviar correo a SHELL", completed: false },
    { text: "Comprar cadenas de inoxidable", completed: false },
    { text: "Hacer ensayos con HT", completed: false },
];
function App() {
    return (
        <>
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {todos.map((todo) => (
                    <TodoItem key={todo.text} text={todo.text} />
                ))}
            </TodoList>
            <CreateTodoButton />
        </>
    );
}
export default App;
