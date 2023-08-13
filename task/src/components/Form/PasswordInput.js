import ElementCard from "../layout/ElementCard";
import ElementCode from "../layout/ElementCode";
import {FormLabel, FormGroup, FormControl } from "react-bootstrap";
import { useState } from "react";
import PasswordStrengthBar from 'react-password-strength-bar';
const PasswordInput = function() {
    const [password, setPassword] = useState("");
    const handlePasswordChange = function(e) {
        const newPass = e.target.value;
        setPassword(newPass);
    }
    const installCode = `npm i react-password-strength-bar`;
    const importCode = `import PasswordStrengthBar from 'react-password-strength-bar';`;
    const code = `
    <FormGroup>
    <FormLabel htmlFor="form.passwordInput">Password Input<span className="text-danger">*</span></FormLabel>
    <FormControl id="form.passwordInput" type="password" onChange={handlePasswordChange}></FormControl>
    <PasswordStrengthBar 
        password={password}
        minLength={8}
        minScore={2}
        scoreWords={['Weak', 'Okay', 'Good', 'Strong', 'Very Strong']}
    />
</FormGroup>
    `;
    return (
        <>
            <ElementCard name="Password Input">
                <FormGroup>
                    <FormLabel htmlFor="form.passwordInput">Password Input<span className="text-danger">*</span></FormLabel>
                    <FormControl id="form.passwordInput" type="password" onChange={handlePasswordChange}></FormControl>
                    <PasswordStrengthBar 
                        password={password}
                        minLength={8}
                        minScore={2}
                        scoreWords={['Weak', 'Okay', 'Good', 'Strong', 'Very Strong']}
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