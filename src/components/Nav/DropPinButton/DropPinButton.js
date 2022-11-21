import React from "react";

import Button from "react-bootstrap/Button";

function DropPinButton() {
  return (
    <>
      <Button
        className="d-grid d-flex justify-content-end"
        fixed="bottom"
        size="lg"
        variant="secondary"
      >
        Drop New Pin
      </Button>
    </>
  );
}

export default DropPinButton;
