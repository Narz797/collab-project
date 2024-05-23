import React from "react";
import Button from "react-bootstrap/Button";
interface ButtonsExtension {
  variantName: string;
  TypeName: any;
  labelName: string;
}
const ButtonsComponent: React.FC<ButtonsExtension> = ({
  variantName,
  TypeName,
  labelName,
}) => {
  return (
    <>
      <Button variant={variantName} type={TypeName} className="mt-3">
        {labelName}
      </Button>
    </>
  );
};

export default ButtonsComponent;
