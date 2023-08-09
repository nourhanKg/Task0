import { Container, Image} from "react-bootstrap";
import logo from "../../assets/Link_logo_vertical_color_light_RGB.svg";
const Header = function() {
    return (
        <Container className="bg-main py-3 d-flex justify-content-between align-items-center">
            <Image src={logo} height="100px"/>
        </Container>
    )
}
export default Header;