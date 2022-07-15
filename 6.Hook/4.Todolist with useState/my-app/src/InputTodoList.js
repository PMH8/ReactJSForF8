import React from "react";
import { useState } from "react"

function InputTodoList(prop) {
    const [input, setInput] = useState("");
    const handleAddToDo = () => {
        prop.takeInput(input)
        setInput("")
    }


    return (
        <React.Fragment>
            <div>
                <input type="text" placeholder="Add your to do"

                    value={input}
                    onChange={(e) => {
                        if (e.target.value !== "") {
                            setInput(e.target.value);
                        }
                    }} />
                <button onClick={handleAddToDo}>Add</button>
            </div>
        </React.Fragment>
    );
}

export default InputTodoList;