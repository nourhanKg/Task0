import ElementCard from "../layout/ElementCard";
import ElementCode from "../layout/ElementCode";
import { FormLabel, InputGroup, FormControl} from "react-bootstrap";
import HijriDatePicker from 'hijri-date-picker';
import { useState } from "react";
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
const DatePickerArInput = function() {
    // const [selectDate, setSelectDate] = useState(Date.now());
    // const updateDate = function() {
    //     setSelectDate()
    // }
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
                {/* <HijriDatePicker inputName="hijri_date" className="form-control" selectedDate="1439/08/02" dateFormat="iMM/iYYYY/iDD" quickSelect/>
                <HijriDatePicker></HijriDatePicker> */}
                {/* <DatePicker selected={selectDate} onChange={(date) => updateDate(date)}></DatePicker> */}
            </ElementCard>
            <ElementCode code={code}></ElementCode>
        </>
    )
}
export default DatePickerArInput;