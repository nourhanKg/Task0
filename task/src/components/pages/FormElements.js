import { Container } from "react-bootstrap";
import CurrencyInput from "../Form/CurrencyInput";
import NumericInput from "../Form/NumericInput";
import TextInput from "../Form/TextInput";
import TextareaInput from "../Form/TextareaInput";
import ValidatingInput from "../Form/ValidatingInput";
import PasswordInput from "../Form/PasswordInput";
import FileUploadInput from "../Form/FileUploadInput";
import SelectInput from "../Form/SelectInput";
import CheckboxInput from "../Form/CheckboxInput";
import RadioButtonInput from "../Form/RadioButton";
import DatePickerEnInput from "../Form/DatePickerEn";
import DatePickerArInput from "../Form/DatePickerAr";
const FormElements = function() {
    return (
        <Container>
            <CurrencyInput/>
            <NumericInput/>
            <TextInput/>
            <PasswordInput/>
            <TextareaInput/>
            <ValidatingInput/>
            <FileUploadInput/>
            <SelectInput/>
            <CheckboxInput/>
            <RadioButtonInput/>
            <DatePickerEnInput/>
            <DatePickerArInput/>
        </Container>
    )
}
export default FormElements;