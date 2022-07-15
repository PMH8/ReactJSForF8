
import { useState } from 'react';
import RadioBox from './RadioBox';
import CheckedBox from './CheckedBox';
import './App.css';

function App() {

  const gifts = ["CPU core i9", "RAM 32GB", "RGB KEYBOARD"]
  const [gift, setGift] = useState("Chưa có phần thưởng")
  const handleSetGift = () => {
    const randomNum = (Math.random() * gifts.length);
    const randomGiftKey = Math.round(randomNum)
    console.log(randomGiftKey)
    setGift(gifts[randomGiftKey])

  }

  const [email, setEmail] = useState("")

  return (
    <div className="App">
      <h1>Welcom to My Project</h1>
      <h2>Phần thưởng của bạn là: {gift || "Chúc bạn may mắn"} </h2>
      <button onClick={handleSetGift}>Click để nhận thưởng</button>

      {/* { Two way binding} */}
      <input placeholder='Email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
      <div style={{ height: "50px" }}></div>
      <RadioBox input={gifts}></RadioBox>
      <div style={{ height: "50px" }}></div>

      <div style={{ height: "50px" }}></div>
      <CheckedBox input={gifts}></CheckedBox>
      <div style={{ height: "50px" }}></div>
      <button>Register</button>
    </div>



  );
}

export default App;
