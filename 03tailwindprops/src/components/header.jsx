import React from 'react'

function header() {
  return (
    <div className='flex-items-center justify-between p-4 bg-red-950 shadow-md rounded-md'>
        <ul className='flex gap-4 text-lg font-medium text-gray-600'>
        <li className='hover:text-blue-500 cursor-pointer'><img src="https://images.pexels.com/photos/31741556/pexels-photo-31741556/free-photo-of-iconic-liverpool-fc-logo-on-rustic-wall.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='h-20 h-20'/>
        </li>
    
            <li className='hover:text-blue-500 cursor-pointer'>Home</li>
            <li className='hover:text-blue-500 cursor-pointer'>About</li>
            <li className='hover:text-blue-500 cursor-pointer'>Contact</li>
        </ul>
    </div>
  )
}


export default header