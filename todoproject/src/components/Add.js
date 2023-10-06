import React, { useState } from "react";

import { Container, Row, Col } from "react-bootstrap";
const Add = ({ addTask }) => {
  const [value, setValue] = useState("");
  const addItem = () => {
    const trimmedValue = value.trim();
    if (trimmedValue !== "") {
      addTask(trimmedValue);
      setValue("");
    } else {
      alert("Pleae enter a Valid task....");
    }
  };

  return (
    <div>
      <Container>
        <Row>
          <Col
            xs={12}
            className="d-flex justify-content-center align-items-center"
          >
            {/* Content */}
            <div className="inputouter">
              <input
                className="input"
                value={value}
                onChange={(e) => {
                  setValue(e.target.value);
                }}
                placeholder=" Add new tasks hear..."
              />{" "}
              <button type="button" className="btn" onClick={addItem}>
                Add
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Add;
