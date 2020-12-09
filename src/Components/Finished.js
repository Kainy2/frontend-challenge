import React, { Component } from 'react'
import { TextField } from '@material-ui/core'

export class Finished extends Component {
  state = {
    mainDimension: '200',
    secDimension: '100',
  }

  dimension = (e) => this.setState({ mainDimension: e.target.value })
  dimension2 = (e) => this.setState({ secDimension: e.target.value })

  render() {
    switch (this.props.keys) {
      case '1':
        return (
          <div>
            <p><b>Radius:</b></p> <br />
            <TextField label='Radius' type='number' onChange={this.dimension} value={this.state.mainDimension} />
            <br /><br /><br />

            <svg width={(this.state.mainDimension * 2) + 10} height={(this.state.mainDimension * 2) + 10}>
              <circle cx={((this.state.mainDimension * 2) + 10) / 2} cy={((this.state.mainDimension * 2) + 10) / 2} r={this.state.mainDimension} stroke="gray" stroke-width="4" fill={this.props.color} opacity='0.8' />
            </svg>
          </div>
        )

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

      case '3':
        return (
          <div>
            <TextField label='Length:' type='number' onChange={this.dimension} value={this.state.mainDimension} /> <br /><br/>
            <TextField label='Width:' type='number' onChange={this.dimension2} value={this.state.secDimension} />
            <br /><br /><br />

            <svg width={this.state.mainDimension} height={this.state.secDimension}>
              <rect width={this.state.mainDimension} height={this.state.secDimension} stroke='grey' stroke-width="4" fill={this.props.color} />
            </svg>
          </div>
        )

      case '4':
        return (
          <div>
            <TextField label='Length:' type='number' onChange={this.dimension} value={this.state.mainDimension} />
            <br /><br /><br />

            <svg width={this.state.mainDimension } height={this.state.mainDimension }>
              <rect width={this.state.mainDimension} height={this.state.mainDimension} stroke='gray' stroke-width="4" fill={this.props.color} />
            </svg>
          </div>
        )

      default:
        return <div></div>
    }

  }
}

export default Finished
