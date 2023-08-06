import ElementCard from "../../layout/ElementCard";
import ElementCode from "../../layout/ElementCode";
import { Tab, Tabs } from "react-bootstrap";
const TabElement = function () {
  const code = `
  <Tabs defaultActiveKey="one" id="tab-example1" className="mb-3">
    <Tab eventKey="one" title="One">
      Tab content one
    </Tab>
    <Tab eventKey="two" title="Two">
      Tab content for tow
    </Tab>
    <Tab eventKey="three" title="Three" disabled>
      Tab content for three
    </Tab>
  </Tabs>
  <Tabs
    defaultActiveKey="one"
    id="tab-example1"
    className="mb-3 justify-content-center"
  >
    <Tab eventKey="one" title="One">
      Tab content one
    </Tab>
    <Tab eventKey="two" title="Two">
      Tab content for tow
    </Tab>
    <Tab eventKey="three" title="Three" disabled>
      Tab content for three
    </Tab>
  </Tabs>
  <Tabs
    defaultActiveKey="one"
    id="tab-example1"
    className="mb-3 justify-content-end"
  >
    <Tab eventKey="one" title="One">
      Tab content one
    </Tab>
    <Tab eventKey="two" title="Two">
      Tab content for tow
    </Tab>
    <Tab eventKey="three" title="Three" disabled>
      Tab content for three
    </Tab>
  </Tabs>
  <br />
  <Tabs defaultActiveKey="one" id="tab-example2" className="mb-3" fill>
    <Tab eventKey="one" title="One">
      Tab content one
    </Tab>
    <Tab eventKey="two" title="Two">
      Tab content for tow
    </Tab>
    <Tab eventKey="three" title="Three" disabled>
      Tab content for three
    </Tab>
  </Tabs>
  <Tabs defaultActiveKey="one" id="tab-example3" className="mb-3" justify>
    <Tab eventKey="one" title="One">
      Tab content one
    </Tab>
    <Tab eventKey="two" title="Twenty twenty">
      Tab content for tow
    </Tab>
    <Tab eventKey="three" title="Three" disabled>
      Tab content for three
    </Tab>
  </Tabs>
  <Tabs
    defaultActiveKey="one"
    id="tab-example4"
    className="mb-3 flex-column"
    justify
  >
    <Tab eventKey="one" title="One">
      Tab content one
    </Tab>
    <Tab eventKey="two" title="Two">
      Tab content for tow
    </Tab>
    <Tab eventKey="three" title="Three" disabled>
      Tab content for three
    </Tab>
  </Tabs>
  <Tabs
    defaultActiveKey="one"
    variant="pills"
    id="tab-example5"
    className="mb-3"
  >
    <Tab eventKey="one" title="One">
      Tab content one
    </Tab>
    <Tab eventKey="two" title="Two">
      Tab content for tow
    </Tab>
    <Tab eventKey="three" title="Three" disabled>
      Tab content for three
    </Tab>
  </Tabs>
  `;
  return (
    <>
      <ElementCard name="Tabs">
        <h2>Different Aligment</h2>
        <Tabs defaultActiveKey="one" id="tab-example1" className="mb-3">
          <Tab eventKey="one" title="One">
            Tab content one
          </Tab>
          <Tab eventKey="two" title="Two">
            Tab content for tow
          </Tab>
          <Tab eventKey="three" title="Three" disabled>
            Tab content for three
          </Tab>
        </Tabs>
        <Tabs
          defaultActiveKey="one"
          id="tab-example1"
          className="mb-3 justify-content-center"
        >
          <Tab eventKey="one" title="One">
            Tab content one
          </Tab>
          <Tab eventKey="two" title="Two">
            Tab content for tow
          </Tab>
          <Tab eventKey="three" title="Three" disabled>
            Tab content for three
          </Tab>
        </Tabs>
        <Tabs
          defaultActiveKey="one"
          id="tab-example1"
          className="mb-3 justify-content-end"
        >
          <Tab eventKey="one" title="One">
            Tab content one
          </Tab>
          <Tab eventKey="two" title="Two">
            Tab content for tow
          </Tab>
          <Tab eventKey="three" title="Three" disabled>
            Tab content for three
          </Tab>
        </Tabs>
        <br />
        <h2>Full Tab</h2>
        <Tabs defaultActiveKey="one" id="tab-example2" className="mb-3" fill>
          <Tab eventKey="one" title="One">
            Tab content one
          </Tab>
          <Tab eventKey="two" title="Two">
            Tab content for tow
          </Tab>
          <Tab eventKey="three" title="Three" disabled>
            Tab content for three
          </Tab>
        </Tabs>
        <h2>Equal Width</h2>
        <Tabs defaultActiveKey="one" id="tab-example3" className="mb-3" justify>
          <Tab eventKey="one" title="One">
            Tab content one
          </Tab>
          <Tab eventKey="two" title="Twenty twenty">
            Tab content for tow
          </Tab>
          <Tab eventKey="three" title="Three" disabled>
            Tab content for three
          </Tab>
        </Tabs>
        <h2>Vertical Tabs</h2>
        <Tabs
          defaultActiveKey="one"
          id="tab-example4"
          className="mb-3 flex-column"
          justify
        >
          <Tab eventKey="one" title="One">
            Tab content one
          </Tab>
          <Tab eventKey="two" title="Two">
            Tab content for tow
          </Tab>
          <Tab eventKey="three" title="Three" disabled>
            Tab content for three
          </Tab>
        </Tabs>
        <h2>Pill Tabs</h2>
        <Tabs
          defaultActiveKey="one"
          variant="pills"
          id="tab-example5"
          className="mb-3"
        >
          <Tab eventKey="one" title="One">
            Tab content one
          </Tab>
          <Tab eventKey="two" title="Two">
            Tab content for tow
          </Tab>
          <Tab eventKey="three" title="Three" disabled>
            Tab content for three
          </Tab>
        </Tabs>
      </ElementCard>
      <ElementCode code={code}></ElementCode>
    </>
  );
};
export default TabElement;
