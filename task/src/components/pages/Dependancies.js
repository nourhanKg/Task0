import { Container } from "react-bootstrap";
import ElementCode from "../layout/ElementCode";

const Dependancies = function() {
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
    const installPassCode = `npm i react-password-strength`;
    const importPassCode = `import PasswordStrength from 'react-password-strength';`;
    const installSelectCode = `npm i multiselect-react-dropdown`;
    const importSelectCode = `import { Multiselect } from "multiselect-react-dropdown"`;
    const installHijriCode = `npm i react-multi-date-picker`;
    const importHijriCode = `import hijri from "react-date-object/calendars/arabic";
import arabic from "react-date-object/locales/arabic_ar";`;
    return (
        <Container>  
            <h2 className="pt-3">Bootstrap & Bootstrap Icons</h2>
            <ElementCode code={bootstrapInst}/>
            <ElementCode code={importBootstrap}/>
            <ElementCode code={bootstrapIconsInst}/>
            <ElementCode code={importIcons}/>
            <h2 className="pt-3">Password input Strength Bar</h2>
            <ElementCode code={installPassCode}></ElementCode>
            <ElementCode code={importPassCode}></ElementCode>
            <h2 className="pt-3">Multiselect Input</h2>
            <ElementCode code={installSelectCode}></ElementCode>
            <ElementCode code={importSelectCode}></ElementCode>
            <h2 className="pt-3">Hijri Date Picker</h2>
            <ElementCode code={installHijriCode}></ElementCode>
            <ElementCode code={importHijriCode}></ElementCode>
        </Container>
    )
}
export default Dependancies;