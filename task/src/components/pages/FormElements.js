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
import ElementCode from "../layout/ElementCode";
const FormElements = function() {
    const bootstrapInst = `
npm install react-bootstrap bootstrap
    `;
    const importBootstrap = `
//to add components to react project
import Button from 'react-bootstrap/Button';
//or
import { Button } from 'react-bootstrap';
    `;
    const bootstrapIconsInst = `
npm i react-bootstrap-icons
    `;
    const importIcons = `
//At the top of you index.js file import this
import 'bootstrap-icons/font/bootstrap-icons.css';
    `;
    return (
        <Container>
            <h2 className="text-center pt-3">To work with bootstrap</h2>
            <ElementCode code={bootstrapInst}/>
            <ElementCode code={importBootstrap}/>
            <h2 className="text-center pt-3">To work with bootstrap icons</h2>
            <ElementCode code={bootstrapIconsInst}/>
            <ElementCode code={importIcons}/>
            <TextInput/>
            <PasswordInput/>
            <NumericInput/>
            <TextareaInput/>
            <FileUploadInput/>
            <CurrencyInput/>
            <SelectInput/>
            <CheckboxInput/>
            <RadioButtonInput/>
            <DatePickerEnInput/>
            <DatePickerArInput/>
            <ValidatingInput/>
        </Container>
    )
}
export default FormElements;