import React, { Component } from 'react'
import { MenuItem, TextField } from '@material-ui/core'

export class Selection extends Component {

  //   circle = () => {
  //   return (
  //     <svg width="100" height="100">
  //       <circle cx="50" cy="50" r={this.props.radius} stroke="green" stroke-width="4" fill="yellow" />
  //     </svg>
  //   )
  // }
  
  render() {
    return (
      <div style={styles.div} >

        <TextField label='Shapes' style={styles.select} onChange={this.props.shapes} variant='outlined' select>
          <MenuItem style={styles.MenuItem} dense > Select Shape </MenuItem>
          <MenuItem style={styles.MenuItem} value='circle' > Circle </MenuItem>
          <MenuItem style={styles.MenuItem} value='ellipse'> Ellipse </MenuItem>
          <MenuItem style={styles.MenuItem} value='triangle'> Triangle </MenuItem>
          <MenuItem style={styles.MenuItem} value='square'> Square </MenuItem>
          <MenuItem style={styles.MenuItem} value='rectangle'> Rectangle </MenuItem>
          <MenuItem style={styles.MenuItem} value='pentagon'> Pentagon (5) </MenuItem>
          <MenuItem style={styles.MenuItem} value='hexagon'> Hexagon (6) </MenuItem>
        </TextField>

        <TextField label='Color' style={styles.select} onChange={this.props.colors} color='secondary' variant='outlined' select>
          <MenuItem style={styles.MenuItem} dense value='white' > Select Color </MenuItem>
          <MenuItem style={styles.MenuItem} value= 'red' > Red </MenuItem>
          <MenuItem style={styles.MenuItem} value='orange'> Orange </MenuItem>
          <MenuItem style={styles.MenuItem} value='yellow'> Yellow </MenuItem>
          <MenuItem style={styles.MenuItem} value='green'> Green </MenuItem>
          <MenuItem style={styles.MenuItem} value='blue'> Blue </MenuItem>
          <MenuItem style={styles.MenuItem} value='Indigo'> Indigo </MenuItem>
          <MenuItem style={styles.MenuItem} value='violet'> Violet </MenuItem>
          <MenuItem style={styles.MenuItem} value='black'> Black </MenuItem>
        </TextField>
        <br /> <br /> <br /> <br />


      </div>
    )
  }
}

const styles = {
  div: {
    marginTop: '20px',
    padding: '20px',

  },
  select: {
    padding: '10px',
    marginTop: '20px',
    // borderRadius: '4px',
    // backgroundColor: 'rgb(0, 188, 212)',
    // color: '#FFFFFF',
    textAlign: 'center',
    // border: '2px black solid',
    fontSize: '18px',
    width: '180px',
    transition: 'all 1s',
    // alignItems: 'center',  
    cursor: 'pointer',
    margin: '5px',
  },
  MenuItem: {
    // backgroundColor: '#FFFFFF',
    transition: 'all 1s',
    color: '#000000'
  },
  dimensions: {
    padding: '10px'
  }
}

export default Selection;


            // <TextField label='Select Type' value='Select Type' size='large' select >
            // {/* <Select labelId='shapes' id='select' value='10'> */}
            //   <MenuItem>Polygons</MenuItem>
            //   <MenuItem>Polygons</MenuItem>
            //   <MenuItem>Polygons</MenuItem>
            // </TextField>
