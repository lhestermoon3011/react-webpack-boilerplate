import React from "react";
import axios from "axios";
import { Alert, Form, FormGroup, Label, Input, Button } from "reactstrap";

class EditProduct extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: "",
      quantity: "",
      price: ""
    };
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeQuantity = this.onChangeQuantity.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    axios
      .get("http://localhost:4000/products/edit/" + this.props.match.params.id)
      .then(response => {
        this.setState({
          name: response.data.name,
          description: response.data.description,
          quantity: response.data.quantity,
          price: response.data.price
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }
  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }
  onChangeQuantity(e) {
    this.setState({
      quantity: e.target.value
    });
  }
  onChangePrice(e) {
    this.setState({
      price: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const product = {
      name: this.state.name,
      description: this.state.description,
      quantity: this.state.quantity,
      price: this.state.price
    };
    axios
      .post(
        "http://localhost:4000/products/update/" + this.props.match.params.id,
        product
      )
      .then(res => {
        console.log(res.data);
        alert("Product has been updated");
      });
    setTimeout(() => {
      this.props.history.push("/");
    }, 1500);
  }
  render() {
    return (
      <div className="mt-5">
        <h3>Edit Product</h3>
        <hr />
        <Form onSubmit={this.onSubmit}>
          <FormGroup>
            <Label>Product Name:</Label>
            <Input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.onChangeName}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Description:</Label>
            <Input
              type="textarea"
              name="description"
              value={this.state.description}
              onChange={this.onChangeDescription}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Quantity:</Label>
            <Input
              type="number"
              name="quantity"
              value={this.state.quantity}
              onChange={this.onChangeQuantity}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Price:</Label>
            <Input
              type="number"
              name="price"
              value={this.state.price}
              onChange={this.onChangePrice}
              required
            />
          </FormGroup>
          <Button color="danger" className="btn-lg">
            Update Product
          </Button>
        </Form>
      </div>
    );
  }
}

export default EditProduct;
