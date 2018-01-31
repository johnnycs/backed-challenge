import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import { withRouter } from 'react-router'
import TopBar from './TopBar';
import CategoryFilter from './CategoryFilter';
import {Card, CardActions, CardHeader, CardText, CardTitle} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import CircularProgress from 'material-ui/CircularProgress';
import { Grid, Row, Col } from 'react-flexbox-grid';

class TableList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      category:"food",
    }
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
  }
  componentDidMount() {
    this.props.onLoad();
  }
  handleCategoryChange(event) {
    this.props.onSearch({category:event.target.value})
    this.setState({category:event.target.value})
  }
  render() {
    let dataExists = this.props.data.product.products && this.props.data.product.products.length > 0;
    let products;
    if (dataExists) products = this.props.data.product.products;
    const styles = {
      searchBarStyle : {
        margin: 'auto',
        marginTop: "15px",
        marginBottom: "5px",
        width: '60%',
      },
      cardStyle : {
        width: '60%',
        margin: 'auto',
        marginBottom: '10px'
      }
    }
    return (
      <div>
        <TopBar/>
        <Card style={styles.cardStyle}>
          <CardTitle title="Filters" showExpandableButton={true}/>
          <CardText expandable={true}>
            <CategoryFilter data={this.state.category} onChange={this.handleCategoryChange}/>
          </CardText>
        </Card>
        {dataExists ?
          <Table>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
              <TableRow>
                <TableHeaderColumn>Category</TableHeaderColumn>
                <TableHeaderColumn>Name</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
              { products.map((row,idx) => (
                <TableRow key={idx}>
                  <TableRowColumn>{row.category}</TableRowColumn>
                  <TableRowColumn>{row.name}</TableRowColumn>
                </TableRow>
              ))}
            </TableBody>
          </Table> :
          <Grid><Row center="xs"><Col>
          <CircularProgress style={{marginTop:"100px"}} size={150} thickness={5} />
          </Col></Row></Grid>
        }
      </div>
    )
  }
}
export default withRouter(TableList)
