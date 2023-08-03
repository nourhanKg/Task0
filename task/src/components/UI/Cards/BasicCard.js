import ElementCard from "../../layout/ElementCard";
import ElementCode from "../../layout/ElementCode";
import { Button, Card } from "react-bootstrap";
const BasicCard = function () {
  const code = `
  <Card className="text-center">
  <Card.Header>Featured</Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
  <Card.Footer className="text-muted">2 days ago</Card.Footer>
</Card>
  `;
  return (
    <>
      <ElementCard name="Basic Card">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://images.ctfassets.net/hrltx12pl8hq/3Z1N8LpxtXNQhBD5EnIg8X/975e2497dc598bb64fde390592ae1133/spring-images-min.jpg"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="terinary">Click</Button>
          </Card.Body>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      </ElementCard>
      <ElementCode code={code}></ElementCode>
    </>
  );
};
export default BasicCard;
