import React from "react";
import Checkbox from "./Checkbox";

function ListItem(prop) {
    const listArray = prop.list;
    const handleDelete=(key)=>{
        listArray.filter((item,index)=>(index!==key))
    }
    console.log(listArray);
    return (
        <React.Fragment>
            <ul>
                {listArray.map((item, key) => {
                    if (item !== "") {
                        return (
                            <li key={key} style={{ listStyleType: "none" }}>
                                <Checkbox itemId={key}></Checkbox>
                                <p style={{ display: "inline" }} >{item}</p>
                                <button value={key} onClick ={()=>handleDelete(key)}>Delete</button>
                              
                            </li>
                        )

                    }



                })}
            </ul>
        </React.Fragment>
    );
}

export default ListItem;