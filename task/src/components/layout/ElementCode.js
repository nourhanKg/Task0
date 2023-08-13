import { OverlayTrigger, Tooltip, Overlay} from "react-bootstrap";
import { useState, useRef } from "react";
const ElementCode = function (props) {
  const target = useRef(null);
  const [showOverlay, setShowOverlay] = useState(false);
  const copyBtnHandler = function() {
    copyCode();
    setShowOverlay(true);
    setTimeout(() => setShowOverlay(false), 800);
  }
  const copyCode = function () {
    navigator.clipboard.writeText(props.code);
  };
  return (
    <div className="my-4 shadow-lg bg-dark text-light">
      <div className="p-3 position-relative">
        <pre>
          <code>{props.code}</code>
        </pre>
        <span className="position-absolute top-0 end-0 m-2">
          <button
            ref={target}
            onClick={copyBtnHandler}
          >
            <i className="bi bi-clipboard"></i>
          </button>
          <Overlay target={target.current} show={showOverlay} placement="top">
            {(props) => (
              <Tooltip id="overlay-example" {...props}>
                Copied!
              </Tooltip>
            )}
          </Overlay>
        </span>
      </div>
    </div>
  );
};
export default ElementCode;
