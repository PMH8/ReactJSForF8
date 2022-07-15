
import { useState } from 'react'

// làm một ứng dụng đếm số Ấn vào  dấu cộng nút đó thì số sẽ tăng lên,dấu trừ thì số đó sẽ giảm đi
function App() {
  const cost = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

  const [counter, setCounter] = useState(() => {
    const total = cost.reduce((total, cur) => (total + cur), 0)
    console.log(total)
    return total
  })
  const handlerCounter = (title) => {
    if (title === "decrese") {
      setCounter(counter - 1);
    } else if (title === "increse5") {
      setCounter(counter => counter + 1);
      setCounter(counter => counter + 1);
      setCounter(counter => counter + 1);
      setCounter(counter => counter + 1);
      setCounter(counter => counter + 1);
    }
    else {
      setCounter(counter => counter + 1)
    }
  }

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={() => handlerCounter("decrese")} title="decrese">Decrese</button>
      <button onClick={() => handlerCounter("increse")} title="increse">Increse</button>
      <button onClick={() => handlerCounter("increse5")} title="increse+5">Increse</button>

    </div>
  );
}

export default App;
