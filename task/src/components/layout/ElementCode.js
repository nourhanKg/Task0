import { Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
const ElementCode = function(props) {
    const [isCodeCopied, setIsCodeCopied] = useState(false);
    const copyCode = function() {
        console.log(props.code);
        navigator.clipboard.writeText(props.code);
        setIsCodeCopied(true);
    }
    return (
        <Row className="my-4 shadow-lg bg-dark text-light">
            <Col className="p-3 position-relative">
                <pre> 
                    <code>{props.code}</code>
                </pre>
                <Button onClick={copyCode} variant="secondary position-absolute top-0 end-0" className="bg-transparent
                ">
                    {isCodeCopied ?<i className="bi bi-clipboard-check"></i> : <i className="bi bi-clipboard"></i>}
                </Button>             
            </Col>
        </Row>
    )
}
export default ElementCode;