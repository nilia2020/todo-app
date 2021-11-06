import React from "react";
import "./TodosLoading.css";
import DoneIcon from "@mui/icons-material/DoneOutlined";
import { Delete } from "@mui/icons-material";

function TodosLoading(props) {
    return (
        <li className="TodoItem">
            <span className={`Icon Icon-check}`}>
                <DoneIcon />
            </span>
            <p className="TodoItem-p"></p>
            <span className=" Icon Icon-delete">
                <Delete />
            </span>
        </li>
    );
}

export { TodosLoading };
