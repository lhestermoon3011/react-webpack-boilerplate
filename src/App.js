import React from "react";
import { Container, Row, Col } from "reactstrap";
import Header from "./frontend/layouts/Header";
import Main from "./frontend/layouts/Main";

class App extends React.Component {
  render() {
    return (
      <div style={{ background: "#f0f0f0" }}>
        <Container>
          <Row>
            <Col xs="12" sm="4">
              <Header />
            </Col>
            <Col xs="12" sm="8">
              <Main />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
