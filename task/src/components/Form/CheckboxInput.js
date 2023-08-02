import ElementCard from "../layout/ElementCard";
import ElementCode from "../layout/ElementCode";
import {FormLabel, FormGroup, FormCheck } from "react-bootstrap";
const CheckboxInput = function() {
    const code = `
    <FormLabel htmlFor="form.checkBoxInput">Stacked Checkbox Input<span className="text-danger">*</span></FormLabel>
    <FormGroup>
        <FormCheck type="checkbox" label="Option 1" name="option1"></FormCheck>
        <FormCheck type="checkbox" label="Option 2" name="option2"></FormCheck>
        <FormCheck type="checkbox" disabled label="Option 3" name="option3"></FormCheck>
    </FormGroup>
    <FormLabel htmlFor="form.checkBoxInput">Stacked Checkbox Input<span className="text-danger">*</span></FormLabel>
    <FormGroup>
        <FormCheck inline type="checkbox" label="Option 1" name="option1"></FormCheck>
        <FormCheck inline type="checkbox" label="Option 2" name="option2"></FormCheck>
        <FormCheck inline disabled type="checkbox" label="Option 3" name="option3"></FormCheck>
    </FormGroup>
    `;
    return (
        <>
            <ElementCard name="Checkbox Input">
                <FormLabel htmlFor="form.checkBoxInput">Stacked Checkbox Input<span className="text-danger">*</span></FormLabel>
                <FormGroup>
                    <FormCheck type="checkbox" label="Option 1" name="option1"></FormCheck>
                    <FormCheck type="checkbox" label="Option 2" name="option2"></FormCheck>
                    <FormCheck type="checkbox" disabled label="Option 3" name="option3"></FormCheck>
                </FormGroup>
                <FormLabel htmlFor="form.checkBoxInput">Stacked Checkbox Input<span className="text-danger">*</span></FormLabel>
                <FormGroup>
                    <FormCheck inline type="checkbox" label="Option 1" name="option1"></FormCheck>
                    <FormCheck inline type="checkbox" label="Option 2" name="option2"></FormCheck>
                    <FormCheck inline disabled type="checkbox" label="Option 3" name="option3"></FormCheck>
                </FormGroup>
            </ElementCard>
            <ElementCode code={code}></ElementCode>
        </>
    )
}
export default CheckboxInput;