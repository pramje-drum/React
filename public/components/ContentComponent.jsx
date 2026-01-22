import React from 'react'
import ChildContent from './ChildContent'

const ContentComponent = ({category}) => {
  return (
    <div>
      {/* heading */}
        <div className='flex justify-center'>
            <h1>{category}</h1>
        </div>
      
      {/* child content */}
      <div>
        <ChildContent category = {category}/>
      </div>
    </div>
  )
}

export default ContentComponent
