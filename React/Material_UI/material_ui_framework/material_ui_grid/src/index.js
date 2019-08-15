import React from "react"
import ReactDOM from "react-dom"

import "./styles.css"
import {Header, BottomContent, TopContent} from "./Components/Layouts"

function App() {
  return (
    <div className="App">
      <Header> </Header>
      <TopContent> </TopContent>
      <BottomContent> </BottomContent>
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
