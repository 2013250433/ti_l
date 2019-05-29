import React from "react"
import {Grid} from "@material-ui/core"
import LeftPane from "./LeftPane"
import RightPane from "./RightPane"

const styles = {
	Paper: {
		padding: 20,
		marginTop: 10,
		marginBottom: 10
	}
}
export default props => (
	<Grid container sm={12}>
		<Grid item sm={6}>
			<LeftPane styles={styles} />
		</Grid>
		<Grid item sm={6}>
			<RightPane styles={styles} />
		</Grid>
	</Grid>
)