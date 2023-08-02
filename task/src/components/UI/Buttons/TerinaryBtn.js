import ElementCard from "../../layout/ElementCard";
import { Button } from "react-bootstrap";
import ElementCode from "../../layout/ElementCode";
const TerinaryBtn = function() {
    const code = `<Button variant="terinary" className="shadow me-3" type="button">Terinary Button</Button>
<Button variant="outline-terinary" className="shadow" type="button">Terinary Button</Button>`;
    return (
        <>
            <ElementCard name="Terinary Button">
                <Button variant="terinary" className="shadow me-3" type="button">Terinary Button</Button>
                <Button variant="outline-terinary" className="shadow" type="button">Terinary Button</Button>
            </ElementCard>
            <ElementCode code={code}></ElementCode>
        </>
    )
}
export default TerinaryBtn;