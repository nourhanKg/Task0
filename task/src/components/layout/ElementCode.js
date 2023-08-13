import { Row, Col } from "react-bootstrap";
const ElementCode = function (props) {
  const copyCode = function () {
    navigator.clipboard.writeText(props.code);
    alert("Code copied")
  };
  return (
    <div className="my-4 shadow-lg bg-dark text-light">
      <Col className="p-3 position-relative">
        <pre>
          <code>{props.code}</code>
        </pre>
        <button
          onClick={copyCode}
          className="position-absolute top-0 end-0 m-2"
        >
          <i className="bi bi-clipboard"></i>
        </button>
      </Col>
    </div>
  );
};
export default ElementCode;
