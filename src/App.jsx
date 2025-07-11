import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
    const [count, setCount] = useState(0)
    const isNegative = count < 0;
    const isEven = Math.abs(count) % 2 == 0;
    const type = isNegative
            ? isEven ? 'Negative Even': 'Negative Odd'
            : isEven ? 'Even':'Odd';
    const setImage = isEven ? reactLogo : viteLogo
    const image = <img src={setImage} alt="icon" style={{ marginLeft:'12px', height:'70px', width:'80px' }} />
  return (
    <div>
      <p className='text-center mt-5'>count: {count}</p>
      <p className='text-center text-success fw-bold fs-4 mt-5'>{type}</p>
      <p className='text-center mt-5'>Icon  {image}</p>
      <div className='d-flex justify-content-center'>
        <button className='btn btn-primary rounded m-3' onClick={()=> setCount(count + 1)}>Increment</button>
        <button className='btn btn-primary rounded m-3' onClick={()=> setCount(count - 1)}>Decrement</button>
      </div>
    </div>
  )
}

export default App
