import React, { useEffect, useState } from 'react'
import './App.css';

function App() {




  const [title, setTitle] = useState("")
  const [data, setData] = useState([]);
  const tabs = ["posts", "comments", "albums"]
  const [type, setType] = useState("posts")
  const [showGoToTop, setShowGoToTop] = useState(false);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/` + type)
      .then(res => res.json())
      .then(data => {

        setData(data)
      });

  }, [type])
  useEffect(() => { document.title = title; }, [])
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setShowGoToTop(true)
      } else {
        setShowGoToTop(false)
      }
    }
    window.addEventListener('scroll', handleScroll);
    
  }
   
    , [])

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
          <li>{item.title || item.name}</li>
        )}
      </ul>
      {showGoToTop && (
        <button
          style={{
            position: "fixed",
            top: "15px"
          }}>

          Go to the top
        </button>
      )}
    </React.Fragment>
  )




}

export default App;
