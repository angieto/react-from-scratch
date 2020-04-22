import React from "react"
import { hot } from "react-hot-loader"
import "./App.css"

const App = () => <div className="app">Hello</div>

// see changes without hitting refresh
export default hot(module)(App)
