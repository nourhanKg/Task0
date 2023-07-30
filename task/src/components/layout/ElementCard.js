import { Row, Col } from "react-bootstrap"
const ElementCard = function(props) {
    return (
        <>
            <hr/>
            <h2 className="h3 text-center">{props.name}</h2>
            <Row className="my-4 shadow-lg">
                <Col className="p-3">
                    {props.children}                
                </Col>
            </Row>
        </>
    )
}
export default ElementCard;