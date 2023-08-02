import ElementCard from "../../layout/ElementCard";
import { Button } from "react-bootstrap";
import ElementCode from "../../layout/ElementCode";
const MainBtn = function() {
    const code = `<Button variant="main" className="shadow me-3" type="button">Main Button</Button>
<Button variant="outline-main" className="shadow" type="button">Main Button</Button>>`;
    return (
        <>
            <ElementCard name="Main Button">
                <Button variant="main" className="shadow me-3" type="button">Main Button</Button>
                <Button variant="outline-main" className="shadow" type="button">Main Button</Button>
            </ElementCard>
            <ElementCode code={code}></ElementCode>
        </>
    )
}
export default MainBtn;