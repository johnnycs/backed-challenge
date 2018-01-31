import React, { Component } from 'react';
import {DropDownMenu, MenuItem, SelectField} from 'material-ui'
import { Grid, Row, Col } from 'react-flexbox-grid';

class CategoryFilter extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ""
    }
  }
  handledDropdown = (event, idx, val) => {
    this.props.onChange({
      target: {
        value:  val
      }
    })
    this.setState({
      value:val
    })
  }
  render () {
    const styles = {
      block: {
        maxWidth: 150,
      },
      toggle: {
        marginTop: 16,
      }
    }
    return (
      <div>
        <Grid fluid>
          <Row between="xs">
            <DropDownMenu value={this.props.data}
              style={{width:'100%'}}
              autoWidth={false}
              onChange={this.handledDropdown}>
              <MenuItem value="food" primaryText="Food"/>
              <MenuItem value="drinks" primaryText="Drinks"/>
              <MenuItem value="dne" primaryText="Does Not Exist"/>
              <MenuItem value="default" primaryText="Show All"/>
            </DropDownMenu>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default CategoryFilter;
