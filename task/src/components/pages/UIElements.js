import { Container } from "react-bootstrap";
import MainBtn from "../UI/MainBtn";
import SecondaryBtn from "../UI/Buttons/SeconderyBtn";
const UIElements = function() {
    return (
        <Container>
            <MainBtn></MainBtn>
            <SecondaryBtn></SecondaryBtn>
            {/* <ElementCard>
                <p>I'm really working hard</p>
            </ElementCard> */}
        </Container>
    )
}
export default UIElements;