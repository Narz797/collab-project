import React from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

interface ImagesProps {
  source: string;
  shape?: "rounded" | "roundedSquare" | "thumbnail";
}

const ShapeImages: React.FC<ImagesProps> = ({ source, shape }) => {
  const shapeClass =
    shape === "roundedSquare"
      ? "rounded-square"
      : shape === "thumbnail"
      ? "img-thumbnail"
      : "rounded";

  return (
    <Container>
      <Image
        src={source}
        className={`img-fluid ${shapeClass}`}
        style={{ maxWidth: "190px" }}
      />
    </Container>
  );
};

export default ShapeImages;
