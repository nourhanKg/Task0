import ElementCard from "../layout/ElementCard";
import ElementCode from "../layout/ElementCode";
import { FormControl, FormLabel, FormGroup } from "react-bootstrap";
const TextareaInput = function() {
    const code = `
    <FormGroup>
        <FormLabel htmlFor="form.TextareaInput">Textarea Input<span className="Textarea-danger">*</span></FormLabel>
        <FormControl id="form.TextareaInput" type="Textarea" placeholder="Write Your Name" required></FormControl>
    </FormGroup>
    `;
    return (
        <>
            <ElementCard name="Textarea Input">
                <FormGroup>
                    <FormLabel htmlFor="form.TextareaInput">Textarea Input<span className="Textarea-danger">*</span></FormLabel>
                    <FormControl rows={5} id="form.TextareaInput" as="textarea" placeholder="Write Your message" required></FormControl>
                </FormGroup>
            </ElementCard>
            <ElementCode code={code}></ElementCode>
        </>
    )
}
export default TextareaInput;