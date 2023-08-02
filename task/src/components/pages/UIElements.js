import { Container } from "react-bootstrap";
import MainBtn from "../UI/Buttons/MainBtn";
import SecondaryBtn from "../UI/Buttons/SeconderyBtn";
import TerinaryBtn from "../UI/Buttons/TerinaryBtn";
const UIElements = function() {
    return (
        <Container>
            <MainBtn></MainBtn>
            <SecondaryBtn></SecondaryBtn>
            <TerinaryBtn></TerinaryBtn>
        </Container>
    )
}
export default UIElements;