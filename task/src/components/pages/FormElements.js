import { Container } from "react-bootstrap";
import CurrencyInput from "../Form/CurrencyInput";
import NumericInput from "../Form/NumericInput";
import TextInput from "../Form/TextInput";
const FormElements = function() {
    return (
        <Container>
            <CurrencyInput/>
            <NumericInput/>
            <TextInput/>
        </Container>
    )
}
export default FormElements;