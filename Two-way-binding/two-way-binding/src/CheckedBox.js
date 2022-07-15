import React, { useState } from "react";

function CheckedBox({ input }) {
    const [checked,setChecked]=useState([])
    console.log(checked)
    const handleChange=(key)=>{
        setChecked([...checked,key])
        if(checked.includes(key)){
           setChecked (checked.filter(checked=>checked!==key))
            
        }else{
            setChecked([...checked,key])
        }
       
    }
    return (
        <React.Fragment>

            {input.map(((item, key) => (
                
                <li key={key} style={{ listStyleType: "none" }}>
                    <input type="checkbox" onChange={()=>handleChange(key)}/>
                    <label>{item}</label>
                    <div>5</div>
                </li>
            )))}

        </React.Fragment>
    );
}

export default CheckedBox;