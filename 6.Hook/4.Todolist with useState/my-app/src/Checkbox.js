import React, { useState } from "react";

function Checkbox(prop) {
    const [listDone, setListDone] = useState([])
    console.log(listDone);
    const handleOnChange = () => {
        // exist itemId in listDone
        if (listDone.includes(prop.itemId)) {
            setListDone(prev => [...prev])
        }else{
            setListDone(prev => [...prev, prop.itemId])
        }
       
    }
    return (
        <React.Fragment>
            <input type="checkbox" onChange={handleOnChange} />
        </React.Fragment>
    );
}

export default Checkbox;