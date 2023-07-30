import { Container, Image, Button } from "react-bootstrap";
import logo from "../../assets/logo.png"
const Header = function() {
    return (
        <Container fluid className="px-0 d-flex justify-content-between align-items-center">
            <Image src={logo} height="60px"/>
            <div className="pe-4">
                <Button variant="primary" className="rounded-pill">Eng</Button>
            </div>
        </Container>
    )
}
export default Header;