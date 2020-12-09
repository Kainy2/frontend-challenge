import React, { Component } from "react"
import Selection from './Selection'
import Finished from './Finished'
import Header from './Header'

export class Main extends Component {
  state = {
    keys: '0',
    color: 'white',
  }
 
  shapes = (e) => {
    if (e.target.value == 'circle') {
      
      this.setState({ keys: '1' })
    }
    if (e.target.value == 'ellipse') {
      
      this.setState({ keys: '2' })
    }
    if (e.target.value == 'rectangle') {
      
      this.setState({ keys: '3' })
    }
    if (e.target.value == 'square') {
      
      this.setState({ keys: '4' })
    }
  }

  colors = (e) => this.setState({ color: e.target.value })
  
  render() {    
    console.log(this.state.color);

    return (
      <div style={styles.div}>
        <Header />
        <Selection shapes={this.shapes} colors={this.state.color} colors={this.colors} />
        <Finished style={styles.finished} keys={this.state.keys} color={this.state.color} />
      </div>
    )
  }
}

const styles = {
  div: {
    textAlign: 'center'
    
  },
  finished: {
      marginTop: '10px',
    border: '2px solid black',
    // backgroundColor: 'blue'
  }
}

export default Main
