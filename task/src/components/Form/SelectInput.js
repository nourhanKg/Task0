import ElementCard from "../layout/ElementCard";
import ElementCode from "../layout/ElementCode";
import { FormLabel, FormGroup, FormSelect } from "react-bootstrap";
const SelectInput = function() {
    const code = `
    <FormGroup>
        <FormLabel htmlFor="form.fileUploadInput">FileUpload Input<span className="text-danger">*</span></FormLabel>
        <FormControl controlId="form.fileUploadInput" type="file" placeholder="Upload" required multiple></FormControl>
    </FormGroup>
    `;
    return (
        <>
            <ElementCard name="Select Input">
                <FormGroup>
                    <FormLabel htmlFor="form.singleSelectInput">Single Select Input<span className="text-danger">*</span></FormLabel>
                    <FormSelect id="form.singleSelectInput">
                        <option>Select</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </FormSelect>
                </FormGroup>
                <FormGroup>
                    <FormLabel htmlFor="form.multiSelectInput">Multiple Select Input<span className="text-danger">*</span></FormLabel>
                    <select className="select" multiple filter id="form.multiSelectInput">
                        <option>Select</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </FormGroup>
            </ElementCard>
            <ElementCode code={code}></ElementCode>
        </>
    )
}
export default SelectInput;