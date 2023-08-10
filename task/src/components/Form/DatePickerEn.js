import ElementCard from "../layout/ElementCard";
import ElementCode from "../layout/ElementCode";
import { FormLabel, InputGroup, FormControl } from "react-bootstrap";
const DatePickerEnInput = function () {
  const code = `
  <FormLabel htmlFor="form.datePickerEn">
    Date Input <span className="text-danger">*</span>
  </FormLabel>
  <InputGroup>
    <FormControl id="datePickerEn" type="date" />
  </InputGroup>
    `;
  return (
    <>
      <ElementCard name="Date Picker En">
        <FormLabel htmlFor="form.datePickerEn">
          Date Input <span className="text-danger">*</span>
        </FormLabel>
        <InputGroup>
          <FormControl id="datePickerEn" type="date" />
        </InputGroup>
      </ElementCard>
      <ElementCode code={code}></ElementCode>
    </>
  );
};
export default DatePickerEnInput;
