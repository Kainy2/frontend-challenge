import React, { Component } from 'react'
import { Checkbox, TextField } from '@material-ui/core'
import Checkboxes from "./Checkboxes"

export class Finished extends Component {
  state = {
    mainDimension: 200,
    secDimension: 120,
    checked: false,
  }

  dimension = (e) => this.setState({ mainDimension: e.target.value })
  dimension2 = (e) => this.setState({ secDimension: e.target.value })

  handleChange = (e) => this.setState({ checked: e.target.checked })

  render() {
    const s = Number(this.state.mainDimension) + 10;
    const x = Number(this.state.mainDimension / 2) + 10;
    const y = Math.sqrt(3 * s * s / 4) + 10;
    switch (this.props.keys) {
      //                                        CIRCLE
      case '1':
        return (
          <div>
            <TextField label='Radius' type='number' onChange={this.dimension} value={this.state.mainDimension} />
            <br /><br /><br />

            <svg width={(this.state.mainDimension * 2) + 10} height={(this.state.mainDimension * 2) + 10}>
              <circle cx={((this.state.mainDimension * 2) + 10) / 2} cy={((this.state.mainDimension * 2) + 10) / 2} r={this.state.mainDimension} stroke="gray" stroke-width="4" fill={this.props.color} opacity='0.8' />
            </svg>
          </div>
        )

      //                                        ELLIPSE
      case '2':
        return (
          <div>
            <TextField label='Horizontal Radius:' type='number' onChange={this.dimension} value={this.state.mainDimension} /> <br /><br />
            <TextField label='Vertical Radius:' type='number' onChange={this.dimension2} value={this.state.secDimension} />
            <br /><br /><br />

            <svg width={(this.state.mainDimension * 2) + 10} height={(this.state.secDimension * 2) + 10}>
              <ellipse cx={((this.state.mainDimension * 2) + 10) / 2} cy={((this.state.secDimension * 2) + 10) / 2} rx={this.state.mainDimension} ry={this.state.secDimension} stroke="gray" stroke-width="4" fill={this.props.color} />
            </svg>
          </div>
        )

      //                                           TRIANGLE
      case '3':
        return (
          <div>
            <TextField label='Side' type='number' onChange={this.dimension} value={this.state.mainDimension} />
            <br /><br /><br />

            <svg height={Number(y) + 10} width={Number(s) + 10}>
              <polygon points={`
              10,${y} 
              ${x},10 
              ${s},${y}
              `} fill={this.props.color} stroke='gray' stroke-width="4" />
            </svg>
          </div>
        )

      //                                          SQUARE
      case '4':
        return (
          <div>
            <TextField label='Length:' type='number' onChange={this.dimension} value={this.state.mainDimension} />
            <br /><br /><br />

            <svg width={this.state.mainDimension} height={this.state.mainDimension}>
              <rect width={this.state.mainDimension} height={this.state.mainDimension} stroke='gray' stroke-width="4" fill={this.props.color} />
            </svg>
          </div>
        )

      //                                         RECTANGLE
      case '5':
        return (
          <div>
            <TextField label='Length:' type='number' onChange={this.dimension} value={this.state.mainDimension} /> <br /><br />
            <TextField label='Width:' type='number' onChange={this.dimension2} value={this.state.secDimension} />
            <br /><br /><br />

            <svg width={this.state.mainDimension} height={this.state.secDimension}>
              <rect width={this.state.mainDimension} height={this.state.secDimension} stroke='grey' stroke-width="4" fill={this.props.color} />
            </svg>
          </div>
        )

      //                                            PENTAGON
      case '6':
        return (
          <div>
            <TextField label='Side' type='number' onChange={this.dimension} value={this.state.mainDimension} />
            <br /><br /><br />

            <svg height={y + s + 10} width={s + 10}>

              <polygon points={`
              10,${y + s - 10} 
              10,${y} ${x},10 
              ${s},${y} 
              ${s},${y + s - 10}
              `} fill={this.props.color} stroke='gray' stroke-width="4" />
            </svg>
          </div>
        )

      //                                             HEXAGON
      case '7':
        //                    Default Orientation
        if (this.state.checked === false) {

          return (
            <div>
              <TextField label='Side' type='number' onChange={this.dimension} value={this.state.mainDimension} />
              <br />
              <Checkbox checked={this.state.checked} onChange={this.handleChange} />
              <b>Rotate</b>
              <br /><br />

              <svg height={Number(2 * y) + 10} width={Number(2 * x + s) + 10} >
                <polygon points={`
                  10,${y} 
                  ${x},10 
                  ${x + s - 10},10 
                  ${2 * x + s - 20},${y} 
                  ${x + s - 10},${2 * y - 10} 
                  ${x},${2 * y - 10}
                  `} fill={this.props.color} stroke='gray' stroke-width="4" />
              </svg>
            </div>
          )

          //                    Rotated Orientation
        } if (this.state.checked === true) {
          return (
            <div>
              <TextField label='Side' type='number' onChange={this.dimension} value={this.state.mainDimension} />
              <br />
              <Checkbox checked={this.state.checked} onChange={this.handleChange} />
              <b>Rotate</b>
              <br /><br />

              <svg height={Number(2 * x) + s} width={Number(2 * y) + 10}>
                <polygon points={`
                  ${y},10 
                  ${2 * y}, ${x} 
                  ${2 * y}, ${x + s - 10} 
                  ${y},${2 * x + s - 20} 
                  10,${x + s - 10} 
                  10,${x} 
                  `} fill={this.props.color} stroke='gray' stroke-width="4" />
              </svg>
            </div>
          )
          //  10,${y} ${x},10 ${x + s - 10},10 ${2 * x + s - 20},${y} ${x + s - 10},${2 * y - 10} ${x},${2 * y - 10}
        }

      default:
        return <div></div>
    }

  }
}

export default Finished