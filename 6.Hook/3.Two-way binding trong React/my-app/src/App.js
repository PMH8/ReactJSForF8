import { useState } from 'react'
import './App.css';

// Respone from API

const courses = [
  {
    id: 1,
    name: "HTML,CSS"
  },
  {
    id: 2,
    name: "JavaScript"
  },
  {
    id: 3,
    name: "ReactJS"
  }
]

function App() {
  const [name, setName] = useState("");
  const [checked, setChecked] = useState(3);
  const [checkedBox, setCheckedBox] = useState([]);
  const handleSubmit = () => {
    console.log(name)
    console.log(checked);

  }
  console.log(checkedBox)
  const onChangeCheckedBox = (id) => {
    setCheckedBox(prev => {
      if (checkedBox.includes(id)) {
        return checkedBox.filter(item => item !== id)
      }
      else{
        return [...prev,id]
      }

    }
    )






  }

  return (
    <div className="App">
      <input value={name} onChange={(e) => { setName(e.target.value) }}></input>
      <br />

      {courses.map(course => (
        <div key={course.id}>
          <input
            id={course.id}
            type="radio"
            checked={checked === course.id}
            onChange={() => setChecked(course.id)} />
          <label htmlFor={course.id}>{course.name}</label>
        </div>
      ))
      }
      <div>-----------------------------------------</div>
      {courses.map(course => (
        <div key={course.id}>
          <input
            id={course.id}
            type="checkbox"

            onChange={() => onChangeCheckedBox(course.id)} />
          <label htmlFor={course.id}>{course.name}</label>
        </div>
      ))
      }


      <br />
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}

export default App;
