import React from 'react'

const Add = () => {
  return (
    <div>
      <input type="text" placeholder='add name'/>
      <input type="number" placeholder='add price'/>
      <div>
      Discounted <input type="checkbox"/>
      </div>
      <button>Add</button>
    </div>
  )
}

export default Add
