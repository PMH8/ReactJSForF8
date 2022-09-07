import React, { useEffect, useState } from 'react';
//  useEffect(callback,[deps])==>Have 3 case
// *** Case 1:useEffect(callback)あまり使わない
// -Callback luôn được gọi sau khi component mounted
// -Callback sẽ được gọi sau khi rerender
// -Callback được gọi sau khi thêm element vào dom
// -Sau khi render ra xong thì callback mới được gọi

// *** Case 2:useEffect(callback,[])
// -Callback luôn được gọi sau khi component mounted
// -Thường dùng để gọi Api 1 lần


// *** Case 3:useEffect(callback,[deps])    
// -Callback sẽ được gọi lại mỗi khi dependency thay đổi

// -----------------3つのケースのすべての論理
// 1.Callback luôn được gọi sau khi component mounted
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
                         
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default Content;