import ElementCard from "../../layout/ElementCard";
import { Button } from "react-bootstrap";
import ElementCode from "../../layout/ElementCode";
const MainBtn = function () {
  const code = `<Button variant="main" className="shadow me-3" type="button">
  Main Button
</Button>
<Button variant="outline-main" className="shadow" type="button">Main Button</Button>
<Button variant="main" className="disabled shadow me-3" type="button">Disabled</Button>
<Button variant="outline-main" className="disabled shadow" type="button"
>Diasabled</Button>`;
  return (
    <>
      <ElementCard name="Main Button">
        <Button variant="main" className="shadow me-3" type="button">
          Main Button
        </Button>
        <Button variant="outline-main" className="shadow" type="button">
          Main Button
        </Button>
        <h4 className="my-2">Diasabled</h4>
        <Button variant="main" className="disabled shadow me-3" type="button">
          Disabled
        </Button>
        <Button
          variant="outline-main"
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
export default MainBtn;
