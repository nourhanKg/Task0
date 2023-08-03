import ElementCard from "../layout/ElementCard";
import ElementCode from "../layout/ElementCode";
import { FormLabel, InputGroup, FormControl } from "react-bootstrap";
import DatePicker from "react-multi-date-picker";
const DatePickerEnInput = function () {
  const code = `
    <FormGroup>
        <FormLabel htmlFor="form.fileUploadInput">FileUpload Input<span className="text-danger">*</span></FormLabel>
        <FormControl controlId="form.fileUploadInput" type="file" placeholder="Upload" required multiple></FormControl>
    </FormGroup>
    `;
  return (
    <>
      <ElementCard name="Select Input">
        <FormLabel>
          Date Input <span className="text-danger">*</span>
        </FormLabel>
        <InputGroup>
          <FormControl type="date" />
        </InputGroup>
      </ElementCard>
      <ElementCode code={code}></ElementCode>
    </>
  );
};
export default DatePickerEnInput;
