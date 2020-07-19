import React from 'react'

export default ({ title = 'about', text = '' }) => {
  return (
    <div>
      <h1>About Ashish</h1>
      <p dangerouslySetInnerHTML={{ __html: text }}></p>
    </div>
  )
}
