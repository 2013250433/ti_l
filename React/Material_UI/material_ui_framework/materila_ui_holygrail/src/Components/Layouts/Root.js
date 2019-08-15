import React from "react"
import Grid from "@material-ui/core/Grid"
import Header from "./Header"
import TopContent from "./TopContent"
import BottomContent from "./BottomContent"

import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "PaleGreen",
    display: "grid",
    gridTemplateRows: "200px 1fr 1fr"
  }
}))

export default function Root() {
  const classes = useStyles()

  return (
    <Grid container className={classes.root}>
      <Grid>
        <Header />
      </Grid>
      <Grid>
        <TopContent />
      </Grid>
      <Grid>
        <BottomContent />
      </Grid>
    </Grid>
  )
}
