import { useState , useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [red, setRed] = useState(255)
  const [green, setGreen] = useState(0)
  const [blue, setBlue] = useState(100)

  const rgbColor = `rgb(${red}, ${green}, ${blue})`;

  useEffect(() => {
    document.body.style.transition = 'background-color 200m ease';
    document.body.style.backgroundColor = rgbColor;
  }, [red, green, blue])

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4">
  <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
    <h1 className="text-2xl font-bold text-center mb-6">RGB Color Picker</h1>

    <div className="mb-4">
      <label className="block text-lg font-medium mb-1 text-red-600">Red: {red}</label>
      <input
        type="range"
        min="0"
        max="255"
        value={red}
        onChange={(e) => setRed(Number(e.target.value))}
        className="w-full h-3 bg-red-300 rounded-lg appearance-none cursor-pointer accent-red-600"
      />
    </div>

    <div className="mb-4">
      <label className="block text-lg font-medium mb-1 text-green-600">Green: {green}</label>
      <input
        type="range"
        min="0"
        max="255"
        value={green}
        onChange={(e) => setGreen(Number(e.target.value))}
        className="w-full h-3 bg-green-300 rounded-lg appearance-none cursor-pointer accent-green-600"
      />
    </div>

    <div className="mb-6">
      <label className="block text-lg font-medium mb-1 text-blue-600">Blue: {blue}</label>
      <input
        type="range"
        min="0"
        max="255"
        value={blue}
        onChange={(e) => setBlue(Number(e.target.value))}
        className="w-full h-3 bg-blue-300 rounded-lg appearance-none cursor-pointer accent-blue-600"
      />
      <input type="text"
      value={rgbColor}
      className="w-full h-10 bg-gray-200 rounded-lg mt-2 text-center text-lg font-semibold text-gray-700"
      readOnly/>
    </div>
  </div>
  </div>

  )
}

export default App
