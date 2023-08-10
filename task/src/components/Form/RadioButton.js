import ElementCard from "../layout/ElementCard";
import ElementCode from "../layout/ElementCode";
import {FormLabel, FormGroup, FormCheck } from "react-bootstrap";
const RadioButtonInput = function() {
    const code = `
<FormLabel htmlFor="form.RadioButtonInput">Stacked RadioButton Input<span className="text-danger">*</span></FormLabel>
<FormGroup id="form.RadioButtonInput">
    <FormCheck type="radio" label="Option 1" name="option1"></FormCheck>
    <FormCheck type="radio" label="Option 2" name="option1"></FormCheck>
    <FormCheck type="radio" disabled label="Option 3" name="option1"></FormCheck>
</FormGroup>
<FormLabel htmlFor="form.RadioButtonInput">Stacked RadioButton Input<span className="text-danger">*</span></FormLabel>
<FormGroup id="form.RadioButtonInput">
    <FormCheck inline type="radio" label="Option 1" name="option2"></FormCheck>
    <FormCheck inline type="radio" label="Option 2" name="option2"></FormCheck>
    <FormCheck inline disabled type="radio" label="Option 3" name="option2"></FormCheck>
</FormGroup>
    `;
    return (
        <>
            <ElementCard name="RadioButton Input">
                <FormLabel htmlFor="form.RadioButtonInput">Stacked RadioButton Input<span className="text-danger">*</span></FormLabel>
                <FormGroup id="form.RadioButtonInput">
                    <FormCheck type="radio" label="Option 1" name="option1"></FormCheck>
                    <FormCheck type="radio" label="Option 2" name="option1"></FormCheck>
                    <FormCheck type="radio" disabled label="Option 3" name="option1"></FormCheck>
                </FormGroup>
                <FormLabel htmlFor="form.RadioButtonInput">Stacked RadioButton Input<span className="text-danger">*</span></FormLabel>
                <FormGroup id="form.RadioButtonInput">
                    <FormCheck inline type="radio" label="Option 1" name="option2"></FormCheck>
                    <FormCheck inline type="radio" label="Option 2" name="option2"></FormCheck>
                    <FormCheck inline disabled type="radio" label="Option 3" name="option2"></FormCheck>
                </FormGroup>
            </ElementCard>
            <ElementCode code={code}></ElementCode>
        </>
    )
}
export default RadioButtonInput;