import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Button } from "reactstrap";

class Header extends React.Component {
  render() {
    return (
      <Card className="mt-5 mb-5" style={{ height: "85vh" }}>
        <CardBody>
          <h4 className="text-center text-danger">MERN CRUD</h4>
          <h2 className="text-center">Product Recording System</h2>
          <hr />
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button color="info" className="btn-block btn-lg mb-2">
              Home
            </Button>
          </Link>
          <Link to="/add-product" style={{ textDecoration: "none" }}>
            <Button color="info" className="btn-block btn-lg mb-2">
              Add Product
            </Button>
          </Link>
        </CardBody>
      </Card>
    );
  }
}

export default Header;
