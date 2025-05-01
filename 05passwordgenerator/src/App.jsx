import { useState, useCallback,useEffect, useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed , setNumberAllowed] = useState(false)
  const [charAllowed , setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')
const generatePassword = useCallback(() => {

  let pass =''
  let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  if (numberAllowed) str += '0123456789'
  if (charAllowed) str += '!@#$%^&*()_+[]{}|;:,.<>?'

  for (let i = 0; i < length; i++) {
    const char = Math.floor(Math.random() * str.length)
    pass += str.charAt(char)
  }

  setPassword(pass)
},[length, numberAllowed, charAllowed])
//usecallback is used to change the password only when the dependencies change
  //usecallback is used to memoize the function and prevent it from being recreated on every render
  //these components (dependencies) shouldn't change too frequently


useEffect(() => {
  generatePassword()
  //this will run the function when the component mounts
  //and when the dependencies change
  //this will prevent the function from being recreated on every render
  //and will only run when the dependencies change
  //this will also prevent the function from being recreated on every render
  //and will only run when the dependencies change
},[length, numberAllowed, charAllowed])

const passwordRef = useRef(null)

const CopyPasswordToClipboard = () => {
  window.navigator.clipboard.writeText(password)
  //this will copy the password to the clipboard
  passwordRef.current?.select()
  //question mark is used to check if the current value is null
  //it will work without that, like current.select()
  //this will select the password in the input field
  //it not only copies but gives the user a visual feedback
}

  return (
<>
  <div className="w-full max-w-md mx-auto shadow-lg rounded-2xl px-6 py-8 my-10 bg-gray-900 text-orange-400">
    <h1 className="text-3xl font-bold text-center mb-6">🔐 Password Generator</h1>

    {/* Password display + copy */}
    <div className="flex items-center gap-2 mb-6">
      <input
        type="text"
        value={password}
        readOnly
        placeholder="Generated Password"
        className="w-full bg-gray-100 text-gray-800 text-center text-xl font-semibold px-4 py-2 rounded-lg"
        ref={passwordRef}
      />
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
      onClick={CopyPasswordToClipboard}>
        Copy
      </button>
    </div>

    {/* Controls */}
    <div className="flex flex-col gap-4">
      {/* Length slider */}
      <div className="flex items-center justify-between gap-4">
        <label htmlFor="length" className="font-medium">Length: {length}</label>
        <input
          type="range"
          min={8}
          max={24}
          value={length}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
          onChange={(e) => setLength(e.target.value)}
        />
      </div>

      {/* Options */}
      <div className="flex justify-between">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={numberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
            className="accent-orange-500"
          />
           {/*reversing the previous value makes it faster*/}
          Numbers
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={charAllowed}
            onChange={() => setCharAllowed((prev) => !prev)}
            className="accent-orange-500"
          />
          Characters
        </label>
      </div>
    </div>
  </div>
</>

  )
}

export default App
