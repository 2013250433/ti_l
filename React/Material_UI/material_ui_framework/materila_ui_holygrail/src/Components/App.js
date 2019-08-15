import React, {Fragment} from "react"
import {Root} from "./Layouts"
import "./styles.css"
import {CssBaseline} from "@material-ui/core"

export default function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Root className="Root" />
    </Fragment>
  )
}
