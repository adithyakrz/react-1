import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('olive'
    //default - olive
    //variable- red
    // setcolor method
  )
  // no need to use thi method, we can directly use setColor in the onClick method
//function changeColor(color) {
//    setColor(color)
 // }
  return (
    <div className='w-full h-screen duration-200 ' style={{backgroundColor: color}}>
      <div className='fixed flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <div className='flex items-center justify-center gap-4 px-6 py-3 backdrop-blur-md rounded-full shadow-lg bg-white/30'>
      <button
        className='px-4 py-2 rounded-full text-white font-medium shadow bg-blue-700 hover:scale-105 transition-transform duration-150'
        onClick={() => setColor('blue')}
      >
        Blue
      </button>
      <button
        className='px-4 py-2 rounded-full text-white font-medium shadow bg-red-700 hover:scale-105 transition-transform duration-150'
        onClick={() => setColor('red')}
      >
        Red
      </button>
      <button
        className='px-4 py-2 rounded-full text-white font-medium shadow bg-purple-800 hover:scale-105 transition-transform duration-150'
        onClick={() => setColor('purple')}
      >
        Purple
      </button>
      <button
        className='px-4 py-2 rounded-full text-white font-medium shadow bg-yellow-400 hover:scale-105 transition-transform duration-150'
        onClick={() => setColor('yellow')}
      >
        yellow
      </button>
      <button
        className='px-4 py-2 rounded-full text-white font-medium shadow bg-pink-800 hover:scale-105 transition-transform duration-150'
        onClick={() => setColor('pink')}
      >
        pink
      </button>
    </div>
          {/* If we use onClick={changeColor('red')}it will immedietly execute when the component is loaded so we use this method */}
      </div>
    </div>
  )
}

export default App
