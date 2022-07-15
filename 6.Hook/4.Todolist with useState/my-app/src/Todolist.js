import React, { useState } from "react";
import InputTodoList from "./InputTodoList";
import ListItem from "./ListItem";

function Todolist() {
   
    const [list,setList]=useState([])
  
    const takeInput=(input)=>{    
        if(typeof input!=="undefined"){
            setList(prev=>[...prev,input])
            
        }else{
            console.log("Please add to do ");
        }
    }
    return (
        <React.Fragment>
            <InputTodoList takeInput={takeInput}></InputTodoList>
            <ListItem list={list}></ListItem>
        </React.Fragment>
    );
}

export default Todolist;