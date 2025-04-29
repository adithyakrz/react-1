import React from 'react'

//dumb component
// props is used to accept the data from the parent component
// props is an object that contains all the properties passed to the component
//props or just add username as parameter
//add a default value to the username so it will use it if username is not passed from the parent component
//array can be passed as a prop but it should be in curly braces in the parent component and normal in the child component
function Card({username="Empty", detail="Not specified",myArr=[1], imglink="https://images.pexels.com/photos/30412413/pexels-photo-30412413/free-photo-of-charming-traditional-japanese-street-view.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"}) {
    //console.log(props);
  return (
    <div>
<div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
  <div>
    <img className
    ="size-48 shadow-xl rounded-md" alt="" src={imglink}/>
  </div>
  <div className="flex items-center md:items-start gap-1 flex-col">
    {/*Adding a conditional statement is not a good practice
    <span className="text-2xl font-medium">{username || 'Class Warfare'}</span>*/}
    <span className="text-2xl font-medium">{username}</span>
    <span className="font-medium text-sky-500">{detail}</span>
    <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
      <span>No. 4</span>
      <span>·</span>
      <span>2025</span>
      <span>{myArr}</span>
      {/*Usage of array!! */}
    </span>
  </div>
</div>
    </div>
  )
}

export default Card