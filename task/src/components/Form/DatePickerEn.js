import ElementCard from "../layout/ElementCard";
import ElementCode from "../layout/ElementCode";
import { FormLabel, InputGroup, FormControl} from "react-bootstrap";
const DatePickerEnInput = function() {
    const code = `
    <FormGroup>
        <FormLabel htmlFor="form.fileUploadInput">FileUpload Input<span className="text-danger">*</span></FormLabel>
        <FormControl controlId="form.fileUploadInput" type="file" placeholder="Upload" required multiple></FormControl>
    </FormGroup>
    `;
    return (
        <>
            <ElementCard name="Select Input">
            <FormLabel>Date Input</FormLabel>
            <InputGroup>
                <FormControl type="date"/>
                {/* <InputGroup.Append>
                    <InputGroup.Text>
                        <i className="fas fa-calendar-alt"></i>
                    </InputGroup.Text>
                </InputGroup.Append> */}
            </InputGroup>
            </ElementCard>
            <ElementCode code={code}></ElementCode>
        </>
    )
}
export default DatePickerEnInput;