import React, { useState } from "react";

function RadioBox({ input }) {

    const convertToArrayInput = Object.values(input)


    const [checked, setChecked] = useState(0)

    const handleChange = (key) => {
        setChecked(key)


    }
    
    return (


        <React.Fragment>


            {convertToArrayInput.map((item, key) =>
                <li key={key} style={{ listStyleType: "none" }}>
                    <input type="radio" value={item} onChange={() => handleChange(key)} checked={checked == key} />
                    <label>{item}</label>
                </li>
            )}

        </React.Fragment>



    );
}

export default RadioBox;