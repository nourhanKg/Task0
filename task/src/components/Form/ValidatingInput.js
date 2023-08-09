import ElementCard from "../layout/ElementCard";
import ElementCode from "../layout/ElementCode";
import { FormControl, FormLabel, FormGroup, Form} from "react-bootstrap";
const ValidatingInput = function() {
    const code = `
    <FormGroup className="mb-3">
        <FormLabel htmlFor="form.invalidInput">Invalid Input<span className="text-danger">*</span></FormLabel>
        <FormControl isInvalid id="form.invalidInput" type="number" placeholder="10" step="10" min="0" max="100" required></FormControl>
        <Form.Control.Feedback type="invalid">Please enter a valid input!</Form.Control.Feedback>
    </FormGroup>
    <FormGroup className="mb-3 position-relative">
        <FormLabel htmlFor="form.invalidInputTooltip">Invalid Input with Tooltip<span className="text-danger">*</span></FormLabel>
        <FormControl isInvalid id="form.invalidInputTooltip" type="number" placeholder="10" step="10" min="0" max="100" required></FormControl>
        <Form.Control.Feedback tooltip type="invalid">Please enter a valid input!</Form.Control.Feedback>
    </FormGroup>
    <FormGroup className="mb-3">
        <FormLabel htmlFor="form.validInput">Valid Input<span className="text-danger">*</span></FormLabel>
        <FormControl isValid id="form.validInput" type="number" placeholder="10" step="10" min="0" max="100" required></FormControl>
        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
    </FormGroup>
    `;
    return (
        <>
            <ElementCard name="Validating Input">
                <FormGroup className="mb-3">
                    <FormLabel htmlFor="form.invalidInput">Invalid Input<span className="text-danger">*</span></FormLabel>
                    <FormControl isInvalid id="form.invalidInput" type="number" placeholder="10" step="10" min="0" max="100" required></FormControl>
                    <Form.Control.Feedback type="invalid">Please enter a valid input!</Form.Control.Feedback>
                </FormGroup>
                <FormGroup className="mb-3 position-relative">
                    <FormLabel htmlFor="form.invalidInputTooltip">Invalid Input with Tooltip<span className="text-danger">*</span></FormLabel>
                    <FormControl isInvalid id="form.invalidInputTooltip" type="number" placeholder="10" step="10" min="0" max="100" required></FormControl>
                    <Form.Control.Feedback tooltip type="invalid">Please enter a valid input!</Form.Control.Feedback>
                </FormGroup>
                <FormGroup className="mb-3">
                    <FormLabel htmlFor="form.validInput">Valid Input<span className="text-danger">*</span></FormLabel>
                    <FormControl isValid id="form.validInput" type="number" placeholder="10" step="10" min="0" max="100" required></FormControl>
                    <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                </FormGroup>
            </ElementCard>
            <ElementCode code={code}></ElementCode>
        </>
    )
}
export default ValidatingInput;