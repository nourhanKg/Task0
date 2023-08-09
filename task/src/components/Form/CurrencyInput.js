import ElementCard from "../layout/ElementCard";
import ElementCode from "../layout/ElementCode";
import { FormControl, FormLabel, FormGroup, InputGroup } from "react-bootstrap";
const CurrencyInput = function() {
    const code = `
    <FormLabel htmlFor="form.currencyInput">Currency Input<span className="text-danger">*</span></FormLabel>
    <InputGroup className="mb-3">
        <InputGroup.Text>ريال</InputGroup.Text>
        <FormControl type="number" placeholder="10,000,000" min="0" id="form.currencyInput"></FormControl>
    </InputGroup>
    `;
    return (
        <>
            <ElementCard name="Currency Input">
                <FormLabel htmlFor="form.currencyInput">Currency Input<span className="text-danger">*</span></FormLabel>
                <InputGroup className="mb-3">
                    <InputGroup.Text>ريال</InputGroup.Text>
                    <FormControl type="number" placeholder="10,000,000" min="0" id="form.currencyInput" className="reuired"></FormControl>
                </InputGroup>
            </ElementCard>
            <ElementCode code={code}></ElementCode>
        </>
    )
}
export default CurrencyInput;