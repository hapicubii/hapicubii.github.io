import React, { Component } from 'react'
import Table from './Table'
import coverists from './coverists'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Table characterData={coverists} />
      </div>
    )
  }
}

export default App
