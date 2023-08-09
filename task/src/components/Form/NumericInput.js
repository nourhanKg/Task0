import ElementCard from "../layout/ElementCard";
import ElementCode from "../layout/ElementCode";
import { FormControl, FormLabel, FormGroup } from "react-bootstrap";
const NumericInput = function() {
    const code = `
    <FormGroup>
        <FormLabel htmlFor="form.numericInput">Numeric Input<span className="text-danger">*</span></FormLabel>
        <FormControl id="form.numericInput" type="number" placeholder="10" step="10" min="0" max="100" required></FormControl>
    </FormGroup>
    `;
    return (
        <>
            <ElementCard name="Numeric Input">
                <FormGroup>
                    <FormLabel htmlFor="form.numericInput">Numeric Input<span className="text-danger">*</span></FormLabel>
                    <FormControl id="form.numericInput" type="number" placeholder="10" step="10" min="0" max="100" required></FormControl>
                </FormGroup>
            </ElementCard>
            <ElementCode code={code}></ElementCode>
        </>
    )
}
export default NumericInput;