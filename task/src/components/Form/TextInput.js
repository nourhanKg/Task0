import ElementCard from "../layout/ElementCard";
import ElementCode from "../layout/ElementCode";
import { FormControl, FormLabel, FormGroup } from "react-bootstrap";
const TextInput = function() {
    const code = `
    <FormGroup>
        <FormLabel htmlFor="form.textInput">Text Input<span className="text-danger">*</span></FormLabel>
        <FormControl id="form.textInput" type="text" placeholder="Write Your Name" required></FormControl>
    </FormGroup>
    `;
    return (
        <>
            <ElementCard name="Text Input">
                <FormGroup>
                    <FormLabel htmlFor="form.textInput">Text Input<span className="text-danger">*</span></FormLabel>
                    <FormControl id="form.textInput" type="text" placeholder="Write Your Name" required></FormControl>
                </FormGroup>
            </ElementCard>
            <ElementCode code={code}></ElementCode>
        </>
    )
}
export default TextInput;