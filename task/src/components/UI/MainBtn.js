import ElementCard from "../layout/ElementCard";
import { Button } from "react-bootstrap";
import ElementCode from "../layout/ElementCode";
const MainBtn = function() {
    const code = `<Button variant="success">Main Button</Button>`;
    return (
        <>
            <ElementCard name="Main Button">
                <Button variant="success">Main Button</Button>
            </ElementCard>
            <ElementCode code={code}></ElementCode>
        </>
    )
}
export default MainBtn;