import ElementCard from "../layout/ElementCard";
import ElementCode from "../layout/ElementCode";
import { Alert } from "react-bootstrap";
const Alerts = function () {
  const code = `
<h1 className="h1 text-capitalize text-light bg-dark">
This is title for section
</h1>
<h1 className="h2 text-capitalize text-main">
  This is title for section
</h1>
<h1 className="h3 text-capitalize text-sec">
  This is title for section
</h1>
<h1 className="h4 text-capitalize text-terinary">
  This is title for section
</h1>
<h1 className="h3 text-center text-capitalize text-warning">
    This is title for section
</h1>
<h1 className="h4 text-center text-capitalize text-primary">
    This is title for section
</h1>
<h1 className="h5 text-center text-capitalize text-success">
    This is title for section
</h1>
<h1 className="h6 text-center text-capitalize text-danger">
    This is title for section
</h1>
  `;
  return (
    <>
      <ElementCard name="Alerts with Text">
        <Alert variant="light">This is a text written for demonstration</Alert>
        <Alert variant="dark">This is a text written for demonstration</Alert>
        <Alert variant="primary">
          This is a text written for demonstration
        </Alert>
        <Alert variant="secondary">
          This is a text written for demonstration
        </Alert>
        <Alert variant="main">This is a text written for demonstration</Alert>
        <Alert variant="sec">This is a text written for demonstration</Alert>
        <Alert variant="terinary">
          This is a text written for demonstration
        </Alert>
        <Alert variant="warning">
          This is a text written for demonstration
        </Alert>
        <Alert variant="info">This is a text written for demonstration</Alert>
        <Alert variant="success">
          This is a text written for demonstration
        </Alert>
        <Alert variant="danger">This is a text written for demonstration</Alert>
      </ElementCard>
      <ElementCode code={code}></ElementCode>
    </>
  );
};
export default Alerts;
