import ElementCard from "../../layout/ElementCard";
import { Button } from "react-bootstrap";
import ElementCode from "../../layout/ElementCode";
const TerinaryBtn = function () {
  const code = `<Button variant="terinary" className="shadow me-3" type="button">Terinary Button</Button>
<Button variant="outline-terinary" className="shadow" type="button">Terinary Button</Button>
<Button variant="terinary" className="disabled shadow me-3" type="button">Disabled</Button>
<Button variant="outline-terinary" className="disabled shadow" type="button"
>Diasabled</Button>`;
  return (
    <>
      <ElementCard name="Terinary Button">
        <Button variant="terinary" className="shadow me-3" type="button">
          Terinary Button
        </Button>
        <Button variant="outline-terinary" className="shadow" type="button">
          Terinary Button
        </Button>
        <h4 className="my-2">Diasabled</h4>
        <Button
          variant="terinary"
          className="disabled shadow me-3"
          type="button"
        >
          Disabled
        </Button>
        <Button
          variant="outline-terinary"
          className="disabled shadow"
          type="button"
        >
          Diasabled
        </Button>
      </ElementCard>
      <ElementCode code={code}></ElementCode>
    </>
  );
};
export default TerinaryBtn;
