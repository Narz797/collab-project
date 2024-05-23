import { Container } from "react-bootstrap";
import logo from "../burntot/FB_IMG_1586272040225.jpg";
import ImageComponent from "../components/ImageRounds";

export default function NotFound() {
  return (
    <Container className="d-flex flex-column align-items-center justify-content-center mt-5 text-center">
      <ImageComponent source={logo} shape={"roundedCircle"} />
      <p
        className="mt-3"
        style={{ fontSize: "24px", fontFamily: "Arial, sans-serif" }}
      >
        Source Not Found
      </p>
    </Container>
  );
}
