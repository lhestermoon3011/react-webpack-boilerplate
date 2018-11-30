import React from "react";
import { ButtonGroup, Button } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";

class TableRow extends React.Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }
  removeProduct(id) {
    this.setState({
      id: this.state.obj.map.filter(el => el != id)
    });
  }
  delete() {
    axios
      .get("http://localhost:4000/products/delete/" + this.props.obj._id)
      .then(() => {
        console.log("Deleted");
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
    // this.removeProduct(this.props.obj._id);
  }
  render() {
    return (
      <tr>
        <td>{this.props.obj.name}</td>
        <td>{this.props.obj.description}</td>
        <td>{this.props.obj.quantity} Pieces</td>
        <td>P{this.props.obj.price}</td>
        <td>
          <ButtonGroup>
            <Link
              to={`/edit/${this.props.obj._id}`}
              className="btn btn-danger"
              title={`Edit ${this.props.obj.name}`}
            >
              <i className="fa fa-edit fa-fw" />
            </Link>
            <Button
              onClick={this.delete}
              className="btn btn-info"
              title={`Delete ${this.props.obj.name}`}
            >
              <i className="fa fa-trash fa-fw" />
            </Button>
          </ButtonGroup>
        </td>
      </tr>
    );
  }
}

export default withRouter(TableRow);
