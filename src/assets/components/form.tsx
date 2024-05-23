import React from "react";
import Form from "react-bootstrap/Form";

interface FormNames {
  labelName: string;
  typeName: string;
}

const FormComponent: React.FC<FormNames> = ({ labelName, typeName }) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{labelName}</Form.Label>
      <Form.Control type={typeName} />
    </Form.Group>
  );
};

export default FormComponent;
