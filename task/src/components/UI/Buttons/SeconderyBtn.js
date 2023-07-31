import ElementCard from "../../layout/ElementCard";
import { Button } from "react-bootstrap";
import ElementCode from "../../layout/ElementCode";
const SecondaryBtn = function() {
    return (
        <>
            <ElementCard name="Secondary Button">
                <Button variant="warning" type="button">Secondary Button</Button>
            </ElementCard>
            <ElementCode>The Code</ElementCode>
        </>
    )
}
export default SecondaryBtn;