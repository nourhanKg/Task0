import ElementCard from "../layout/ElementCard";
import ElementCode from "../layout/ElementCode";
import {FormLabel, FormGroup } from "react-bootstrap";
import PasswordStrength from 'react-password-strength';
import classes from "./PasswordInput.module.css";
const PasswordInput = function() {
    const handlePasswordChange = function() {
    }
    const installCode = `npm i react-password-strength`;
    const importCode = `import PasswordStrength from 'react-password-strength';`;
    const code = `
<FormGroup>
    <FormLabel htmlFor="form.passwordInput">Password Input<span className="text-danger">*</span></FormLabel>
    <PasswordStrength
        id="form.passwordInput"
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
    `;
    return (
        <>
            <ElementCard name="Password Input">
                <FormGroup>
                    <FormLabel htmlFor="form.passwordInput">Password Input<span className="text-danger">*</span></FormLabel>
                    <PasswordStrength
                        id="form.passwordInput"
                        className={`form-control ${classes.ReactPasswordStrength}`}
                        name="password"
                        minLength={8}
                        minScore={2}
                        scoreWords={['Weak', 'Okay', 'Good', 'Strong', 'Very Strong']}
                        changeCallback={handlePasswordChange}
                        placeholder="Enter a password"
                        value=""
                    />
                </FormGroup>
            </ElementCard>
            <ElementCode code={installCode}></ElementCode>
            <ElementCode code={importCode}></ElementCode>
            <ElementCode code={code}></ElementCode>
        </>
    )
}
export default PasswordInput;