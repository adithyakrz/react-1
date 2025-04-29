import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'
import Header from './components/header.jsx'

function App() {
  const [count, setCount] = useState(0)
  let myArr={
    name: 'Coffee',
    age: 20,
    address:{
      city: 'Kathmandu',
      country: 'Nepal'
    }
  }
  let newArr = [1,2,3,4,5,6]

  return (
    <>
    <Header/>
      <h1 className='text-3xl bg-green-500 p-5'>Testing vite with tailwind</h1>
      <Card username="Coffee" detail='The Anti-patterns' imglink='https://images.pexels.com/photos/31572576/pexels-photo-31572576/free-photo-of-artistic-latte-art-on-a-ceramic-plate.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'/>
      <Card imglink='https://images.pexels.com/photos/29198201/pexels-photo-29198201/free-photo-of-vintage-red-car-rear-in-montigny-le-bretonneux.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' username='Red Car'/>
      <Card myArr={newArr}/>
      {/*You can pass arrays but with a curly braces around it
      <Card myArr={[1,2,3]}/>
      creating a array variable and sending it is better*/}
    </>
  )
}

export default App
