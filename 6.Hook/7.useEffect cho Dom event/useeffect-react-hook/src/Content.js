import React, { useEffect, useState } from 'react';

function Content(props) {
    const [title, setTitle] = useState("")
    const tabs = ["posts", "comments", "albums"]
    const [type, setType] = useState("posts")
    const [data,setData]=useState([])
 
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/`+type)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setData(data)
        })
        
    },[type])

const handleTitlle=(e)=>{
    setTitle(e.target.value)
    
}
useEffect(()=>{
    document.title=title
},[title])


    return (

        <div>
            <input value={title} onChange={e => handleTitlle(e)} />
            <h1>{title}</h1>
            {tabs.map((tab) => (
                <button
                    key={tab}
                    style={type === tab ? {
                        color: "#fff",
                        backgroundColor: "#333"
                    } : {}}
                    onClick={() => setType(tab)} >
                    {tab}
                </button>
            ))}
            <ul>
                {data.map((item)=>(
                         
                    <li key={item.id}>{item.title||item.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Content;