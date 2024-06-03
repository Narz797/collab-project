import { Container, Row, Col, Form } from "react-bootstrap";
import logo from "../burntot/pic.jpg";
import under_img from "../burntot/burn.jpg";
import FormComponent from "../components/form";
import ButtonComponent from "../components/buttons";
import ImageComponent from "../components/ImageRounds";

export default function Home() {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center align-items-center">
        <Col
          md={4}
          lg={3}
        >
          <ImageComponent source={logo}/>
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
        <Col>
        <ImageComponent source={under_img} shape={"roundedSquare"}/>
        </Col>
      </Row>
    </Container>
  );
}
