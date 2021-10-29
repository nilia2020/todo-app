import React from "react";
import "./TodoItem.css";
import DoneIcon from "@mui/icons-material/DoneOutlined";
import { Delete } from "@mui/icons-material";
function TodoItem(props) {
    return (
        <li className="TodoItem">
            <span
                className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
                onClick={props.onComplete}
            >
                <DoneIcon />
            </span>
            <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
                {props.text}
            </p>
            <span className=" Icon Icon-delete" onClick={props.onDelete}>
                <Delete />
            </span>
        </li>
    );
}

export { TodoItem };
