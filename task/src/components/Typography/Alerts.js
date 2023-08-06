import ElementCard from "../layout/ElementCard";
import ElementCode from "../layout/ElementCode";
import { Alert } from "react-bootstrap";
const Alerts = function () {
  const code = `
  <Alert variant="light">This is a text written for demonstration</Alert>
  <Alert variant="dark">This is a text written for demonstration</Alert>
  <Alert variant="primary">
    This is a text written for demonstration
  </Alert>
  <Alert variant="secondary">
    This is a text written for demonstration
  </Alert>
  {/* <Alert variant="main">This is a text written for demonstration</Alert>
  <Alert variant="sec">This is a text written for demonstration</Alert>
  <Alert variant="terinary">
    This is a text written for demonstration
  </Alert> */}
  <Alert variant="warning">
    This is a text written for demonstration
  </Alert>
  <Alert variant="info">This is a text written for demonstration</Alert>
  <Alert variant="success">
    This is a text written for demonstration
  </Alert>
  <Alert variant="danger">This is a text written for demonstration</Alert>
  <br />
  <h2>Alerts with Links</h2>
  <Alert variant="light">
    This is a text written for <Alert.Link>demonstration</Alert.Link>
  </Alert>
  <Alert variant="dark">
    This is a text written for <Alert.Link>demonstration</Alert.Link>
  </Alert>
  <Alert variant="primary">
    This is a text written for <Alert.Link>demonstration</Alert.Link>
  </Alert>
  <Alert variant="secondary">
    This is a text written for <Alert.Link>demonstration</Alert.Link>
  </Alert>
  <Alert variant="warning">
    This is a text written for <Alert.Link>demonstration</Alert.Link>
  </Alert>
  <Alert variant="info">
    This is a text written for <Alert.Link>demonstration</Alert.Link>
  </Alert>
  <Alert variant="success">
    This is a text written for <Alert.Link>demonstration</Alert.Link>
  </Alert>
  <Alert variant="danger">
    This is a text written for <Alert.Link>demonstration</Alert.Link>
  </Alert>
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
        {/* <Alert variant="main">This is a text written for demonstration</Alert>
        <Alert variant="sec">This is a text written for demonstration</Alert>
        <Alert variant="terinary">
          This is a text written for demonstration
        </Alert> */}
        <Alert variant="warning">
          This is a text written for demonstration
        </Alert>
        <Alert variant="info">This is a text written for demonstration</Alert>
        <Alert variant="success">
          This is a text written for demonstration
        </Alert>
        <Alert variant="danger">This is a text written for demonstration</Alert>
        <br />
        <h2>Alerts with Links</h2>
        <Alert variant="light">
          This is a text written for <Alert.Link>demonstration</Alert.Link>
        </Alert>
        <Alert variant="dark">
          This is a text written for <Alert.Link>demonstration</Alert.Link>
        </Alert>
        <Alert variant="primary">
          This is a text written for <Alert.Link>demonstration</Alert.Link>
        </Alert>
        <Alert variant="secondary">
          This is a text written for <Alert.Link>demonstration</Alert.Link>
        </Alert>
        <Alert variant="warning">
          This is a text written for <Alert.Link>demonstration</Alert.Link>
        </Alert>
        <Alert variant="info">
          This is a text written for <Alert.Link>demonstration</Alert.Link>
        </Alert>
        <Alert variant="success">
          This is a text written for <Alert.Link>demonstration</Alert.Link>
        </Alert>
        <Alert variant="danger">
          This is a text written for <Alert.Link>demonstration</Alert.Link>
        </Alert>
      </ElementCard>
      <ElementCode code={code}></ElementCode>
    </>
  );
};
export default Alerts;
