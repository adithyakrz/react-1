
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//react can't understand this because it is user defined names
const reactElement = {
    type: 'a',
    props:{
        href : "https://google.com",
        target : '_blank'
    },
    Children : 'Click me to go to Google'
}
// Render by just adding <MyApp/> inside render 
function MyApp(){
    return(
        <div>
        <h1>Custom react function</h1>
        </div>
    )
}
// Render by just adding AnotherElement inside render 
const AnotherElement = (
    <a href="https://google.com" target="_blank">
        Click me to go to Google
    </a>
)

// Render by just adding areactElement inside render 
const areactElement = React.createElement(
    'a',
    {
        href: 'https://google.com',
        target: '_blank'
    },
    'Click me to go to Google'
)

ReactDOM.createRoot(document.getElementById('root')).render(

    <App/>

)
