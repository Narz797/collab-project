import { Container, Row, Col, Form } from "react-bootstrap";
import logo from "../burntot/FB_IMG_1586272040225.jpg";
import FormComponent from "../components/form";
import ButtonComponent from "../components/buttons";

export default function Home() {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center align-items-center">
        <Col
          md={4}
          lg={3}
          className="d-flex justify-content-center align-items-center mb-3 mb-md-0"
        >
          <img
            src={logo}
            alt="Logo"
            style={{ width: "150px", height: "150px" }} // Adjust the size as needed
          />
        </Col>
        <Col md={8} lg={6}>
          <div className="d-flex align-items-center mb-3">
            <h2>Welcome to Burn's World</h2>
          </div>
          <Form>
            <FormComponent labelName="Email Address" typeName="email" />
            <FormComponent labelName="Password" typeName="password" />
            <ButtonComponent
              variantName="primary"
              TypeName="submit"
              labelName="Submit"
            />
          </Form>
        </Col>
      </Row>
    </Container>
  );
}