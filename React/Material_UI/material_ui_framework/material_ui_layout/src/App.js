import React from "react";
import ReactDOM from "react-dom";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Icon from "@material-ui/core/Icon";
import Typography from "@material-ui/core/Typography";

import { Root, Header, Nav, Content, presets } from "./Layout";

import "./styles.css";

// add presets.create{}() to config props in Root to change the behavior, looking and layout
// <Root config={presets.createCozyLayout()}> ...
function App() {
  return (
    <MuiThemeProvider theme={createMuiTheme()}>
      <Root config={presets.createCozyLayout()}>
        <CssBaseline />
        <Header menuIcon={<Icon>menu</Icon>}>
          <Typography>Header</Typography>
        </Header>
        <Nav>
          <Typography>Nav</Typography>
        </Nav>
        <Content>
          <Typography>Content</Typography>
        </Content>
      </Root>
    </MuiThemeProvider>
  );
}

export default App;