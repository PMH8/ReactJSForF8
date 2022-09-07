import React, { useEffect, useState } from 'react'

export default function Content() {
    const [title, setTitle] = useState("")
    const [data, setData] = useState([]);
    const tabs = ["posts", "comments", "albums"]
    const [type, setType] = useState("posts")
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/` + type)
            .then(res => res.json())
            .then(data => {
               
                setData(data)
            });

    },[type])
    useEffect(() => { document.title = title; },[])

    return (
        <React.Fragment>
            <input placeholder='write title here' onChange={(e) => setTitle(e.target.value)}></input>
            {title}
            <div>
                <ul>
                    {tabs.map(tab =>
                        <li>
                            <button style={type === tab ? {
                                color: "#fff",
                                backgroundColor: "#333"
                            } : {}} onClick={() => { setType(tab) }}>{tab}</button>
                        </li>
                    )}
                </ul>
            </div>
            <ul>
                {data.map(item =>
                    <li>{item.title||item.name}</li>
                )}
            </ul>
        </React.Fragment>
    )
}
