import React from 'react'
import './app.less'

const App = () => {
  return (
    <div>
      <div>this is parcel demo121</div>
      <p>FOO: {process.env.FOO}</p>
      <p>BAR: {process.env.BAR}</p>
      <button
        onClick={() => {
          import('./async').then(() => {
            console.log('async component loaded')
          })
        }}
      >
        click to fetch
      </button>
    </div>
  )
}

export default App
