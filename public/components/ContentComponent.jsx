import React from 'react'
import ChildContent from './ChildContent'

const ContentComponent = () => {
  return (
    <div>
      {/* heading */}
        <div className='flex justify-center'>
            <h1>Fruits</h1>
        </div>
      
      {/* child content */}
      <div>
        <ChildContent/>
      </div>
    </div>
  )
}

export default ContentComponent
