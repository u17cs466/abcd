import React from 'react'
import {connect} from "react-redux"
import './App.css';
import Counter from "./components/Counter"

const App = () => {
  return (
    <div className="App">
      <Counter/>
    </div>
  )
}
export default App;