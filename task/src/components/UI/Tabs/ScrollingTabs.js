import ElementCard from "../../layout/ElementCard";
import ElementCode from "../../layout/ElementCode";
// import { Tab, Tabs } from "react-bootstrap";
const ScrollingTabs = function () {
  const code = `
  `;
  return (
    <>
      <ElementCard name="Scrolling Tabs">
        <div className="bg-dark text-light d-flex justify-content-center align-items-center">
          <ul className="bg-info list-unstyled d-flex justify-content-center align-items-center my-0 w-100 mx-3">
            <li
              className="bg-success px-3 py-2 me-2 text-light"
              style={{ width: "10rem" }}
            >
              <a className="text-light text-decoration-none" href="#">
                Link
              </a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
          </ul>
        </div>
      </ElementCard>
      <ElementCode code={code}></ElementCode>
    </>
  );
};
export default ScrollingTabs;
