import React from "react";
import "./TodoItem.css";
import DoneIcon from "@mui/icons-material/DoneOutlined";
import { Delete } from "@mui/icons-material";
function TodoItem(props) {
    const onComplete = () => {
        alert(`Todo "${props.text}" completado`);
    };
    const onDelete = () => {
        alert(`Todo "${props.text}" borrado`);
    };
    return (
        <li className="TodoItem">
            <span
                className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
                onClick={onComplete}
            >
                <DoneIcon />
            </span>
            <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
                {props.text}
            </p>
            <span className=" Icon Icon-delete" onClick={onDelete}>
                <Delete />
            </span>
        </li>
    );
}

export { TodoItem };
