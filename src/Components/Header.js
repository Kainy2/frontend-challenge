import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

export class Header extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title='Shape Design' />
        </React.Fragment>
      </MuiThemeProvider> 
    )
  }
}

export default Header
