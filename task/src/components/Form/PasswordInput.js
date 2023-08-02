import ElementCard from "../layout/ElementCard";
import ElementCode from "../layout/ElementCode";
import { FormControl, FormLabel, FormGroup } from "react-bootstrap";
import PasswordStrength from 'react-password-strength';
const PasswordInput = function() {
    const password = "qq";
    const handlePasswordChange = function() {

    }
    const code = `
    <FormGroup>
        <FormLabel htmlFor="form.passwordInput">Password Input<span className="text-danger">*</span></FormLabel>
        <FormControl controlId="form.passwordInput" type="number" placeholder="10" step="10" min="0" max="100" required></FormControl>
    </FormGroup>
    `;
    return (
        <>
            <ElementCard name="Password Input">
                <FormGroup>
                    <FormLabel htmlFor="form.passwordInput">Password Input<span className="text-danger">*</span></FormLabel>
                    <PasswordStrength
                        className="form-control"
                        name="password"
                        minLength={8}
                        minScore={2}
                        scoreWords={['Weak', 'Okay', 'Good', 'Strong', 'Very Strong']}
                        changeCallback={handlePasswordChange}
                        placeholder="Enter a password"
                        value={password}
                    />
                </FormGroup>
            </ElementCard>
            <ElementCode code={code}></ElementCode>
        </>
    )
}
export default PasswordInput;