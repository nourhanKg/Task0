import ElementCard from "../layout/ElementCard";
import ElementCode from "../layout/ElementCode";
import { FormLabel, InputGroup } from "react-bootstrap";
import DatePicker from "react-multi-date-picker";
import hijri from "react-date-object/calendars/arabic";
import arabic from "react-date-object/locales/arabic_ar";
const DatePickerArInput = function () {
  const code = `
  <FormLabel htmlFor="form.datePickerAr">>
  Date Input<span className="text-danger">*</span>
  </FormLabel>
  <InputGroup>
    <DatePicker
      id="form.datePickerAr"
      type="date"
      calendar={hijri}
      locale={arabic}
      inputClass="form-control position-relative"
      containerStyle={{ width: "100%" }}
      arrow={false}
    />
  </InputGroup>
    `;
  return (
    <>
      <ElementCard name="Select Input">
        <FormLabel htmlFor="form.datePickerAr">
          Date Input<span className="text-danger">*</span>
        </FormLabel>
        <InputGroup>
          <DatePicker
            id="form.datePickerAr"
            type="date"
            calendar={hijri}
            locale={arabic}
            inputClass="form-control position-relative"
            containerStyle={{ width: "100%" }}
            arrow={false}
          />
        </InputGroup>
      </ElementCard>
      <ElementCode code={code}></ElementCode>
    </>
  );
};
export default DatePickerArInput;
