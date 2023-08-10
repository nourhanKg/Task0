import ElementCard from "../layout/ElementCard";
import ElementCode from "../layout/ElementCode";
import { FormControl, FormLabel, FormGroup } from "react-bootstrap";
const FileUploadInput = function() {
    const code = `
<FormGroup>
    <FormLabel htmlFor="form.fileUploadInput">FileUpload Input<span className="text-danger">*</span></FormLabel>
    <FormControl id="form.fileUploadInput" type="file" placeholder="Upload" required multiple></FormControl>
</FormGroup>
    `;
    return (
        <>
            <ElementCard name="FileUpload Input">
                <FormGroup>
                    <FormLabel htmlFor="form.fileUploadInput">FileUpload Input<span className="text-danger">*</span></FormLabel>
                    <FormControl id="form.fileUploadInput" type="file" placeholder="Upload" required multiple></FormControl>
                </FormGroup>
            </ElementCard>
            <ElementCode code={code}></ElementCode>
        </>
    )
}
export default FileUploadInput;