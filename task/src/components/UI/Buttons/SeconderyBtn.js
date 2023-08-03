import ElementCard from "../../layout/ElementCard";
import { Button } from "react-bootstrap";
import ElementCode from "../../layout/ElementCode";
const SecondaryBtn = function () {
  const code = `<Button variant="sec" className="shadow me-3" type="button">Secondary Button</Button>
 <Button variant="outline-sec" className="shadow" type="button">Secondary Button</Button>
 <Button variant="sec" className="disabled shadow me-3" type="button">Disabled</Button>
 <Button variant="outline-sec" className="disabled shadow" type="button"
 >Diasabled</Button>`;
  return (
    <>
      <ElementCard name="Secondary Button">
        <Button variant="sec" className="shadow me-3" type="button">
          Secondary Button
        </Button>
        <Button variant="outline-sec" className="shadow" type="button">
          Secondary Button
        </Button>
        <h4 className="my-2">Diasabled</h4>
        <Button variant="sec" className="disabled shadow me-3" type="button">
          Disabled
        </Button>
        <Button variant="outline-sec" className="disabled shadow" type="button">
          Diasabled
        </Button>
      </ElementCard>
      <ElementCode code={code}></ElementCode>
    </>
  );
};
export default SecondaryBtn;
