import React from "react";
import axios from "axios";
import { Table } from "reactstrap";
import TableRow from "./TableRow";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:4000/products")
      .then(response => {
        this.setState({
          products: response.data
        });
        console.log(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }
  tabRow() {
    return this.state.products.map((object, i) => {
      return <TableRow obj={object} key={i} />;
    });
  }
  render() {
    return (
      <div className="mt-5">
        <h3>Home</h3>
        <hr />
        <Table hover>
          <thead>
            <th>Name</th>
            <th>Descrption</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Options</th>
          </thead>
          <tbody>{this.tabRow()}</tbody>
        </Table>
      </div>
    );
  }
}

export default Home;
