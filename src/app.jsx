import React from 'react'
import './app.less'

const App = () => {
  return (
    <div>
    <div>this is parcel demo121</div>
    <button onClick={() => {
      import('./async').then(() => {
        console.log('async component loaded')
      })
    }}>click to fetch</button>
    </div>
  )
}

export default App